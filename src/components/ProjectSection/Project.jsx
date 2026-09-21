import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/siteData";
import styles from "./Project.module.css";



export default function Project() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>

        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.eyebrow}>OUR WORK</p>

            <h2>
              Projects built for
              <em> real-world impact.</em>
            </h2>
          </div>

          <p className={styles.intro}>
            From digital platforms to intelligent business solutions, we
            create products that solve real problems and deliver measurable
            value.
          </p>
        </div>

        {/* Projects */}
        <div className={styles.projectsList}>
          {projects.map((project, index) => (
            <article
              id={`projects-${project.id}`}
              className={`${styles.project} ${
                index % 2 !== 0 ? styles.reverse : ""
              }`}
              key={project.id || project.title}
            >
              {/* Project Visual */}
              <div className={styles.projectVisual}>
                <div className={styles.visualTop}>
                  <span>{String(index + 1).padStart(2, "0")}</span>

                  <span>{project.category}</span>
                </div>

                <div className={styles.projectImage}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />
                  ) : (
                    <div className={styles.imagePlaceholder}>
                      <span>{project.title}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Project Information */}
              <div className={styles.projectContent}>
                <div className={styles.projectMeta}>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{project.category}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                {/* Technologies */}
                {project.technologies?.length > 0 && (
                  <div className={styles.technologies}>
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                )}

                {/* Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    View project
                    <ArrowUpRight size={17} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}


