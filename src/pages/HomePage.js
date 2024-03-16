import React, { useState, useEffect } from "react";
import Layout from "../components/Layouts/Layout";
import Design from "../components/Layouts/Design";
import Loader from "../components/Loader/Intro";
import Announcement from "./HomePage/Announcement";
import ProjectCard from "./HomePage/ProjectCard";
import EventsCard from "./HomePage/EventsCard";
import AcheivementsCard from "./HomePage/AcheivementsCard";
import GallaryCard from "./HomePage/GallaryCard";
import OurTeamsCard from "./HomePage/OurTeamsCard";
import SponsorsCard from "./HomePage/SponsorsCard";

const HomePage = (reload) => {
  const [loader, setLoader] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          {/* // ========================Hero Section============================= */}
          <Layout title={"ASME-NITRKL Homepage"} isScrolled={isScrolled}>
            <div className="page">
              <Design />
              <div className="content">
                <h1 className="gradient-text">ASME</h1>
                <p className="change-text"></p>
              </div>
            </div>

            {/* ============================Announcement section======================  */}
            <Announcement />

            {/* ============================Project Section====================== */}
            <ProjectCard />

            {/* ==============================Events Section ======================= */}
            <EventsCard />

            {/* =============================== Achievements ======================= */}
            <AcheivementsCard />

            {/* ================================ Gallery ========================== */}
            <GallaryCard />
            {/* ======================== Our Team =========================== */}
            <OurTeamsCard />

            {/* ===========================Sponsors============================ */}
            <SponsorsCard />
          </Layout>
        </>
      )}
    </>
  );
};

export default HomePage;
