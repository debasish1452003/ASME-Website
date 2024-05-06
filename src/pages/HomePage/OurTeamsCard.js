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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              sapiente excepturi aliquid exercitationem voluptate? Ab,
              recusandae sit? Consectetur, dolore! Culpa officiis accusamus
              expedita quo numquam. Nihil dolorum sint modi, odit est similique,
              numquam excepturi alias eius reprehenderit minima, tempore
              consectetur consequuntur laborum laudantium quam eaque illum
              pariatur nesciunt sequi ab sit. Quibusdam sunt praesentium
              eveniet! Illum quasi aperiam veniam quo voluptatum recusandae
              mollitia officia vitae, dignissimos odit natus beatae quibusdam,
              facere necessitatibus vero amet molestiae qui ad dolorum sed
              numquam cupiditate tempore. Quod cupiditate, quas sit quos autem,
              cum minus id natus voluptas temporibus, eum voluptatibus aut
              magnam reprehenderit ullam.
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
