import React, { useState, useEffect, useRef } from "react";
import Me from "./components/me";
import Botton from "./components/Botton";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import SocialContact from "./components/SocialContact";
import Styles from "./App.module.css";

const App = () => {
  const [hideButton, setHideButton] = useState(false);

  const meRef = useRef(null);
  const techStackRef = useRef(null);
  const projectsRef = useRef(null);
  const socialContactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY + window.innerHeight;

      if (currentPosition >= socialContactRef.current.offsetTop) {
        setHideButton(true);
      } else {
        setHideButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const currentPosition = window.scrollY + window.innerHeight;

    if (currentPosition >= socialContactRef.current.offsetTop) {
      return;
    }

    if (currentPosition >= projectsRef.current.offsetTop) {
      socialContactRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (currentPosition >= techStackRef.current.offsetTop) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (currentPosition >= meRef.current.offsetTop) {
      techStackRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {!hideButton && (
        <div className={Styles.b}>
          <Botton onClick={scrollToNextSection} />
        </div>
      )}
      <div ref={meRef}>
        <Me />
      </div>
      <div className={Styles.border}></div>
      <div ref={techStackRef}>
        <TechStack />
      </div>
      <div className={Styles.border}></div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div className={Styles.border}></div>
      <div ref={socialContactRef}>
        <SocialContact />
      </div>
    </>
  );
};

export default App;
