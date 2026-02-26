'use client';
import { useState, useEffect, useCallback, useRef } from 'react';

export default function Modal({ project, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = project.slides || [];
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);
  // Capture the element that triggered the modal so we can restore focus on close
  const returnFocusRef = useRef(null);

  useEffect(() => {
    returnFocusRef.current = document.activeElement;
    closeBtnRef.current?.focus();
    return () => {
      returnFocusRef.current?.focus();
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Focus trap — keep Tab / Shift+Tab inside the dialog
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const focusable = dialog.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const trapFocus = (e) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };
    dialog.addEventListener('keydown', trapFocus);
    return () => dialog.removeEventListener('keydown', trapFocus);
  }, [currentSlide]); // re-query focusable elements when slide changes

  const handleOverlayClick = useCallback(
    (e) => { if (e.target === e.currentTarget) onClose(); },
    [onClose]
  );

  const prev = () => setCurrentSlide((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setCurrentSlide((i) => (i === slides.length - 1 ? 0 : i + 1));

  const slide = slides[currentSlide];

  return (
    <div className="modal modal-open" onClick={handleOverlayClick} role="presentation">
      <div
        ref={dialogRef}
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.alt || 'Project'} preview`}
      >
        <div className="modal-body">

          {/* Slider social icons */}
          <div className="slider-social">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit live site (opens in new tab)"
                title="Live Site"
              >
                <i className="fa fa-globe" aria-hidden="true" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label="View source code on GitHub (opens in new tab)"
                title="GitHub repository"
              >
                <i className="fab fa-github" aria-hidden="true" />
              </a>
            )}
            <button
              ref={closeBtnRef}
              onClick={onClose}
              aria-label="Close preview"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <i className="fa fa-times-circle close" title="Close Window" aria-hidden="true" />
            </button>
          </div>

          {/* Current slide */}
          <div className="slide-item active slider-fade">
            {slide.video ? (
              <video
                poster={slide.poster}
                controls
                loop
                style={{ width: '100%', height: 600, objectFit: 'cover' }}
                aria-label={slide.caption}
              >
                <source src={slide.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={slide.img}
                alt={slide.caption}
                style={{
                  width: '100%',
                  height: 600,
                  objectFit: slide.objectFit || 'cover',
                  display: 'block',
                }}
              />
            )}
            <div className="slider-caption">
              <p>{slide.caption}</p>
              <div className="slider-numbers" aria-live="polite" aria-atomic="true">
                {slide.num}
              </div>
            </div>
          </div>

          {/* Prev / Next */}
          {slides.length > 1 && (
            <>
              <button
                className="prev"
                onClick={prev}
                aria-label={`Previous image, ${currentSlide === 0 ? slides.length : currentSlide} of ${slides.length}`}
              >
                &#10094;
              </button>
              <button
                className="next"
                onClick={next}
                aria-label={`Next image, ${currentSlide === slides.length - 1 ? 1 : currentSlide + 2} of ${slides.length}`}
              >
                &#10095;
              </button>
            </>
          )}

        </div>
      </div>
    </div>
  );
}

