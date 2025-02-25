import React from "react";
import styles from "./css/ts.module.css";
import TsData from "../Data/TsData";

const TechStack = () => {
  const techStack = TsData();

  return (
    <div className={styles.main}>
      <div className={styles.ts_container}>
        <h3 className={styles.ts_title}>Tech Stack</h3>
        <div className={styles.ts_icon} style={{ cursor: "pointer" }}>
          {techStack.map((tech) => (
            <i key={tech.id} className={tech.classname}></i>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
