import React from "react";
import styles from "./css/p.module.css";
import Pcard from "./Pcard";

const Projects = () => {
  return (
    <>
      <div className={styles.main}>
        <h3 className={styles.p_title}>Projects</h3>
        <Pcard />
      </div>
    </>
  );
};

export default Projects;
