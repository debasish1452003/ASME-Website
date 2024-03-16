import React from "react";
import ansys from "../../assets/Ansys.png";
import solidworks from "../../assets/Solidworks.svg";
import trail from "../../assets/track&trail.png";

const SponsorsCard = () => {
  return (
    <>
      <div className="sponsors">
        <h1 className="homeHeader">OUR SPONSORS</h1>
        <div className="sponsors-div">
          <div className="sponsors-content">
            <h3>Software Sponsor</h3>
            <div className="sponsors-img">
              <img src={ansys} alt="ansys" />
              <img src={solidworks} alt="SolidWorks" />
            </div>
          </div>
          <div className="sponsors-content" id="sponsors-con">
            <h3>Valuable Sponsor</h3>
            <img src={trail} alt="trackAndTrail" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SponsorsCard;
