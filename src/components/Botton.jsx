import React from "react";
import styles from "./css/button.module.css";
import { FaArrowDown } from "react-icons/fa";
import { IconContext } from "react-icons";

const Botton = ({ onClick }) => {
  return (
    <IconContext.Provider value={{ size: "2.5rem" }}>
      <div className={styles.btn_con} onClick={onClick}>
        <div className={styles.btn}>
          <div className={styles.ic}>
            <FaArrowDown className={styles.top_arrow} />
            <FaArrowDown className={styles.center_arrow} />
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Botton;
