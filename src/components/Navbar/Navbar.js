'use client';
import { useEffect, useRef } from 'react';
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

    // Close on nav link click
    const navLinks = navMenu.querySelectorAll('.' + styles.navLink);
    const closeMenu = () => {
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.classList.remove(styles.active);
      navMenu.classList.remove(styles.mobileActive);
    };

    // Nav highlight on scroll — home page only (sections exist here)
    const highlightNav = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const link = navMenu.querySelector(`a[href*=${sectionId}]`);
        if (!link) return;
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          link.classList.add(styles.navActive);
          link.setAttribute('aria-current', 'true');
        } else {
          link.classList.remove(styles.navActive);
          link.removeAttribute('aria-current');
        }
      });
    };

    hamburger.addEventListener('click', handleHamburger);
    navLinks.forEach((link) => link.addEventListener('click', closeMenu));
    window.addEventListener('scroll', handleScroll);
    if (isHome) window.addEventListener('scroll', highlightNav);

    return () => {
      hamburger.removeEventListener('click', handleHamburger);
      navLinks.forEach((link) => link.removeEventListener('click', closeMenu));
      window.removeEventListener('scroll', handleScroll);
      if (isHome) window.removeEventListener('scroll', highlightNav);
    };
  }, [isHome]);

  // On home page use anchor links; on sub-pages use /#section hrefs
  const href = (section) => (isHome ? `#${section}` : `/#${section}`);

  return (
    <nav className={styles.navbar} aria-label="Main navigation">
      <ul
        id="navbarItems"
        ref={navMenuRef}
        className={styles.navbarItems}
        data-aos="fade-down"
        data-aos-delay="400"
        data-aos-duration="1000"
      >
        <li>
          <a
            href={isHome ? '#home' : '/'}
            className={`${isHome ? styles.navActive : ''} ${styles.navLink}`}
          >
            Home
          </a>
        </li>
        <li>
          <a href={href('about')} className={styles.navLink}>
            About
          </a>
        </li>
        <li>
          <a href={href('resume')} className={styles.navLink}>
            Resume
          </a>
        </li>
        <li className={styles.navLogo}>
          <a href={isHome ? '#home' : '/'}>
            <Image
              src="/assets/images/logo.png"
              alt="Scott Sutherland Logo"
              width={100}
              height={100}
            />
          </a>
        </li>
        <li>
          <a href={href('portfolio')} className={styles.navLink}>
            Portfolio
          </a>
        </li>
        <li>
          <a href={href('contact')} className={styles.navLink}>
            Contact
          </a>
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

      {/* Mobile nav bar */}
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
