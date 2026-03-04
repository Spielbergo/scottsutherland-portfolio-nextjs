/**
 * Annerley Aquarium — main.js
 * Mobile nav, sticky header, scroll reveal, form validation, product carousel
 */

'use strict';

/* ====================================================
   UTILITY
   ==================================================== */
const qs  = (sel, ctx = document) => ctx.querySelector(sel);
const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ====================================================
   MOBILE NAV DRAWER
   ==================================================== */
(function initMobileNav() {
  const hamburger  = qs('.hamburger');
  const mobileNav  = qs('#mobile-nav');
  const overlay    = qs('#mobile-nav-overlay');
  const closeBtn   = qs('.mobile-nav-close');
  const mobileLinks = qsa('.mobile-nav-link');

  if (!hamburger || !mobileNav) return;

  let isOpen = false;

  // Track the previously focused element so we can restore focus on close
  let lastFocused = null;

  // All focusable elements inside the nav drawer
  const getFocusable = () =>
    qsa(
      'a[href], button:not([disabled]), input, textarea, [tabindex]:not([tabindex="-1"])',
      mobileNav
    );

  function openNav() {
    isOpen = true;
    lastFocused = document.activeElement;

    mobileNav.classList.add('is-open');
    overlay.classList.add('is-visible');
    hamburger.classList.add('is-open');

    hamburger.setAttribute('aria-expanded', 'true');
    mobileNav.setAttribute('aria-hidden', 'false');
    overlay.setAttribute('aria-hidden', 'false');

    // Enable tab to focusable elements inside nav
    mobileLinks.forEach(l => l.setAttribute('tabindex', '0'));

    // Trap focus
    document.body.style.overflow = 'hidden';
    mobileNav.focus();

    // Move focus to close button
    closeBtn.focus();
  }

  function closeNav() {
    isOpen = false;

    mobileNav.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    hamburger.classList.remove('is-open');

    hamburger.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('aria-hidden', 'true');

    mobileLinks.forEach(l => l.setAttribute('tabindex', '-1'));

    document.body.style.overflow = '';

    // Return focus
    if (lastFocused) lastFocused.focus();
  }

  // Focus trap inside drawer
  mobileNav.addEventListener('keydown', (e) => {
    if (!isOpen) return;
    const focusable = getFocusable();
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    if (e.key === 'Escape') closeNav();
  });

  hamburger.addEventListener('click', () => isOpen ? closeNav() : openNav());
  closeBtn.addEventListener('click', closeNav);
  overlay.addEventListener('click', closeNav);

  // Close on nav link click
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => closeNav());
  });
})();

/* ====================================================
   STICKY HEADER — add .scrolled class on scroll
   ==================================================== */
