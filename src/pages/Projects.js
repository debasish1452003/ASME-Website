import React from "react";
import Layout from "../components/Layouts/Layout";
import { Link } from "react-router-dom";
import "../style/projects.css";
// import BgVideo from "../components/dummy/BgVideo";

const Projects = () => {
  return (
    <Layout title={"ASME-NITRKL Projects"}>
      <div className="heading">
        <img className="bgImage" src="https://images.pexels.com/photos/3757226/pexels-photo-3757226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <h1>PROJECTS</h1>
      </div>

      <div className="main-content">
      <div className="project"> 
        <img src="https://i.postimg.cc/d3v666rJ/mate-vanyek-OYn-U6-Vs-P3-M-unsplash.jpg" alt="" /></div>
        <div className="project">
          <h3>BLUESTREAK</h3>
          <p>Bluestreak, a team within ASME at NIT Rourkela, is a dedicated team focused on research, analysis, and innovation. They specialize in designing human-powered vehicles from scratch, incorporating indigenous elements. Bluestreak actively participates in the eHPV competition at ASME Efest, showcasing their commitment to pushing the boundaries of human-powered vehicle design and contributing to the advancement of sustainable transportation solutions.
          </p></div>

          <div className="project"> 
        <img src="https://i.postimg.cc/d3v666rJ/mate-vanyek-OYn-U6-Vs-P3-M-unsplash.jpg" alt="" /></div>
        <div className="project">
          <h3>BLUEPRINT</h3>
          <p>
            Team Blueprint, a team of ASME NIT Rourkela, engages in research, innovation, and design. They utilize CAD software to create diverse models, subsequently manufacturing them through 3D printing technology. The team actively participates in the IAM3D competition as part of ASME Efest, showcasing their skills and expertise in engineering and design within the ASME community.
          </p>
        </div>
        <div className="project"> 
        <img src="https://i.postimg.cc/d3v666rJ/mate-vanyek-OYn-U6-Vs-P3-M-unsplash.jpg" alt="" /></div>
        <div className="project">
          <h3>BLUEBIRD</h3>
          <p>Bluebird, a team from ASME NIT Rourkela, specializes in CAD modeling and coding for virtual competitions. Their expertise extends to designing vehicles for diverse challenges, including autonomous vehicle competitions, lunar lander simulations, and ocean cleanup missions. Through innovation and technical prowess, Team Bluebird consistently participates in and excels at a variety of virtual events, showcasing their commitment to engineering excellence and problem-solving in the digital realm.",
          </p>
        </div>

        <div className="project"> 
        <img src="https://i.postimg.cc/d3v666rJ/mate-vanyek-OYn-U6-Vs-P3-M-unsplash.jpg" alt="" /></div>
        <div className="project">
          <h3>OLD GUARD</h3>
          <p>Engineers, like other professionals, need strong communication skills in both speaking and writing. The Oral Competition, supported by the ASME Old Guard Committee, underscores the importance of effective oral presentations. The committee's annual contributions and volunteer efforts drive this program, benefiting engineering students and early career professionals, ultimately enhancing the engineering profession.

          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;

