import React from "react";
import { useNavigate } from "react-router-dom";

const OurTeamsCard = () => {
  const navigate = useNavigate();
  return (
    <section className="club-section team-container">
      <div className="team-box">
        <div className="team-img">
          <img
            src="https://i.postimg.cc/D05Yb9Tc/Whats-App-Image-2023-07-18-at-12-11-08-PM.jpg"
            alt="ASME team"
          />
        </div>
        <div className="team-content">
          <p className="eyebrow">People behind the machines</p>
          <h2 className="homeHeader">Our Team</h2>
          <p>
            ASME NIT Rourkela brings together designers, analysts, fabricators,
            programmers, managers, and storytellers. The chapter is organized
            into focused project teams so students can learn by building,
            competing, documenting, and leading.
          </p>
          <div className="teams-btn">
            <button onClick={() => navigate("/our-team")}>Meet the members</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamsCard;
