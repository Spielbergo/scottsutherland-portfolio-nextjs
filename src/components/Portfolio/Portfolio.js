'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Portfolio.module.css';
import { projects } from '@/data/projects';
import Modal from './Modal';

const featuredProjects = projects.filter((p) => p.featured);

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="portfolio" className={`${styles.portfolioSection} center`}>
      {/* Terminal cursor */}
      <div
        className={`${styles.terminalLogo} center`}
        data-aos="fade-left"
        data-aos-delay="800"
        data-aos-duration="1000"
      >
        &gt;<span className="blink">_</span>
      </div>

      <h3
        data-aos="fade-down"
        data-aos-delay="600"
        data-aos-duration="1000"
      >
        Featured <span>projects</span>
      </h3>

      <p
        className={styles.folioSubtitle}
        data-aos="fade-right"
        data-aos-delay="800"
        data-aos-duration="1000"
      >
        All Bootstrap examples were created with the help of templates
      </p>
      <p
        className={styles.folioSubtitle}
        data-aos="fade-right"
        data-aos-delay="900"
        data-aos-duration="1000"
      >
        See previews for project descriptions
      </p>

      {/* Items */}
      <div className={styles.folioContainer}>
        <div className={styles.folioItemContainer} role="list">
          {featuredProjects.map((project, index) => (
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

      {/* View All CTA */}
      <div
        className={styles.viewAllWrap}
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="1000"
      >
        <Link href="/portfolio" className={`button ${styles.viewAllBtn}`}>
          View All Projects <i className="fa fa-arrow-right" />
        </Link>
      </div>

      {/* Modal */}
      {activeProject && (
        <Modal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}
