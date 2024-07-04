import React from "react";
import "./IntroLoader.css";
import svgfile from "./../assets/asmelogo.svg";

const All = () => {
  return (
    <>
      {/* <div className="intro-pagess"> */}
      <div className="containers">
        <p>Welcome Viewers!</p>
      </div>

      <div className="loading-page">
        <object type="image/svg+xml" data={svgfile} id="svg">
          Your browser does not support SVG
          <rect x="0" y="0" width="100" height="100" />
        </object>
      </div>
      {/* </div> */}
    </>
  );
};

export default All;
