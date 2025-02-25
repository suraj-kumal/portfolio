import PData from "../Data/PData";
import styles from "./css/pc.module.css";
const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
    <path d="M15 3h6v6"></path>
    <path d="M10 14L21 3"></path>
  </svg>
);
const Pcard = () => {
  const projects = PData();

  return (
    <div className={styles["projects-container"]}>
      <div className={styles["projects-grid"]}>
        {projects.map((project) => (
          <div className={styles["project-card"]} key={project.id}>
            <div className={styles["project-content"]}>
              <h3 className={styles["project-title"]}>{project.title}</h3>
              <p className={styles["project-desc"]}>{project.desc}</p>
              <div className={styles["project-links"]}>
                <a
                  href={project.github}
                  className={styles["github-link"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon /> Code
                </a>
                {project.url && (
                  <a
                    href={project.url}
                    className={styles["live-link"]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pcard;
