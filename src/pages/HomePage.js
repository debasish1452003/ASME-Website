import React, { useState, useEffect } from "react";
import Layout from "../components/Layouts/Layout";
import Loader from "../components/Loader/Intro";
import PageLoader from "../components/Loader/Loader";
import ThreeHero from "../components/ThreeHero";
import { useSiteContent } from "../hooks/useSiteContent";

import Announcement from "./HomePage/Announcement";
import ProjectCard from "./HomePage/ProjectCard";
import EventsCard from "./HomePage/EventsCard";
import GallaryCard from "./HomePage/GallaryCard";
import OurTeamsCard from "./HomePage/OurTeamsCard";
import SponsorsCard from "./HomePage/SponsorsCard";

const HomePage = ({ state, state2 }) => {
  let states = state;

  const [loader, setLoader] = useState(process.env.NODE_ENV !== "production" && states);
  const { content, loading: contentLoading, imagesLoading } = useSiteContent({
    preloadImages: true,
  });
  const heroStats = Array.isArray(content.quickStats) ? content.quickStats : [];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (loader) {
      const timer = setTimeout(() => {
        setLoader(false);
      }, process.env.NODE_ENV === "production" ? 0 : 6000);

      return () => clearTimeout(timer);
    }
  }, [loader]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : contentLoading ? (
        <PageLoader label={imagesLoading ? "Preparing visuals" : "Loading content"} />
      ) : (
        <>
          <Layout
            title="ASME NITR | NIT Rourkela Student Chapter"
            description="ASME NIT Rourkela is a student chapter building human-powered vehicles, workshops, competitions, projects, and engineering community on campus."
            keywords="ASME NITR homepage, NIT Rourkela student chapter, mechanical engineering club, human-powered vehicle, engineering projects, workshops, events"
            canonicalPath="/"
            isScrolled={isScrolled}
          >
            <section className="hero-section page">
              <div className="hero-backdrop" />
              <ThreeHero />
              <div className="hero-content content">
                <p className="eyebrow">NIT Rourkela Student Chapter</p>
                <h1 className="gradient-text">ASME</h1>
                <p className="hero-copy">
                  A mechanical engineering chapter built around human-powered
                  vehicles, design research, workshops, and competitive
                  engineering culture.
                </p>
                <div className="hero-actions">
                  <a href="#projects" className="club-button primary">
                    Explore work
                  </a>
                  <a href="/gallery" className="club-button secondary">
                    View memories
                  </a>
                </div>
              </div>
              <div className="hero-stats">
                {heroStats.map(({ value, label }) => (
                  <div className="stat-card" key={label}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </section>

            <Announcement />
            <ProjectCard />
            <EventsCard />
            <GallaryCard />
            <OurTeamsCard />
            <SponsorsCard />
          </Layout>
        </>
      )}
    </>
  );
};

export default HomePage;
