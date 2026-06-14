import React from "react";
import { useNavigate } from "react-router-dom";
import { useSiteContent } from "../../hooks/useSiteContent";

const EventsCard = () => {
  const navigate = useNavigate();
  const { content } = useSiteContent();

  return (
    <section className="club-section events-container">
      <div className="section-heading">
        <p className="eyebrow">Campus programs</p>
        <h2 className="homeHeader">Events</h2>
        <span>Workshops, mentoring, competitions, and global ASME experiences.</span>
      </div>
      <div className="club-card-grid">
        {content.events.map(({ title, id, description, img }) => (
          <article className="feature-card event-card" key={id}>
            <img src={img} alt={`${title} event`} />
            <div className="feature-card-content">
              <span>ASME Program</span>
              <h3>{title}</h3>
              <p>{description.substring(0, 130)}...</p>
              <button className="text-button" onClick={() => navigate(`/events#${id}`)}>
                Read more
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default EventsCard;
