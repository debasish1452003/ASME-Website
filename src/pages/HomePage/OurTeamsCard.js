import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const OurTeamsCard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="team-container">
        <div className="team-box">
          <div className="team-img">
            <img
              src="https://i.postimg.cc/D05Yb9Tc/Whats-App-Image-2023-07-18-at-12-11-08-PM.jpg"
              alt="team-img"
            />
          </div>

          <div className="team-content">
            <h1 className="homeHeader">OUR TEAM</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ex
              quas nulla quaerat, deserunt placeat illo odio consequuntur
              perferendis eum!
            </p>
            <div className="teams-btn">
              <button onClick={() => navigate("/Our-Team")}>Know Us</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeamsCard;
