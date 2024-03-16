import React, { useState, useEffect } from "react";
import Layout from "../components/Layouts/Layout";
import { Link } from "react-router-dom";
import "../style/projects.css";
import Loader from "../components/Loader/Loader";
// import BgVideo from "../components/dummy/BgVideo";

const Projects = () => {
  const projectdata = [
    {
      id: "project1",
      title: "BLUEPRINT",
      img: "https://i.postimg.cc/d3v666rJ/mate-vanyek-OYn-U6-Vs-P3-M-unsplash.jpg",
      description:
        "Team Blueprint, a team of ASME NIT Rourkela, engages in research, innovation, and design. They utilize CAD software to create diverse models, subsequently manufacturing them through 3D printing technology. The team actively participates in the IAM3D competition as part of ASME Efest, showcasing their skills and expertise in engineering and design within the ASME community.",
    },
    {
      id: "project2",
      title: "BLUESTREAK",
      img: "https://i.postimg.cc/d3v666rJ/mate-vanyek-OYn-U6-Vs-P3-M-unsplash.jpg",
      description:
        "Bluestreak, a team within ASME at NIT Rourkela, is a dedicated team focused on research, analysis, and innovation. They specialize in designing human-powered vehicles from scratch, incorporating indigenous elements. Bluestreak actively participates in the eHPV competition at ASME Efest, showcasing their commitment to pushing the boundaries of human-powered vehicle design and contributing to the advancement of sustainable transportation solutions.",
    },

    {
      id: "project3",
      title: "BLUEBIRD",
      img: "https://i.postimg.cc/d3v666rJ/mate-vanyek-OYn-U6-Vs-P3-M-unsplash.jpg",
      description:
        "Bluebird, a team from ASME NIT Rourkela, specializes in CAD modeling and coding for virtual competitions. Their expertise extends to designing vehicles for diverse challenges, including autonomous vehicle competitions, lunar lander simulations, and ocean cleanup missions. Through innovation and technical prowess, Team Bluebird consistently participates in and excels at a variety of virtual events, showcasing their commitment to engineering excellence and problem-solving in the digital realm.",
    },
    {
      id: "project4",
      title: "OLD GUARD",
      img: "https://i.postimg.cc/d3v666rJ/mate-vanyek-OYn-U6-Vs-P3-M-unsplash.jpg",
      description:
        "Engineers, like other professionals, need strong communication skills in both speaking and writing. The Oral Competition, supported by the ASME Old Guard Committee, underscores the importance of effective oral presentations. The committee's annual contributions and volunteer efforts drive this program, benefiting engineering students and early career professionals, ultimately enhancing the engineering profession.",
    },
  ];

  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 350);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Layout title={"ASME-NITRKL Projects"} isScrolled={isScrolled}>
            <div className="heading">
              <img
                className="bgImage"
                src="https://images.pexels.com/photos/3757226/pexels-photo-3757226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <h1>PROJECTS</h1>
            </div>

            <div className="main-content">
              {projectdata.map(({ title, id, description, img }) => {
                const divId = `${id}`;
                return (
                  <>
                    <div className="project-section" id={divId}>
                      <div className="project-image project">
                        <img src={img} alt="project-img" />
                      </div>
                      <div className="project-cont project">
                        <h3>{title}</h3>
                        <p>{description}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </Layout>
        </>
      )}
    </>
  );
};

export default Projects;
