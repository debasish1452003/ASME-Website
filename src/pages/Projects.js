import React, { useEffect, useState } from "react";
import Layout from "../components/Layouts/Layout";
import "../style/projects.css";
import Loader from "../components/Loader/Loader";
import { useSiteContent } from "../hooks/useSiteContent";

const Projects = () => {
  const { content, loading: contentLoading } = useSiteContent({ preloadImages: true });
  const [loading, setLoading] = useState(process.env.NODE_ENV !== "production");
  const [isScrolled] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(timer);
  }, []);

  return loading || contentLoading ? (
    <Loader label="Preparing projects" />
  ) : (
    <Layout
      title="ASME NITR | Projects"
      description="Explore ASME NIT Rourkela projects in fabrication, design, simulation, and competition-focused engineering."
      keywords="ASME projects, NIT Rourkela projects, mechanical design, fabrication, simulation"
      canonicalPath="/projects"
      isScrolled={isScrolled}
    >
      <section className="page-hero heading">
        <div>
          <p className="eyebrow">Build verticals</p>
          <h1>Projects</h1>
          <span>Focused teams for fabrication, simulation, design, and presentation excellence.</span>
        </div>
      </section>

      <section className="detail-list main-content">
        {content.projects.map(({ title, id, description, img }, index) => (
          <article className="detail-card project-section" id={id} key={id}>
            <div className="detail-image project-image">
              <img src={img} alt={`${title} project`} />
            </div>
            <div className="detail-copy project-cont">
              <span className="eyebrow">Project 0{index + 1}</span>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </section>
    </Layout>
  );
};

export default Projects;
