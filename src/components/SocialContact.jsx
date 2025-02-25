import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import styles from "./css/sc.module.css";
const SocialContact = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.con}>
          <div className={styles.socials}>
            <h3 className={styles.title}>Socials</h3>
            <div className={styles.icons}>
              <a
                href="https://www.linkedin.com/in/suraj-kumal-58881a338/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className={styles.icon} />
              </a>
              <a
                href="https://www.github.com/suraj-kumal"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoGithub className={styles.icon} />
              </a>
              <a
                href="https://www.facebook.com/suraj.kumal.17"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook className={styles.icon} />
              </a>
              <a
                href="https://www.instagram.com/_surajkumal_/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className={styles.icon} />
              </a>
            </div>
          </div>
          <div className={styles.contact}>
            <h3 className={styles.title}>Contact</h3>
            <h4 className={styles.email}>
              <a href="mailto:surajkumal8773@gmail.com">
                surajkumal8773@gmail.com
              </a>
            </h4>
            <h4 className={styles.phone}>+9779704230781</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialContact;
