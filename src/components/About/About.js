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
          <p>
            I am a Toronto based Front End Developer. I have been working freelance on the side
            since February of 2019 and I have been working with a company working almost
            exclusively on WordPress sites since January of 2020.
          </p>
          <p>
            After my full time job ended in May of 2020 I took the time to learn. I took online
            courses from Zero to Mastery and freecodecamp among others. I concentrated mainly on
            CSS and JavaScript.
          </p>
          <p>
            Over the last few years I have also learned products such PhotoShop, After Effects,
            Keap, Zoho, Zapier and more.
          </p>
          <p>
            I love the constant learning and problem solving mixed with a little creativity that
            comes with development!
          </p>
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
