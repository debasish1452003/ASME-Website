import React from "react";
import Layout from "../components/Layouts/Layout";
import { Link } from "react-router-dom";
// import BgVideo from "../components/dummy/BgVideo";

const Projects = () => {
  return (
    <Layout>
      <>
        <div
          className="main-events"
          style={{ height: "70vh", marginTop: "75px" }}
        >
          {
            <img
              src="https://i.postimg.cc/Njz8FWQV/octavian-dan-b21-Ty33-Cq-Vs-unsplash.jpg"
              alt="Projects"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          }
        </div>
      </>
    </Layout>
  );
};

export default Projects;
