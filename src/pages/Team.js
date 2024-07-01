import React, { useState, useEffect } from "react";
import Layout from "../components/Layouts/Layout";
import { Link } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const Team = () => {
  const data = [
    {
      id: "id2023",
      title: "2023",
      teams: [
        {
          title: "Executive",
          id: "Team1",
          members: [
            {
              name: "Samidha",
              role: "Chairperson",

              img: "https://i.postimg.cc/tTxd4MJn/SAMIDHA.jpg",
              special: true,
            },
            {
              name: "Ayush Gupta",
              role: "Vice Chairperson",
              img: "https://i.postimg.cc/wT8nmVMh/IMG-2719.jpg",
              special: true,
            },
            {
              name: "Sanjeebani Tosh",
              role: "Secretary",
              img: "",
              special: true,
            },
            {
              name: "Udita Mishra",
              role: "Treasurer",
              special: true,

              img: "https://i.postimg.cc/qvfzFRvd/udita.jpg",
            },
          ],
        },
        {
          title: "Bluestreak",
          id: "Team2",
          members: [
            {
              name: "Suvendu Ghadai",
              role: "Captain",
              img: "https://i.postimg.cc/ydCm7v7N/IMG-20231210-130933-1.jpg",
              special: true,
            },
            {
              name: "Hemant Rout",
              role: "Vice- Captain",
              img: "https://i.postimg.cc/J7vnynJB/hemant.png",
              special: true,
            },
            {
              name: "Pranay Sharma",
              role: "Manager",
              img: "https://i.postimg.cc/VL3x9FpF/Pranay.jpg",
              special: true,
            },
            {
              name: "Rahul Kumar Baral",
              role: "Chassis subsystem lead",
              img: "",
              special: true,
            },
            {
              name: "Amit Kumar Sahoo",
              role: "Vehicle dynamics lead",
              img: "https://i.postimg.cc/ZqmX25TB/Amit.jpg",
              special: true,
            },
            {
              name: "Krishnan Venkatnarayanan",
              role: "Student Member",
              img: "",
              special: false,
            },
            {
              name: "DEBASHISH SAHU",
              role: "Student Member",
              img: "",
              special: false,
            },
            {
              name: "DEEPANDRA SINGH",
              role: "Student Member",
              img: "",
              special: false,
            },
            {
              name: "BIBHUTI PALEI",
              role: "Student Member",
              img: "",
              special: false,
            },
            {
              name: "SRIJONI GHOSH",
              role: "Student Member",
              img: "",
              special: false,
            },
            {
              name: "NIBEDITA TRIPATHY",
              role: "Student Member",
              img: "https://i.postimg.cc/8s8NZZVg/Nibedita-Tripathy.jpg",
              special: false,
            },
            {
              name: "OM PRAKASH DALBEHERA",
              role: "Student Member",
              img: "https://i.postimg.cc/7h3DpPm6/OM-PRAKASH-DALBEHERA.jpg",
              special: false,
            },
            {
              name: "Shaswat Padhan",
              role: "Student Member",
              img: "",
              special: false,
            },
            {
              name: "Ayush Sahu",
              role: "Student Member",
              img: "https://i.postimg.cc/x1TY42Hf/Ayush-Sahu.jpg",
              special: false,
            },
            {
              name: "kunal sharma",
              role: "Student Member",
              img: "https://i.postimg.cc/Wpg2DSTv/kunal-sharma.jpg",
              special: false,
            },
            {
              name: "SRI CHINMAYANANDA",
              role: "Student Member",
              img: "",
              special: false,
            },
            {
              name: "Pradyumna Mohapatra",
              role: "Student Member",
              img: "https://i.postimg.cc/KYQcm7tt/IMG-20231224-191023.jpg",
              special: false,
            },
            {
              name: "M Sai Krishna",
              role: "Student Member",
              img: "",
              special: false,
            },
          ],
        },
        {
          title: "Bluebird",
          id: "Team3",
          members: [
            {
              name: "Prayash Kumar Behera",
              role: "Captain",
              img: "https://i.postimg.cc/XYBMhcxJ/PRAYASH-KUMAR-BEHERA.jpg",
              special: true,
            },
            {
              name: "Ashish Kumar Sahu",
              role: "Vice- Captain",
              img: "https://i.postimg.cc/1Xn3Chxt/ASHISH-KUMAR-SAHU.jpg",
              special: true,
            },
            {
              name: "Sidhartha Sekhar Das",
              role: "Student Member",
              img: "",
              special: false,
            },
            {
              name: "Ayush Sahu",
              role: "Student Member",
              img: "https://i.postimg.cc/cLQrGSvt/Ayush-Sahu.jpg",
              special: false,
            },
            {
              name: "PRIYANSHU SINGH",
              role: "Student Member",
              img: "https://i.postimg.cc/15V8M6PH/PRIYANSHU-SINGH.jpg",
              special: false,
            },
            {
              name: "Shakti prasad patra",
              role: "Student Member",
              img: "https://i.postimg.cc/PqTNtRD3/Shakti-Prasad-patra.jpg",
              special: false,
            },
          ],
        },
        {
          title: "BluePrint",
          id: "Team4",

          members: [
            {
              name: "Ayan Kumar Rajak",
              role: "Captain",
              img: "",
              special: true,
            },
            {
              name: "Ayush Kumar Nayak",
              role: "Vice-Captain",
              img: "https://i.postimg.cc/FRr5ds85/IMG20230403130618-1.jpg",
              special: true,
            },
            {
              name: "Sriharsha Mishra",
              role: "Aerodynamics Subsystem Lead",
              img: "https://i.postimg.cc/tCwjSbZW/SRIHARSHA-MISHRA.jpg",
              special: true,
            },
            {
              name: "Biswaranjan Guru",
              role: "Electronics lead and Manager",
              img: "",
              special: true,
            },
            {
              name: "Saumyadeep Sau",
              role: "Student Member",
              img: "",
              special: false,
            },
            {
              name: "Sidhartha Sekhar Das",
              role: "Student Member",
              img: "",
              special: false,
            },
            {
              name: "DEEPANDRA SINGH",
              role: "Student Member",
              img: "",
              special: false,
            },
            {
              name: "PRIYANSHU SINGH",
              role: "Student Member",
              img: "https://i.postimg.cc/1tZxxkNX/PRIYANSHU-SINGH.jpg",
              special: false,
            },
            {
              name: "Pratyush Kumar Mohapatra",
              role: "Student Member",
              img: "",
              special: false,
            },
            {
              name: "Shakti prasad patra",
              role: "Student Member",
              img: "https://i.postimg.cc/tR5KfmRR/Shakti-Prasad-patra.jpg",
              special: false,
            },
            {
              name: "Pradyumna Mohapatra",
              role: "Student Member",
              img: "https://i.postimg.cc/j2ZB7C3n/IMG-20230829-164130.jpg",
              special: false,
            },
          ],
        },
        {
          title: "Creative",
          id: "Team5",
          members: [
            {
              name: "Archana Moharana",
              role: "Creative Head",
              img: "https://i.postimg.cc/yYkKyxd7/A.jpg",
              special: true,
            },
            {
              name: "Debasish Rana",
              role: "Web Dev Head",
              img: "https://i.postimg.cc/wxP9yxvp/IMG20230114163238.jpg",
              special: true,
            },
            {
              name: "DEEPANDRA SINGH",
              role: "Student member",
              img: "",
              special: false,
            },
            {
              name: "Shaswat Padhan",
              role: "Student member",
              img: "",
              special: false,
            },
            {
              name: "pritidipan Khatua",
              role: "student member",
              img: "",
              special: false,
            },
            {
              name: "SRI CHINMAYA NANDA",
              role: "Student member",
              img: "",
              special: false,
            },
            {
              name: "DEEPANDRA SINGH",
              role: "Student Member",
              img: "",
              special: false,
            },
            {
              name: "Shaswat Padhan",
              role: "Student member",
              img: "",
              special: false,
            },
            {
              name: "pritidipan Khatua",
              role: "student member",
              img: "",
              special: false,
            },
            {
              name: "Anurag Shaw",
              role: "student member",
              img: "",
              special: false,
            },
            {
              name: "shweta raj",
              role: "Student Member",
              img: "",
              special: false,
            },
            {
              name: "Pravanjan Pradhan",
              role: "student member",
              img: "",
              special: false,
            },
            {
              name: "Jangam Anuhya",
              role: "student member",
              img: "",
              special: false,
            },
            {
              name: "Saumyadeep Sau",
              role: "Student Member",
              img: "",
              special: false,
            },
            {
              name: "Sidhartha Sekhar Das",
              role: "Student Member",
              img: "",
              special: false,
            },
          ],
        },
      ],
    },
    {
      id: "id2022",
      title: "2022",
      teams: [
        {
          title: "Executive",
          id: "Team1",

          members: [
            {
              name: "Deepak Kumar Mohanty",
              role: "Ex President",
              img: "https://i.postimg.cc/j5FM095m/Deepak-Kumar-Mohanty.jpg",
              special: true,
            },
            {
              name: "Anisha Mohapatra",
              role: "Ex Vice President",
              img: "",
              special: true,
            },
            {
              name: "Sarthak Sahoo",
              role: "Ex BS 10.0 Captain",
              img: "",
              special: true,
            },
            {
              name: "Essa Ameen Baig",
              role: "Ex Treasurer and Ex BP 1.0 Captain",
              img: "",
              special: true,
            },
            {
              name: "Rahul Kumar Pandey",
              role: "Ex BS 10.0 Vice-Captain",
              img: "",
              special: true,
            },
            {
              name: "Manjit Kumar Sethi",
              role: "Ex General Secretary",
              img: "",
              special: true,
            },
            {
              name: "Devansh Saxena",
              role: "Ex BP 1.0 Vice-Captain",
              img: "",
              special: true,
            },
          ],
        },
      ],
    },
  ];

  const ach = [
    {
      id: "1",
      title: "",
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

  const [toggled, setToggled] = useState(data[0].id);
  const [maintoggled, mainsetToggled] = useState(data[0].teams[0].id);

  const [clicked, setClicked] = useState(true);
  const [mainclicked, mainsetClicked] = useState(true);
  const [titles, setTitles] = useState("2023");

  const handleClick = (id, title) => {
    setClicked(!clicked);
    setToggled(id);
    setTitles(title);
  };

  const mainhandleClick = (id) => {
    mainsetClicked(!mainclicked);
    mainsetToggled(id);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Layout isScrolled={isScrolled}>
            <div className="team-main">
              <h1>OUR MEMBERS</h1>
              <div className="team-sidebar">
                <div className="team-wrapper2">
                  <div class="dropdown">
                    <>
                      <button
                        class="btn btn-primary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        // key={toggled}
                      >
                        {titles}
                      </button>
                    </>

                    <ul class="dropdown-menu">
                      {data.map(({ title, id }) => {
                        return (
                          <>
                            <li
                              key={id}
                              className={`team-sidebar-btns ${
                                toggled === id ? "clicked" : ""
                              }`}
                              onClick={() => handleClick(id, title)}
                            >
                              {title}
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="team-info">
                <div className="team-info-content">
                  <div className="team-wrapper">
                    {data.map(({ id, teams }) => {
                      return (
                        <>
                          {toggled === id ? (
                            <>
                              {teams.map(({ title, id }) => {
                                return (
                                  <div
                                    key={id}
                                    className={`team-btn ${
                                      maintoggled === id ? "mainclicked" : ""
                                    }`}
                                    onClick={() => mainhandleClick(id)}
                                  >
                                    {title}
                                  </div>
                                );
                              })}
                            </>
                          ) : null}
                        </>
                      );
                    })}
                  </div>

                  {data.map(({ id, teams }) => {
                    return (
                      <>
                        {toggled === id ? (
                          <div className="dummyclass">
                            {teams.map(({ id, members }) => {
                              return (
                                <>
                                  {maintoggled === id ? (
                                    <div className="team-rows team-flow">
                                      {members.map(
                                        ({ name, role, img, special }) => {
                                          return (
                                            <>
                                              <div className="team-row">
                                                <div className="team-col">
                                                  <div
                                                    className={`${
                                                      special
                                                        ? "special-member-card"
                                                        : "team-card"
                                                    }`}
                                                  >
                                                    <div className="teamContent-img">
                                                      <img
                                                        src={img}
                                                        alt="team-img"
                                                      />
                                                    </div>

                                                    <h3>{name}</h3>
                                                    <p>{role}</p>
                                                    {/* <ul className="team-icon">
                                                      <li>
                                                        <Link
                                                          to="#"
                                                          className="card-link"
                                                        >
                                                          <ion-icon name="logo-twitter"></ion-icon>
                                                        </Link>
                                                      </li>
                                                      <li>
                                                        <Link
                                                          to="#"
                                                          className="card-link"
                                                        >
                                                          <ion-icon name="logo-instagram"></ion-icon>
                                                        </Link>
                                                      </li>
                                                      <li>
                                                        <Link
                                                          to="#"
                                                          className="card-link"
                                                        >
                                                          <ion-icon name="logo-linkedIn"></ion-icon>
                                                        </Link>
                                                      </li>
                                                    </ul> */}
                                                  </div>
                                                </div>
                                              </div>
                                            </>
                                          );
                                        }
                                      )}
                                    </div>
                                  ) : null}
                                </>
                              );
                            })}
                          </div>
                        ) : null}
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </Layout>
        </>
      )}
    </>
  );
};

export default Team;
