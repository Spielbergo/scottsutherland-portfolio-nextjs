'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function LogoSliderClient({ logos }) {
  const listRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    const displayed = parseInt(
      getComputedStyle(root).getPropertyValue('--marquee-elements-displayed') || '5',
      10
    );
    const list = listRef.current;
    if (!list) return;

    root.style.setProperty('--marquee-elements', logos.length);

    // Clone first N items
    const original = Array.from(list.children);
    for (let i = 0; i < displayed; i++) {
      list.appendChild(original[i].cloneNode(true));
    }
  }, [logos.length]);

  return (
    <div className="marquee">
      <ul className="marquee-content" ref={listRef}>
        {logos.map((logo, i) => (
          <li key={i}>
            <img src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
}
