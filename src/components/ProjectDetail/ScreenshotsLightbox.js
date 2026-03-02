'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './ProjectDetail.module.css';

export default function ScreenshotsLightbox({ screenshots }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + screenshots.length) % screenshots.length);
  }, [screenshots.length]);

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % screenshots.length);
  }, [screenshots.length]);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, close, prev, next]);

  return (
    <>
      {/* ── Thumbnail grid ── */}
      <div className={styles.screenshotGrid}>
        {screenshots.map((shot, i) => (
          <figure key={i} className={styles.screenshotFigure}>
            <button
              type="button"
              className={styles.screenshotBtn}
              onClick={() => setActiveIndex(i)}
              aria-label={`Open ${shot.alt} in lightbox`}
            >
              <div className={styles.screenshotImgWrap}>
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.screenshotImg}
                  priority={shot.eager}
                />
                <span className={styles.screenshotZoomHint} aria-hidden="true">
                  <i className="fa fa-expand" />
                </span>
              </div>
            </button>
            <figcaption className={styles.screenshotCaption}>{shot.caption}</figcaption>
          </figure>
        ))}
      </div>

      {/* ── Lightbox overlay ── */}
      {isOpen && (
        <div
          className={styles.lightboxOverlay}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot lightbox"
        >
          {/* Counter */}
          <div className={styles.lightboxCounter} aria-live="polite">
            {activeIndex + 1} / {screenshots.length}
          </div>

          {/* Close */}
          <button
            className={styles.lightboxClose}
            onClick={close}
            aria-label="Close lightbox"
          >
            <i className="fa fa-times" aria-hidden="true" />
          </button>

          {/* Prev */}
          {screenshots.length > 1 && (
            <button
              className={`${styles.lightboxNav} ${styles.lightboxNavPrev}`}
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous image"
            >
              <i className="fa fa-chevron-left" aria-hidden="true" />
            </button>
          )}

          {/* Image */}
          <div
            className={styles.lightboxImgWrap}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={activeIndex}
              src={screenshots[activeIndex].fullSrc ?? screenshots[activeIndex].src}
              alt={screenshots[activeIndex].alt}
              fill
              sizes="100vw"
              className={styles.lightboxImg}
              priority
            />
          </div>

          {/* Caption */}
          <p className={styles.lightboxCaption}>
            {screenshots[activeIndex].caption}
          </p>

          {/* Next */}
          {screenshots.length > 1 && (
            <button
              className={`${styles.lightboxNav} ${styles.lightboxNavNext}`}
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next image"
            >
              <i className="fa fa-chevron-right" aria-hidden="true" />
            </button>
          )}
        </div>
      )}
    </>
  );
}
