'use client';
import { useEffect } from 'react';

export default function Loader() {
  useEffect(() => {
    const handleLoad = () => {
      document.body.classList.add('loaded');
    };
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <div className="loader-wrapper">
      <div className="loader" />
      <div className="loader-section section-left" />
      <div className="loader-section section-right" />
    </div>
  );
}
