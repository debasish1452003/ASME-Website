import React from "react";
import { useNavigate } from "react-router-dom";
import { useSiteContent } from "../../hooks/useSiteContent";

const ProjectCard = () => {
  const navigate = useNavigate();
  const { content } = useSiteContent();

  const handleClick = (id) => {
    navigate(`/projects#${id}`);
  };

  return (
    <section className="club-section project-container" id="projects">
      <div className="section-heading">
        <p className="eyebrow">Design studios</p>
        <h2 className="homeHeader">Projects</h2>
        <span>Competition-ready teams with research, build, and presentation ownership.</span>
      </div>
      <div className="club-card-grid">
        {content.projects.map(({ title, id, description, img }) => (
          <button className="feature-card project-card" key={id} onClick={() => handleClick(id)}>
            <img src={img} alt={`${title} project`} />
            <div className="feature-card-content">
              <span>{id.replace("project", "Studio ")}</span>
              <h3>{title}</h3>
              <p>{description.substring(0, 130)}...</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;
