import React, { useEffect } from "react";
import "./Intro.css";
import IntroThreeScene from "../IntroThreeScene";

const Intro = () => {
  useEffect(() => {
    document.body.classList.add("loader-page");

    return () => {
      document.body.classList.remove("loader-page");
    };
  }, []);

  return (
    <section className="intro-shell">
      <IntroThreeScene />
      <div className="intro-grid" />
      <div className="introPage">
        <div className="intro-img">
          <span className="intro-kicker">American Society of Mechanical Engineers</span>
          <h1>ASME</h1>
          <h5>NIT Rourkela Student Chapter</h5>
          <div className="intro-progress">
            <span />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