(function initStickyHeader() {
  const header = qs('.site-header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run on load
})();

/* ====================================================
   ACTIVE NAV LINK — highlight based on scroll position
   ==================================================== */
(function initActiveNav() {
  const sections = qsa('section[id]');
  const navLinks = qsa('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            const href = link.getAttribute('href').replace('#', '');
            const isActive = href === id;
            link.classList.toggle('active', isActive);
            link.toggleAttribute('aria-current', isActive);
            if (isActive) link.setAttribute('aria-current', 'page');
            else link.removeAttribute('aria-current');
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );

  sections.forEach(s => observer.observe(s));
})();

/* ====================================================
   SCROLL REVEAL ANIMATION
   ==================================================== */
(function initScrollReveal() {
  // Respect reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Assign reveal classes to key sections
  const revealMap = [
    ['.hero-content',            'reveal-left'],
    ['.hero-image',              'reveal-right'],
    ['.about-content',           'reveal-left'],
    ['.about-image',             'reveal-right'],
    ['.expert-content',          'reveal-left'],
    ['.expert-quote-card',       'reveal-right'],
    ['.fish-feature-image',      'reveal-left'],
    ['.fish-cards',              'reveal-right'],
    ['.expert-advice-banner',    'reveal'],
    ['.fish-care-content',       'reveal-left'],
    ['.fish-care-quote',         'reveal-right'],
    ['.products-header',         'reveal'],
    ['.product-card',            'reveal'],
    ['.exclusive-content',       'reveal'],
    ['.contact-content',         'reveal-left'],
    ['.contact-form-wrapper',    'reveal-right'],
    ['.review-card',             'reveal'],
  ];

  revealMap.forEach(([sel, cls]) => {
    qsa(sel).forEach((el, i) => {
      el.classList.add(cls);
      // Stagger cards
      if (i > 0) el.classList.add(`reveal-delay-${Math.min(i, 3)}`);
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  );

  qsa('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
})();

/* ====================================================
   CONTACT FORM VALIDATION
   ==================================================== */
(function initContactForm() {
  const form    = qs('#contact-form');
  if (!form) return;

  const success = qs('#form-success');

  const validators = {
    name: {
      el:  qs('#contact-name'),
      err: qs('#name-error'),
      validate(val) {
        if (!val.trim()) return 'Please enter your name.';
        if (val.trim().length < 2) return 'Name must be at least 2 characters.';
        return '';
      }
    },
    email: {
      el:  qs('#contact-email'),
      err: qs('#email-error'),
      validate(val) {
        if (!val.trim()) return 'Please enter your email address.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return 'Please enter a valid email address.';
        return '';
      }
    },
    message: {
      el:  qs('#contact-message'),
      err: qs('#message-error'),
      validate(val) {
        if (!val.trim()) return 'Please enter a message.';
        if (val.trim().length < 10) return 'Message must be at least 10 characters.';
        return '';
      }
    }
  };

  // Live validation on blur
  Object.values(validators).forEach(({ el, err, validate }) => {
    if (!el) return;
    el.addEventListener('blur', () => {
      const msg = validate(el.value);
      err.textContent = msg;
      el.classList.toggle('is-invalid', !!msg);
    });
    el.addEventListener('input', () => {
      if (el.classList.contains('is-invalid')) {
        const msg = validate(el.value);
        err.textContent = msg;
        el.classList.toggle('is-invalid', !!msg);
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let hasErrors = false;

    Object.values(validators).forEach(({ el, err, validate }) => {
      if (!el) return;
      const msg = validate(el.value);
      err.textContent = msg;
      el.classList.toggle('is-invalid', !!msg);
      if (msg) { hasErrors = true; if (!hasErrors) el.focus(); }
    });

    if (hasErrors) {
      // Focus first invalid field
      const firstInvalid = form.querySelector('.is-invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Simulate form submission
    const submitBtn = form.querySelector('.form-submit-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    setTimeout(() => {
      form.reset();
      form.style.display = 'none';
      if (success) {
        success.removeAttribute('aria-hidden');
        success.focus();
      }
    }, 800);
  });
})();

/* ====================================================
   PRODUCTS SLIDER — keyboard/button prev/next
   ==================================================== */
(function initProductsNav() {
  const grid    = qs('#products-grid');
  const prevBtn = qs('#prod-prev');
  const nextBtn = qs('#prod-next');
  if (!grid || !prevBtn || !nextBtn) return;

  const cards = qsa('.product-card', grid);
  let current = 0;

  function scrollToCard(idx) {
    const card = cards[idx];
    if (!card) return;
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % cards.length;
    scrollToCard(current);
  });

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + cards.length) % cards.length;
    scrollToCard(current);
  });
})();

/* ====================================================
   SMOOTH SCROLL — for anchor links
   ==================================================== */
(function initSmoothScroll() {
  // Cache nav height to avoid repeated layout queries (reduces forced reflow)
  let navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 72;

  // Update cached value on resize (debounced)
  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 72;
    }, 150);
  }, { passive: true });

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const targetId = link.getAttribute('href').slice(1);
    if (!targetId) return;

    const target = document.getElementById(targetId);
    if (!target) return;

    e.preventDefault();

    // Read layout once (getBoundingClientRect) and use cached navHeight
    const top = Math.round(target.getBoundingClientRect().top + window.pageYOffset - navHeight);

    window.scrollTo({ top, behavior: 'smooth' });

    // Update focus for accessibility — defer focus to next frame to avoid layout thrash
    target.setAttribute('tabindex', '-1');
    requestAnimationFrame(() => {
      target.focus({ preventScroll: true });
      target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
    });
  });
})();

/* ====================================================
   FOOTER YEAR
   ==================================================== */
(function setFooterYear() {
  const yearEl = qs('#footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

/* ====================================================
   LAZY IMAGE LOADING — native + polyfill fallback
   ==================================================== */
(function initLazyImages() {
  if ('loading' in HTMLImageElement.prototype) return; // native support

  const lazyImages = qsa('img[loading="lazy"]');
  if (!lazyImages.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) img.src = img.dataset.src;
        observer.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });

  lazyImages.forEach(img => observer.observe(img));
})();
