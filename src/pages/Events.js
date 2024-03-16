import React, { useEffect, useState } from "react";
import Layout from "../components/Layouts/Layout";
import Loader from "../components/Loader/Loader";
// import videoo from "../assets/bgvideo.webm";
import "../style/events.css";

const Events = () => {
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 350);

    return () => clearTimeout(timer);
  }, []);

  const eventdata = [
    {
      id: "event1",
      title: "ASME EFX",
      img: "https://i.postimg.cc/VLK9LnhG/ASME-News-e-Fx-New-Locations-hero.jpg",
      description:
        "ASME EFx events inject vitality into local communities with intimate, in-person gatherings you host. These thematic events offer a rich platform for students and early-career engineers, featuring technical programming, career development, and social activities. Local competitions, aligned with E-Fest challenges, expose participants to the e-Human Powered Vehicle Challenge, Student Design Competition, Oral Competition, Poster Competition, Elevator Pitch Competition, Environmental Systems Division Competition, and Innovative Additive Manufacturing 3D Competition. Custom local competitions, promoting teamwork and skill enhancement, are encouraged. Interactive workshops cover technical and soft skills, preparing students for post-graduation workforce entry. Networking opportunities connect participants with speakers, peers, faculty, and potential employers, fostering a vibrant engineering celebration.",
    },
    {
      id: "event2",
      title: "E-FESTS",
      img: "https://i.postimg.cc/Ls101xK6/hero-inaguralefdigital.jpg",
      description: `ASME Engineering Festivals (E-Fests) bring together students and emerging engineers worldwide in a dynamic digital space. Immerse yourself in innovation, enhance your resume, engage with prospective employers, partake in exciting digital competitions, and launch your career. Embrace the ethos of "innovate, create, compete, celebrate" through E-Fests—our premier all-virtual events: E-Fest Careers and E-Fest Digital. Join the global community to celebrate the essence of engineering in a vibrant and transformative digital experience.
            `,
    },
    {
      id: "event3",
      title: "MENTORING",
      img: "https://i.postimg.cc/DwDM0tNM/Mentor-750x320.png",
      description:
        "ASME's career advice and mentoring go beyond conventional guidance, connecting aspiring engineers with seasoned professionals who share firsthand insights into post-graduate work realities. Engage in meaningful conversations, ask questions, and build your resume while gaining valuable perspectives from practicing engineers in today's dynamic workforce.",
    },
    {
      id: "event4",
      title: "WORKSHOPS",
      img: "https://i.postimg.cc/kgDHnnTS/Web-Ad-Pages-HR-Hero.png",
      description:
        "ASME's interactive workshops and sessions provide a dynamic learning platform for emerging engineers. Engage in collaborative experiences with hands-on software demos and professional development workshops. These sessions are designed to help you build a robust resume and skill set, offering valuable insights to navigate the early stages of your career successfully. Excel as a new engineer with the practical knowledge gained from these interactive and enriching opportunities.",
    },
  ];

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Layout title={"ASME-NITRKL Events"} isScrolled={isScrolled}>
            <div className="heading">
              <img
                className="bgImage"
                src="https://images.pexels.com/photos/4889278/pexels-photo-4889278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <h1>EVENTS</h1>
            </div>

            <div className="main-contents">
              {eventdata.map(({ title, id, description, img }) => {
                const divId = `${id}`;
                return (
                  <>
                    <div className="event-section" id={divId}>
                      <div className="event-image event">
                        <img src={img} alt="event-img" />
                      </div>
                      <div className="event-cont event">
                        <h3>{title}</h3>
                        <p>{description}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </Layout>
        </>
      )}
    </>
  );
};

export default Events;
