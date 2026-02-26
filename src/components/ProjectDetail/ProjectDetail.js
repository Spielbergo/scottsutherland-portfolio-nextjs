import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectDetail.module.css';

export default function ProjectDetail({ project }) {
  const { hero, overview, screenshots, sectionsTable, techStack, highlights, lighthouse, lighthouseImage, codeBlock, notesSection } = project;

  return (
    <>
      {/* ===== HERO BANNER ===== */}
      <section
        className={styles.projectHero}
        aria-label={`${hero.title} project hero`}
      >
        <Image
          src={hero.bg}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroBgImg}
          aria-hidden="true"
        />
        <div className={styles.projectHeroOverlay} aria-hidden="true" />
        <div className={styles.projectHeroContent}>
          <p className={styles.breadcrumb}>
            <Link href="/portfolio">← Back to Projects</Link>
          </p>
          <h1 className={styles.projectTitle}>{hero.title}</h1>
          <p className={styles.projectSubtitle}>{hero.subtitle}</p>
          <div className={styles.heroBadges} aria-label="Technologies used">
            {hero.badges.map((b) => (
              <span key={b} className={styles.badge}>{b}</span>
            ))}
          </div>
          {hero.actions.length > 0 && (
            <div className={styles.heroActions}>
              {hero.actions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`button ${styles.heroBtn}`}
                  aria-label={`${action.label} (opens in new tab)`}
                >
                  <i className={action.icon} aria-hidden="true" /> {action.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <main className={styles.projectMain} id="main-content" tabIndex={-1}>

        {/* ===== OVERVIEW ===== */}
        <section className={styles.overviewSection} aria-labelledby="overview-heading">
          <div className={styles.sectionInner}>
            <h2 id="overview-heading">About the <span>Project</span></h2>
            {overview.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </section>

        {/* ===== TECH STACK ===== */}
        <section className={styles.techSection} aria-labelledby="tech-heading">
          <div className={styles.sectionInner}>
            <h2 id="tech-heading">Tech <span>Stack</span></h2>
            <div className={styles.techGrid}>
              {techStack.map((t) => (
                <div key={t.label} className={styles.techCard}>
                  <i className={`${t.icon} ${styles.techIcon}`} aria-hidden="true" />
                  <h3>{t.label}</h3>
                  <p>{t.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTIONS / COMPONENTS TABLE ===== */}
        <section className={styles.sectionsListSection} aria-labelledby="sections-heading">
          <div className={styles.sectionInner}>
            <h2 id="sections-heading">
              {/* Split heading on last word for <span> highlight */}
              {sectionsTable.heading.split(' ').slice(0, -1).join(' ')}{' '}
              <span>{sectionsTable.heading.split(' ').slice(-1)}</span>
            </h2>
            <div className={styles.tableWrap}>
              <table className={styles.sectionsTable}>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">{sectionsTable.labelCol}</th>
                    <th scope="col">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {sectionsTable.rows.map((row) => (
                    <tr key={row.number}>
                      <td>{row.number}</td>
                      <td><strong>{row.name}</strong></td>
                      <td>{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ===== SCREENSHOTS ===== */}
        <section className={styles.screenshotsSection} aria-labelledby="screenshots-heading">
          <div className={styles.sectionInner}>
            <h2 id="screenshots-heading">Screen<span>shots</span></h2>
            <div className={styles.screenshotGrid}>
              {screenshots.map((shot, i) => (
                <figure key={i} className={styles.screenshotFigure}>
                  <div className={styles.screenshotImgWrap}>
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={styles.screenshotImg}
                      priority={shot.eager}
                    />
                  </div>
                  <figcaption className={styles.screenshotCaption}>{shot.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
        
        

        {/* ===== HIGHLIGHTS ===== */}
        <section className={styles.highlightsSection} aria-labelledby="highlights-heading">
          <div className={styles.sectionInner}>
            <h2 id="highlights-heading">Key <span>Highlights</span></h2>
            <div className={styles.highlightsGrid}>
              {highlights.map((h) => (
                <div key={h.label} className={styles.highlightCard}>
                  <i className={`${h.icon} ${styles.highlightIcon}`} aria-hidden="true" />
                  <div>
                    <strong>{h.label}</strong>
                    <p>{h.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== LIGHTHOUSE (optional) ===== */}
        {lighthouse && (
          <section className={styles.lighthouseSection} aria-labelledby="lighthouse-heading">
            <div className={styles.sectionInner}>
              <h2 id="lighthouse-heading">Lighthouse <span>Scores</span></h2>
              <p>
                Optimised for high Lighthouse scores: this build preloads fonts and the main
                stylesheet, uses responsive picture sources, native lazy-loading for images,
                and reduces layout thrash in JavaScript.
              </p>
              <div className={styles.lighthouseScores} role="list" aria-label="Lighthouse scores">
                {lighthouse.map((s) => (
                  <div
                    key={s.label}
                    className={styles.scoreBox}
                    role="listitem"
                    aria-label={`${s.label}: ${s.score}`}
                  >
                    <div
                      className={styles.scoreCircle}
                      style={{ '--score-color': s.score >= 90 && s.score <= 100 ? '#0cce6b' : '#ffa400' }}
                      aria-hidden="true"
                    >
                      {s.score}
                    </div>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
              {lighthouseImage && (
                <figure className={styles.lighthouseImgFigure}>
                  <Image
                    src={lighthouseImage.src}
                    alt={lighthouseImage.alt}
                    width={1280}
                    height={800}
                    sizes="(max-width: 768px) 100vw, 1280px"
                    className={styles.lighthouseImg}
                  />
                  {lighthouseImage.caption && (
                    <figcaption className={styles.screenshotCaption}>{lighthouseImage.caption}</figcaption>
                  )}
                </figure>
              )}
            </div>
          </section>
        )}

        {/* ===== NOTES / MIGRATION (optional) ===== */}
        {notesSection && (
          <section className={styles.notesSection} aria-labelledby="notes-heading">
            <div className={styles.sectionInner}>
              <h2 id="notes-heading">
                {notesSection.heading.split(' ').slice(0, -1).join(' ')}{' '}
                <span>{notesSection.heading.split(' ').slice(-1)}</span>
              </h2>
              {notesSection.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
              {notesSection.orderedList?.length > 0 && (
                <ol className={styles.notesList}>
                  {notesSection.orderedList.map((item, i) => <li key={i}>{item}</li>)}
                </ol>
              )}
              {notesSection.subHeading && (
                <h3 className={styles.notesSubHeading}>{notesSection.subHeading}</h3>
              )}
              {notesSection.bulletList?.length > 0 && (
                <ul className={styles.notesList}>
                  {notesSection.bulletList.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              )}
            </div>
          </section>
        )}

        {/* ===== CODE BLOCK / LOCAL DEV (optional) ===== */}
        {codeBlock && (
          <section className={styles.devSection} aria-labelledby="dev-heading">
            <div className={styles.sectionInner}>
              <h2 id="dev-heading">
                {codeBlock.heading.split(' ').slice(0, -1).join(' ')}{' '}
                <span>{codeBlock.heading.split(' ').slice(-1)}</span>
              </h2>
              {codeBlock.intro && <p>{codeBlock.intro}</p>}
              <pre className={styles.codeBlock}><code>{codeBlock.code}</code></pre>
              {codeBlock.outro && <p>{codeBlock.outro}</p>}
            </div>
          </section>
        )}

        {/* ===== CTA ===== */}
        <section className={styles.ctaSection} aria-labelledby="cta-heading">
          <div className={`${styles.sectionInner} center`}>
            <h2 id="cta-heading">Want something <span>like this?</span></h2>
            <p>
              I&apos;m a front-end developer specialising in pixel-perfect builds as well as
              WordPress, React and Next.js. I take designs and translate them into clean, semantic,
              accessible, production-ready code — fast.
            </p>
            <div className={styles.ctaBtns}>
              <Link href="/#contact" className="button">
                <i className="fa fa-envelope" aria-hidden="true" /> Contact Me
              </Link>
              <Link href="/portfolio" className="button">
                <i className="fa fa-arrow-left" aria-hidden="true" /> All Projects
              </Link>
              <a
                href="https://github.com/Spielbergo"
                target="_blank"
                rel="noreferrer"
                className="button"
                aria-label="My GitHub (opens in new tab)"
              >
                <i className="fab fa-github" aria-hidden="true" /> My GitHub
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
