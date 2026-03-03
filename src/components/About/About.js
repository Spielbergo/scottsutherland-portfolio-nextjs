import Image from 'next/image';
import styles from './About.module.css';
import LogoSliderClient from './LogoSliderClient';

const logos = [
  { src: '/assets/images/logos/crocodilerock.png', alt: 'Crocodile Rock Logo' },
  { src: '/assets/images/logos/organizethisto.png', alt: 'Organize This Logo' },
  { src: '/assets/images/logos/pvalogo-white.png', alt: 'PVA Logo' },
  { src: '/assets/images/logos/uoft-white.png', alt: 'University of Toronto' },
  { src: '/assets/images/logos/yopie.png', alt: 'Yopie Logo' },
];

export default function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-heading">
      <div
        className={styles.aboutContainer}
        data-aos="fade-right"
        data-aos-delay="400"
        data-aos-duration="1000"
      >
        <div className={styles.aboutText}>
          <h3 id="about-heading">
            About <span>Me</span>
          </h3>
          <p>I am a self-taught Front-End Developer based in Toronto since 2019 with hands-on
          experience building, optimizing, and maintaining high-performance websites. Strong focus on HTML, CSS, JavaScript, React, Next.js, and WordPress performance optimization and accessibility. Proven ability to refactor bloated systems, improve page speed, and deliver responsive, scalable, security-conscious solutions.</p>

          <p>Experienced with SEO, analytics, and modern dev tools and comfortable working independently or on small teams. Front-End Developer specializing in performance optimization and scalable web solutions.</p>
        </div>

        <div
          className={styles.aboutImg}
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <Image
            src="/assets/images/scott.jpg"
            width={500}
            height={250}
            alt="Scott Sutherland leaning on a fence in a forest"
            title="Moi"
          />
        </div>
      </div>

      {/* Client Logo Slider */}
      <LogoSliderClient logos={logos} />
    </section>
  );
}
