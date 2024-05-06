import React, { useState, useEffect } from "react";
import Layout from "../components/Layouts/Layout";
import { Link } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const Achievement = () => {
  const achievementdata = [
    {
      id: "8",
      title: "ASME E-HPVC",
      year: "2022",
      right: false,
      img: "https://i.postimg.cc/02NLCqWb/images.png",
      description:
        "Carrying forward our rich legacy, Bluestreak 9.0, a team of 24 enthusiastic members from ASME NITR had an eye-catching victory in ASME E-HPVC by securing 2nd Rank all over the world and 1st in India in Critical Design Report and 3rd Rank globally and 1st in India in Innovation Report.",
    },
    {
      id: "7",
      title: "ASME E Fest",
      year: "2021",
      right: true,
      img: "https://i.postimg.cc/vZYcc2pr/pngkey-com-south-america-png-2014643.png",
      description:
        "Bluestreak 8.0, a team of 12 members from ASME NITR, participated in ASME E Fest and out of 79 tough teams, the team stamped its victory by securing 1st in India and 3rd Rank globally in CDR (Critical Design Report) Event.",
    },
    {
      id: "6",
      title: "ASME E Fest ASIA PACIFIC, VIT Vellore",
      year: "2019",
      right: false,
      img: "https://i.postimg.cc/02dz51H5/c6c2e9022f25f404fe108a4cfefab222.jpg",
      description:
        "Bluestreak 6.0, the team took part in ASME E Fest ASIA PACIFIC in March 2019 at VIT, Vellore and had a remarkable success by securing 9th in the Endurance race and a notable overall 13th position among 50 participating teams.",
    },
    {
      id: "5",
      title: "HPVC ASIA PACIFIC",
      year: "2017",
      right: true,
      img: "https://i.postimg.cc/02NLCqWb/images.png",
      description:
        "Continuing the excellence saga, the team got 20th spot in men’s Endurance race and 24th in female Drag race out of 43 teams, and after counting technical score, the team bagged overall 24th position in HPVC ASIA PACIFIC 2017.",
    },
    {
      id: "4",
      title: "HPVC ASIA PACIFIC, VIT Vellore",
      year: "2016",
      right: false,
      img: "https://i.postimg.cc/02dz51H5/c6c2e9022f25f404fe108a4cfefab222.jpg",
      description:
        "Bluestreak 3.0, the team full of zeal took part in HPVC, ASIA PACIFIC 2016 at VIT, Vellore from 17-19th of March, 2016 and successfully marked its name in the trophy for being 2nd in the Design Event and overall 9th out of 31 teams.",
    },
    {
      id: "3",
      title: "HPVC ASIA PACIFIC, DTU Delhi",
      year: "2015",
      right: true,
      img: "https://i.postimg.cc/JzptJcL9/DTU-Delhi-official-logo.png",
      description:
        "Bluestreak 2.0, a 12 member team participated in HPVC, ASIA PACIFIC 2015 at DTU, Delhi held from January 16-18, 2015 and astound every single person present by securing 1st Rank in the technology innovation round.",
    },
    {
      id: "2",
      title: "University of Central Florida, Orlando",
      year: "2014",
      right: false,
      img: "https://i.postimg.cc/VN5vFrs5/Seal-of-the-University-of-Central-Florida-svg.png",
      description:
        "In 2014 team Bluestreak 1.1, a 3 member team from ASME@NITR, being the only team from Odisha and among the two teams from India, participated in the event at University of Central Florida, Orlando and had a brilliant standing as 31 out of 68 participants all over the world.",
    },
    {
      id: "1",
      title: "ASIA PACIFIC 2014, IIT DELHI",
      year: "2014",
      img: "https://i.postimg.cc/tCH1H4km/IIT-Delhi-logo.png",
      right: true,
      description:
        "Bluestreak 1.0, a team of 20 members represented ASME NITR in HPVC, ASIA PACIFIC 2014 at IIT Delhi and in its maiden attempt, the team put up an outstanding show securing the highest marks in Analysis Section and overall rank of 26th out of 52 teams in and outside India.",
    },
  ];

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
          <Layout isScrolled={isScrolled}>
            <div className="achievement-body">
              <div className="timeline">
                {/* <div className="text-box">
                    <h2>Alphabet Inc.</h2>
                    <small>2018 - 2019</small>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente et laudantium, recusandae ipsam temporibus
                      commodi, voluptates fuga odit architecto facilis
                      reprehenderit? Vitae adipisci perspiciatis quaerat,
                      corporis facere eveniet. Voluptatibus sed quisquam libero.
                    </p>
                  </div> */}
                {achievementdata.map(
                  ({ title, id, description, year, right, img }) => {
                    const divId = `${id}`;

                    return (
                      <>
                        {/* <div className="achivement-container"> */}
                        <div
                          className={`${
                            right
                              ? "achivement-container right-container"
                              : "achivement-container left-container"
                          }`}
                        >
                          <img src={img} alt="" />
                          <div className="text-box" id={divId}>
                            <h2>{title}</h2>
                            <small>{year}</small>
                            <p>{description}</p>
                            <span
                              className={`${
                                right
                                  ? " right-container-arrow"
                                  : "left-container-arrow"
                              }`}
                            ></span>
                          </div>
                        </div>
                      </>
                    );
                  }
                )}
              </div>
            </div>
          </Layout>
        </>
      )}
    </>
  );
};

export default Achievement;
