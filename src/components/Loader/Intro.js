import React, { useEffect } from "react";
import "./Intro.css";
import bgVideo from "../../components/dummy/bgVideo.mp4";

const Intro = () => {
  useEffect(() => {
    document.body.classList.add("loader-page");

    return () => {
      document.body.classList.remove("loader-page");
    };
  }, []);
  return (
    <>
      {/* <div className="main-intro"> */}
      <div className="videodiv">
        <video src={bgVideo} autoPlay muted loop className="intro-video" />
      </div>
      <div className="introPage">
        <div className="intro-img">
          <h1>ASME</h1>
          <h5>NIT Rourkela Chapter</h5>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Intro;
