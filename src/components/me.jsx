import React from "react";
import { useEffect, useState } from "react";
import styles from "./css/me.module.css";

const Me = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [text, setText] = useState("Full Stack Developer");
  const originalText = "Full Stack Developer";

  const scrambleText = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setText((prev) =>
        originalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      iteration += 1 / 3;

      if (iteration >= originalText.length) {
        clearInterval(interval);
      }
    }, 30);
  };

  useEffect(() => {
    scrambleText();
    const intervalId = setInterval(scrambleText, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1>Suraj Kumal</h1>
        <h3 className={styles.fsd}>{text}</h3>
      </div>
    </div>
  );
};

export default Me;
