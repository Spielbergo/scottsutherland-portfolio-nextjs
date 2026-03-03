'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const hamburgerRef = useRef(null);
  const navMenuRef = useRef(null);
  const mobileNavRef = useRef(null);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isPortfolio = pathname === '/portfolio';

  // Track which section is in view — only meaningful on the home page.
  // Driving this from React state (not DOM classList) means highlights
  // are always in sync with the current route and never go stale.
  const [activeSection, setActiveSection] = useState('');

  // Clear section state whenever we leave (or arrive at) a non-home route
  useEffect(() => {
    if (!isHome) setActiveSection('');
  }, [isHome]);

  useEffect(() => {
    const hamburger = hamburgerRef.current;
    const navMenu = navMenuRef.current;
    const mobileNav = mobileNavRef.current;

    // Scroll: show mobile title bar
    const handleScroll = () => {
      if (window.scrollY > 300) {
        mobileNav.classList.add(styles.mobileNavScroll);
      } else {
        mobileNav.classList.remove(styles.mobileNavScroll);
      }
    };

    // Hamburger toggle
    const handleHamburger = () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!expanded));
      hamburger.classList.toggle(styles.active);
      navMenu.classList.toggle(styles.mobileActive);
      if (window.scrollY < 300) {
        mobileNav.classList.add(styles.mobileNavScroll);
      }
    };

    // Close drawer on any nav link click
    const navLinks = navMenu.querySelectorAll('.' + styles.navLink);
    const closeMenu = () => {
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.classList.remove(styles.active);
      navMenu.classList.remove(styles.mobileActive);
    };

    // Update activeSection state based on scroll position — home only.
    // Uses the "last section whose top edge has passed" approach.
    const highlightNav = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;
      let current = 'home'; // default to home when at the very top
      sections.forEach((section) => {
        if (scrollY >= section.offsetTop - 120) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    hamburger.addEventListener('click', handleHamburger);
    navLinks.forEach((link) => link.addEventListener('click', closeMenu));
    window.addEventListener('scroll', handleScroll);
    if (isHome) {
      highlightNav(); // set correct state immediately on mount
      window.addEventListener('scroll', highlightNav);
    }

    return () => {
      hamburger.removeEventListener('click', handleHamburger);
      navLinks.forEach((link) => link.removeEventListener('click', closeMenu));
      window.removeEventListener('scroll', handleScroll);
      if (isHome) window.removeEventListener('scroll', highlightNav);
    };
  }, [isHome]);

  // Anchor helpers
  const href = (section) => (isHome ? `#${section}` : `/#${section}`);

  // Returns navActive class only when the given section is current (home only)
  const sc = (id) =>
    isHome && activeSection === id
      ? `${styles.navLink} ${styles.navActive}`
      : styles.navLink;

  return (
    <nav className={styles.navbar} aria-label="Main navigation">
      <ul
        id="navbarItems"
        ref={navMenuRef}
        className={styles.navbarItems}
      >
        <li>
          <Link href={isHome ? '#home' : '/'} className={sc('home')}>
            Home
          </Link>
        </li>
        <li>
          <Link href={href('about')} className={sc('about')}>
            About Scott
          </Link>
        </li>
        <li>
          <Link href={href('resume')} className={sc('resume')}>
            Resume
          </Link>
        </li>
        <li className={styles.navLogo}>
          <Link href={isHome ? '#home' : '/'}>
            <Image
              src="/assets/images/logos/logo.webp"
              alt="Scott Sutherland Logo"
              width={100}
              height={100}
            />
          </Link>
        </li>
        <li>
          <Link href={href('portfolio')} className={sc('portfolio')}>
            Featured
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio"
            className={isPortfolio ? `${styles.navLink} ${styles.navActive}` : styles.navLink}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link href={href('contact')} className={sc('contact')}>
            Contact
          </Link>
        </li>
        <hr className={styles.navDivider} />
        <div className={styles.contactIcons}>
          <a
            aria-label="Email me link"
            href="mailto:scott@webcheddar.ca"
            title="Email me here or use the form"
          >
            <i className="fa fa-envelope" />
          </a>
          <a
            aria-label="My Github link"
            href="https://github.com/Spielbergo"
            target="_blank"
            rel="noreferrer"
            title="My Github"
          >
            <i className="fab fa-github" />
          </a>
          <a
            aria-label="My Linkedin link"
            href="https://www.linkedin.com/in/scott-sutherland-7745045a/"
            target="_blank"
            rel="noreferrer"
            title="My LinkedIn Page"
          >
            <i className="fab fa-linkedin" />
          </a>
        </div>
      </ul>

      {/* Mobile top bar */}
      <div ref={mobileNavRef} className={styles.mobileNavContainer}>
        <Image
          src="/assets/images/logo.png"
          alt="Scott Sutherland Logo"
          width={60}
          height={60}
        />
        <p>Scott Sutherland</p>
        <button
          ref={hamburgerRef}
          className={styles.hamburger}
          aria-label="Toggle navigation menu"
          aria-expanded="false"
          aria-controls="navbarItems"
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </div>
    </nav>
  );
}
