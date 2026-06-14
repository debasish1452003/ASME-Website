import React, { useState, useEffect } from "react";
import Layout from "../components/Layouts/Layout";
import Loader from "../components/Loader/Loader";
import { useSiteContent } from "../hooks/useSiteContent";

const Achievement = () => {
  const { content, loading: contentLoading } = useSiteContent({ preloadImages: true });
  const [loading, setLoading] = useState(process.env.NODE_ENV !== "production");
  const [isScrolled] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(timer);
  }, []);

  return loading || contentLoading ? (
    <Loader label="Preparing achievements" />
  ) : (
    <Layout
      title="ASME NITR | Achievements"
      description="See ASME NIT Rourkela achievements from international competitions, design challenges, and chapter milestones."
      keywords="ASME achievements, NIT Rourkela awards, competition results, engineering milestones"
      canonicalPath="/achievements"
      isScrolled={isScrolled}
    >
      <section className="achievement-body">
        <div className="section-heading achievement-heading">
          <p className="eyebrow">Legacy of competition</p>
          <h1>Achievements</h1>
          <span>Milestones earned by generations of ASME NIT Rourkela teams.</span>
        </div>
        <div className="timeline">
          {content.achievements.map(({ title, id, description, year, right, img }) => (
            <article
              className={`${right ? "achivement-container right-container" : "achivement-container left-container"}`}
              key={id}
            >
              <img src={img} alt={`${title} logo`} />
              <div className="text-box" id={id}>
                <small>{year}</small>
                <h2>{title}</h2>
                <p>{description}</p>
                <span className={`${right ? "right-container-arrow" : "left-container-arrow"}`}></span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Achievement;
