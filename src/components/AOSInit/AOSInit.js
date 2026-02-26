'use client';
import { useEffect } from 'react';

export default function AOSInit() {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.default.init({ once: true, easing: 'ease-out-cubic' });
    });
  }, []);

  return null;
}
