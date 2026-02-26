'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Portfolio.module.css';
import pageStyles from './PortfolioPage.module.css';
import { projects, filterCategories } from '@/data/projects';
import Modal from './Modal';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(null);

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Re-run AOS after filter change so freshly mounted cards animate in
  useEffect(() => {
    import('aos').then((AOS) => AOS.default.refresh());
  }, [activeFilter]);

  return (
    <main className={pageStyles.pageMain}>
      {/* Page header */}
      <header className={pageStyles.pageHeader}>
        <div
          className={`${styles.terminalLogo} center`}
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          &gt;<span className="blink">_</span>
        </div>
        <h1
          data-aos="fade-down"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          All <span>Projects</span>
        </h1>
        <p
          className={`${styles.folioSubtitle} ${pageStyles.backLink}`}
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <Link href="/#portfolio">
            <i className="fa fa-arrow-left" /> Back to homepage
          </Link>
        </p>
      </header>

      {/* Filter */}
      <section className={`${styles.portfolioSection} center`}>
        <div className={styles.folioContainer}>
          <ul
            className={styles.filterList}
            role="list"
            aria-label="Filter projects by category"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            {filterCategories.map((cat) => (
              <li key={cat.id}>
                <button
                  className={`${styles.folioBtn} ${activeFilter === cat.id ? styles.active : ''}`}
                  onClick={() => setActiveFilter(cat.id)}
                  aria-pressed={activeFilter === cat.id}
                >
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Grid */}
          <div key={activeFilter} className={styles.folioItemContainer} role="list">
            {filtered.map((project, index) => (
              <div
                key={project.id}
                className={styles.folioItem}
                role="listitem"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay={index * 75}
                data-aos-once="true"
              >
                <img
                  src={project.thumb}
                  alt={project.alt}
                  className={styles.folioImage}
                  width={400}
                  height={250}
                />
                <div className={styles.folioOverlay}>
                  <button
                    className={styles.previewBtn}
                    onClick={() => setActiveProject(project)}
                  >
                    Preview
                  </button>
                  {project.detailPage && (
                    <Link href={project.detailPage} className="button">
                      <i className="fa fa-file-alt" /> Details
                    </Link>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="button"
                    >
                      <i className="fa fa-globe" /> Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="button"
                    >
                      <i className="fab fa-github" /> Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeProject && (
        <Modal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </main>
  );
}
