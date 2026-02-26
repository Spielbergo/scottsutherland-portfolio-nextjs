import styles from './Resume.module.css';
import Image from 'next/image';
import Link from 'next/link';

const skills = [
  { name: 'HTML',       level: 100 },
  { name: 'CSS',        level: 90 },
  { name: 'JS',         level: 80 },
  { name: 'React/NextJS', level: 80 },
  { name: 'PHP',        level: 50 },
  { name: 'WordPress',  level: 90 },
];

const jobs = [
  {
    dates: 'Jan 2020 - Present',
    title: 'Yopie Internet Marketing - Developer',
    detail:
      'I was hired at Yopie to help with a couple of their websites and it turned into a full time job. All of their websites are created using WordPress and I gained valuable experience using WordPress and products like Google Ads, Tag Manager, Zoho, Keap, IDX, Zapier and more.',
  },
  {
    dates: 'Feb 2019 - Present',
    title: 'Web Cheddar Inc. - Owner & Developer',
    detail:
      'After learning Web Development for over a year I started a company and began taking clients for websites. My first few projects were for friends and family and I learned a lot. They were all created using Bootstrap 3/4 templates.',
  },
  {
    dates: 'Jan 2008 - May 2020',
    title: 'Crocodile Rock - General Manager',
    detail:
      'I was responsible for most aspects of the business. I hired, trained and coached a team of over 60 staff. I maintained and repaired all office computers, POS systems and networks. I also created promotional video loops and posters using After Effects, Photoshop and more.',
  },
];

const testimonials = [
  {
    quote:
      'The delivery of the final product was done quickly and efficiently. A Great experience overall, good customer service, we were satisfied with the work and the continued support and content management was excellent.',
    name: 'Craig Hayden',
    job: 'Business Officer | U of T',
    img: '/assets/images/testimonials/testimonials-2.jpg',
  },
  {
    quote:
      'Scott the lead is very tech savvy with SEO, content, visuals, and web site development. He is very proficient with building a brand and getting a start up front and center. I strongly recommend his online services.',
    name: 'Barry McLeod',
    job: 'Owner | Crocodile Rock',
    img: '/assets/images/testimonials/testimonials-4.jpg',
  },
  {
    quote:
      "Scott is hands-down the best option when it comes to bringing your website dreams to life. He pays great attention to detail, has a natural eye for design while creating an easy-to-navigate, yet unique user experience, and delivers fast results without compromising the quality of work done.",
    name: 'Ashley Windibank',
    job: 'Owner | Smash Pets',
    img: '/assets/images/testimonials/testimonials-3.jpg',
  },
];

export default function Resume() {
  return (
    <section id="resume" className={styles.resume} aria-label="Resume and skills">
      <div className={styles.resumeContainer}>

        {/* Timeline */}
        <div className={styles.resumeTl}>
          <h3>
            Res<span>ume</span>
          </h3>
          <div className={styles.historyTlContainer}>
            <ul className={styles.tl}>
              {jobs.map((job, i) => (
                <li key={i} className={styles.tlItem}>
                  <div className={styles.timestamp}>{job.dates}</div>
                  <div className={styles.itemTitle}>{job.title}</div>
                  <div className={styles.itemDetail}>{job.detail}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className={styles.resumeText}>
          <div className={styles.uCenter}>
            <div className={styles.skills}>
              {skills.map((skill) => (
                <div key={skill.name} className={styles.skill}>
                  <p className={styles.skillType}>{skill.name}</p>
                  <div
                      className={styles.skillOuterBar}
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${skill.name} proficiency: ${skill.level}%`}
                    >
                      <div
                        className={styles.skillInnerBar}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.resumeButtons}>
            <div className={styles.resumeButton}>
              <a
                href="/assets/Scott_Sutherland_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                title="Download my full resume here"
                className="button"
              >
                PDF Resume
              </a>
            </div>
            <div className={styles.resumeButton}>
              <a
                href="/assets/Scott_Sutherland_Resume_Printable.pdf"
                target="_blank"
                rel="noreferrer"
                title="Download my printable resume here"
                className="button"
              >
                Printable Resume
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Language icons */}
      <ul className={styles.languageList} aria-label="Technologies used">
        <li><i className="fab fa-html5" style={{ color: 'red' }} aria-label="HTML5" role="img" /></li>
        <li><i className="fab fa-css3" style={{ color: 'blue' }} aria-label="CSS3" role="img" /></li>
        <li><i className="fab fa-js" style={{ color: 'yellow' }} aria-label="JavaScript" role="img" /></li>
        <li><i className="fab fa-react" style={{ color: '#88dded' }} aria-label="React" role="img" /></li>
        <li><i className="fab fa-php" style={{ color: 'skyblue' }} aria-label="PHP" role="img" /></li>
        <li><i className="fab fa-wordpress" aria-label="WordPress" role="img" /></li>
      </ul>

      {/* Testimonials */}
      <div className={styles.wrapper}>
        {testimonials.map((t, i) => (
          <figure key={i} className={styles.box}>
            <i className="fas fa-quote-left" style={{ fontSize: 19, color: 'var(--btn-bg)', float: 'left', }} aria-hidden="true" />
            <br />
            <blockquote>
              <p>{t.quote}</p>
            </blockquote>
            <figcaption className={styles.content}>
              <div className={styles.info}>
                <div className={styles.name}>{t.name}</div>
                <cite className={styles.jobTitle}>{t.job}</cite>
                <div className={styles.stars} aria-label="5 stars out of 5">
                  {[...Array(5)].map((_, j) => (
                    <i key={j} className="fas fa-star" style={{ color: '#ebd746' }} aria-hidden="true" />
                  ))}
                </div>
              </div>
              <div className={styles.imageWrap}>
                <Image src={t.img} width={75} height={75} alt={`Photo of ${t.name}`} />
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
