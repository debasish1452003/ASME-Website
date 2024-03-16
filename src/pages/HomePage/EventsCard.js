import React from "react";

const EventsCard = () => {
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
      <div className="events-container">
        <h1 className="homeHeader">EVENTS</h1>

        <div
          className="event-container secondary d-flex flex-wrap"
          style={{
            margin: "0 auto",
            padding: "0 auto",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          {eventdata.map(({ title, id, description, img }) => {
            return (
              <div
                className="event-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  // justifyContent: "center",
                  flexDirection: "column",

                  height: "100%",
                }}
              >
                <div
                  className="event-img"
                  style={{
                    width: "100%",
                  }}
                >
                  <img
                    src={img}
                    alt="event-img"
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="events-decs">
                  <h2 className="text-center">{title}</h2>
                  <div className="events-para">
                    <p>{description.substring(0, 100)}...</p>
                  </div>
                </div>
                <div className="events-btn">
                  <button className="btn">Know More</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default EventsCard;
