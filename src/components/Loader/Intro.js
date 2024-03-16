import React from "react";
import "./Intro.css";
import bgVideo from "../../components/dummy/bgVideo.mp4";

const Intro = () => {
  return (
    <>
      <div className="main-intro">
        <div className="videodiv">
          <video src={bgVideo} autoPlay muted loop className="intro-video" />
        </div>
        <div className="introPage">
          <div className="intro-img">
            {/* <img
              src="https://i.postimg.cc/RVCw6ktN/Whats-App-Image-2023-12-12-at-4-12-10-PM.jpg"
              alt="Asme Logo"
            /> */}

            <h1>ASME</h1>
            <h5>NIT Rourkela Chapter</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
