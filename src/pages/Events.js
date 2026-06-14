import React, { useEffect, useState } from "react";
import Layout from "../components/Layouts/Layout";
import Loader from "../components/Loader/Loader";
import "../style/events.css";
import { useSiteContent } from "../hooks/useSiteContent";

const Events = () => {
  const { content, loading: contentLoading } = useSiteContent({ preloadImages: true });
  const [loading, setLoading] = useState(process.env.NODE_ENV !== "production");
  const [isScrolled] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(timer);
  }, []);

  return loading || contentLoading ? (
    <Loader label="Preparing events" />
  ) : (
    <Layout
      title="ASME NITR | Events"
      description="Browse ASME NIT Rourkela events, workshops, mentoring programs, and technical outreach activities."
      keywords="ASME events, NIT Rourkela workshops, engineering events, mentoring, technical programs"
      canonicalPath="/events"
      isScrolled={isScrolled}
    >
      <section className="page-hero heading">
        <div>
          <p className="eyebrow">Learn, compete, connect</p>
          <h1>Events</h1>
          <span>Technical programs that connect students with ASME's global engineering ecosystem.</span>
        </div>
      </section>

      <section className="detail-list main-contents">
        {content.events.map(({ title, id, description, img }, index) => (
          <article className="detail-card event-section" id={id} key={id}>
            <div className="detail-image event-image">
              <img src={img} alt={`${title} event`} />
            </div>
            <div className="detail-copy event-cont">
              <span className="eyebrow">Program 0{index + 1}</span>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </section>
    </Layout>
  );
};

export default Events;
