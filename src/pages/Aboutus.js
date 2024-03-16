import React, { useEffect, useState } from "react";
import Layout from "../components/Layouts/Layout";
import Loader from "../components/Loader/Loader";
import "../style/aboutus.css";

const Aboutus = () => {
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 350);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Layout title={"ASME-NITRKL Aboutus"} isScrolled={isScrolled}>
            <div className="bgHeading">
              <img
                className="bgImage"
                src="https://images.pexels.com/photos/586570/pexels-photo-586570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <h1>ABOUT US</h1>
            </div>

            <div className="bg">
              <div className="aboutUsContent">
                <p>
                  {" "}
                  ASME NITR Chapter stands out as one of the most active
                  technical society in the eastern zone of India. The ASME NIT
                  Rourkela Chapter is a student chapter of the American Society
                  of Mechanical Engineers (ASME) International, located in the
                  National Institute of Technology, Rourkela, India. The chapter
                  was established in 2012 by the students of the 2010 batch. The
                  chapter aims to promote the science and practice of mechanical
                  engineering among students by organizing seminars, training
                  workshops, and awarding prizes. The chapter has been actively
                  participating in various technical events and competitions.
                  The chapter is one of the most prominent, active, and dynamic
                  student sections of ASME International. As a student
                  organization on campus, our goal is to provide a place for
                  both networking and information, offering guest speakers,
                  workshops and more. Its vision is to become a premier
                  institution for promoting art, science and the practice of
                  mechanical and multi- disciplinary engineering and the allied
                  sciences to our diverse communities and opening up new
                  horizons for the students to stand out globally.
                </p>
              </div>
              <div className="right_content">
                <h4 className="h4_left">
                  Passion in the new Human powered vehicle
                </h4>
                <h4 className="h4_right">High-Quality design craft</h4>
              </div>
            </div>
            <div className="lowerContent">
              <h1>Message from Facad</h1>
              <div className="messageRow">
                <div className="facadContent">
                  As a faculty advisor, I have been privileged to oversee the
                  growth of ASME Club since 20XX, which are dynamic, innovative,
                  and versatile. Our club has attracted members who share a deep
                  passion for Human Powered Vehicles. As we continue to evolve,
                  I invite all individuals to contribute in any way possible.
                  towards the success and development of ASME Club.
                </div>
                <div className="facadImg">
                  <img src="https://media.istockphoto.com/id/610021016/photo/young-professor.jpg?s=1024x1024&w=is&k=20&c=31wIaMAYYLkD8lKo-CbTWkcn-c7zVKePwT8WZ4dtF4o=" />
                  <h3>NAME </h3>
                  <h4>Assistant Professor | Dept. of Mechanical Engg.</h4>
                </div>
              </div>
            </div>
          </Layout>
        </>
      )}
    </>
  );
};

export default Aboutus;
