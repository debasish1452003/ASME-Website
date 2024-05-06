import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const ProjectCard = () => {
  const [isHovered, setisHovered] = useState(false);
  const projectdata = [
    {
      id: "project1",
      title: "BLUEPRINT",
      img: "https://i.postimg.cc/wvLvp3PQ/blueprint.jpg",
      description:
        "Team Blueprint, a team of ASME NIT Rourkela, engages in research, innovation, and design. They utilize CAD software to create diverse models, subsequently manufacturing them through 3D printing technology. The team actively participates in the IAM3D competition as part of ASME Efest, showcasing their skills and expertise in engineering and design within the ASME community.",
    },
    {
      id: "project2",
      title: "BLUESTREAK",
      img: "https://i.postimg.cc/brPvNpfc/velomobile.jpg",
      description:
        "Bluestreak, a team within ASME at NIT Rourkela, is a dedicated team focused on research, analysis, and innovation. They specialize in designing human-powered vehicles from scratch, incorporating indigenous elements. Bluestreak actively participates in the eHPV competition at ASME Efest, showcasing their commitment to pushing the boundaries of human-powered vehicle design and contributing to the advancement of sustainable transportation solutions.",
    },

    {
      id: "project3",
      title: "BLUEBIRD",
      img: "https://i.postimg.cc/Bvd6k2hv/drone.jpg",
      description:
        "Bluebird, a team from ASME NIT Rourkela, specializes in CAD modeling and coding for virtual competitions. Their expertise extends to designing vehicles for diverse challenges, including autonomous vehicle competitions, lunar lander simulations, and ocean cleanup missions. Through innovation and technical prowess, Team Bluebird consistently participates in and excels at a variety of virtual events, showcasing their commitment to engineering excellence and problem-solving in the digital realm.",
    },
    {
      id: "project4",
      title: "OLD GUARD",
      img: "https://i.postimg.cc/9f40LLYS/old-guard.jpg",
      description:
        "Engineers, like other professionals, need strong communication skills in both speaking and writing. The Oral Competition, supported by the ASME Old Guard Committee, underscores the importance of effective oral presentations. The committee's annual contributions and volunteer efforts drive this program, benefiting engineering students and early career professionals, ultimately enhancing the engineering profession.",
    },
  ];
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/projects#${id}`);
  };

  const handleMouseEnter = useCallback(() => {
    setisHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setisHovered(false);
  }, []);

  return (
    <>
      <div className="project-container">
        <h1 className="homeHeader">PROJECTS</h1>

        <div
          className="event-container secondary d-flex flex-wrap"
          style={{
            margin: "0 auto",
            padding: "0 auto",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          {projectdata.map(({ title, id, description, img }) => {
            return (
              <div
                className="project-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  height: "22rem",
                  width: "22rem",
                }}
              >
                <div
                  className="project-img"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <img
                    src={img}
                    alt="project-img"
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                  <div
                    className="overlay"
                    onClick={() => {
                      handleClick(id);
                    }}
                  >
                    <h3>{title}</h3>
                  </div>
                </div>

                {/* <div className="project-decs">
                  <h2 className="text-center">{title}</h2>
                  <div className="project-para">
                    <p>{description.substring(0, 100)}...</p>
                  </div>
                </div>
                <div className="project-btn">
                  <button className="btn" onClick={() => handleClick(id)}>
                    Know More
                  </button>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
