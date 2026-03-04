import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className={styles.heroSection} aria-label="Introduction">
      <header className={styles.header}>
        {/* Flying Birds Animation */}
        {/* Credit: Steven Roberts — https://codepen.io/matchboxhero/pen/RLebOY */}
        <div className={styles.birdsContainer} aria-hidden="true">
          <div className={`${styles.birdContainer} ${styles.birdContainerOne}`}>
            <div className={`${styles.bird} ${styles.birdOne}`} />
          </div>
          <div className={`${styles.birdContainer} ${styles.birdContainerTwo}`}>
            <div className={`${styles.bird} ${styles.birdTwo}`} />
          </div>
          <div className={`${styles.birdContainer} ${styles.birdContainerThree}`}>
            <div className={`${styles.bird} ${styles.birdThree}`} />
          </div>
          <div className={`${styles.birdContainer} ${styles.birdContainerFour}`}>
            <div className={`${styles.bird} ${styles.birdFour}`} />
          </div>
        </div>

        {/* Header text */}
        <div className={styles.headerTextContainer}>
          <h1>
            Scott Su<span className={styles.zIndex}>the</span>rlan
            <span className={styles.zIndex}>d</span>
          </h1>
          <h2>Front End Developer</h2>
          <p className={styles.subtitleText}>I am currently available for freelance work.</p>
          <div className={styles.headerBtns}>
            <a
              href="https://www.linkedin.com/in/scott-sutherland-7745045a/"
              target="_blank"
              rel="noreferrer"
              className="button"
              aria-label="Visit my LinkedIn profile (opens in new tab)"
              title="My LinkedIn page"
            >
              <i className="fab fa-linkedin" /> Linkedin
            </a>
            <a
              href="https://github.com/Spielbergo"
              target="_blank"
              rel="noreferrer"
              className="button"
              aria-label="Visit my GitHub profile (opens in new tab)"
              title="My Github"
            >
              <i className="fab fa-github" /> Github
            </a>
          </div>
        </div>

        {/* Header image */}
        <img
          className={styles.headerImg}
          src="/assets/images/scott-sutherland-hero-large.webp"
          srcSet="/assets/images/scott-sutherland-hero-mob-sm.webp 320w, /assets/images/scott-sutherland-hero-mob.webp 480w, /assets/images/scott-sutherland-hero-card.webp 640w, /assets/images/scott-sutherland-hero-tablet.webp 768w, /assets/images/scott-sutherland-hero-desktop.webp 1024w, /assets/images/scott-sutherland-hero-mob-lg.webp 1536w, /assets/images/scott-sutherland-hero-large.webp 1920w"
          sizes="(max-width: 1920px) 100vw, 1920px"
          alt="Mountain scene with coniferous trees in the foreground"
          fetchPriority="high"
        />
      </header>
    </section>
  );
}
