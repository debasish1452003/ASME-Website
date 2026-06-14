import React, { useEffect, useState } from "react";
import Layout from "../components/Layouts/Layout";
import Loader from "../components/Loader/Loader";
import "../style/aboutus.css";

const pillars = [
  "Human-powered vehicle design",
  "CAD, simulation, and rapid prototyping",
  "Workshops, mentoring, and technical communication",
  "Competition culture and knowledge transfer",
];

const Aboutus = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 250);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Layout
      title="About ASME NITR | Student Chapter"
      description="Learn about ASME NIT Rourkela, its student-led culture, technical projects, workshops, competitions, and chapter mission."
      keywords="about ASME NITR, ASME chapter, NIT Rourkela, student chapter, mechanical engineering society"
      canonicalPath="/aboutus"
      isScrolled
    >
      <section className="about-page">
        <div className="page-shell-heading">
          <p className="eyebrow">Chapter profile</p>
          <h1>About ASME NITR</h1>
          <span>
            A student chapter built around mechanical engineering practice, student leadership,
            competition readiness, and the culture of building things that move.
          </span>
        </div>

        <div className="about-grid">
          <article className="about-story">
            <p>
              ASME NITR Chapter is one of the active technical societies of NIT Rourkela and a
              student chapter of the American Society of Mechanical Engineers International. Founded
              in 2012 by students of the 2010 batch, the chapter promotes the science and practice of
              mechanical engineering through seminars, training workshops, competitions, and hands-on
              technical projects.
            </p>
            <p>
              The chapter creates a place for students to network, learn, prototype, present, and
              compete. Its larger vision is to open new horizons for students through mechanical and
              multidisciplinary engineering exposure, while building a durable student-led culture on
              campus.
            </p>
          </article>

          <aside className="about-pillar-card">
            <p className="eyebrow">What we practice</p>
            {pillars.map((pillar) => (
              <div className="pillar-row" key={pillar}>
                <span />
                <p>{pillar}</p>
              </div>
            ))}
          </aside>
        </div>

        <div className="advisor-panel">
          <div>
            <p className="eyebrow">Faculty guidance</p>
            <h2>Message from Faculty Advisor</h2>
            <p>
              As a faculty advisor, I have been privileged to oversee the growth of ASME Club, which
              is dynamic, innovative, and versatile. Our club attracts members who share a deep
              passion for engineering and human-powered vehicles. As we continue to evolve, I invite
              students and collaborators to contribute to the success and development of ASME Club.
            </p>
          </div>
          <div className="advisor-card">
            <img
              src="https://media.istockphoto.com/id/610021016/photo/young-professor.jpg?s=1024x1024&w=is&k=20&c=31wIaMAYYLkD8lKo-CbTWkcn-c7zVKePwT8WZ4dtF4o="
              alt="Faculty advisor"
            />
            <h3>Dr. Suman Gosh</h3>
            <p>Assistant Professor, Department of Mechanical Engineering</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Aboutus;
