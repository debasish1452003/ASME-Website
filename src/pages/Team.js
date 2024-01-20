import React, { useState } from "react";
import Layout from "../components/Layouts/Layout";
import { Link } from "react-router-dom";

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
            },
            {
              name: "Ayush Gupta",
              role: "Vice Chairperson",
              img: "https://i.postimg.cc/wT8nmVMh/IMG-2719.jpg",
            },
            { name: "Sanjeebani Tosh", role: "Secretary", img: "" },
            {
              name: "Udita Mishra",
              role: "Treasurer",

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
            },
            {
              name: "Hemant Rout",
              role: "Vice- Captain",
              img: "https://i.postimg.cc/J7vnynJB/hemant.png",
            },
            { name: "Pranay Sharma", role: "Manager", img: "" },
            {
              name: "Rahul Kumar Baral",
              role: "Chassis subsystem lead",
              img: "",
            },
            {
              name: "Amit Kumar Sahoo",
              role: "Vehicle dynamics lead",
              img: "",
            },
            {
              name: "Krishnan Venkatnarayanan",
              role: "Student Member",
              img: "",
            },
            { name: "DEBASHISH SAHU", role: "Student Member", img: "" },
            { name: "DEEPANDRA SINGH", role: "Student Member", img: "" },
            { name: "BIBHUTI PALEI", role: "Student Member", img: "" },
            { name: "SRIJONI GHOSH", role: "Student Member", img: "" },
            {
              name: "NIBEDITA TRIPATHY",
              role: "Student Member",
              img: "https://i.postimg.cc/8s8NZZVg/Nibedita-Tripathy.jpg",
            },
            {
              name: "OM PRAKASH DALBEHERA",
              role: "Student Member",
              img: "https://i.postimg.cc/7h3DpPm6/OM-PRAKASH-DALBEHERA.jpg",
            },
            { name: "Shaswat Padhan", role: "Student Member", img: "" },
            {
              name: "Ayush Sahu",
              role: "Student Member",
              img: "https://i.postimg.cc/x1TY42Hf/Ayush-Sahu.jpg",
            },
            {
              name: "kunal sharma",
              role: "Student Member",
              img: "https://i.postimg.cc/Wpg2DSTv/kunal-sharma.jpg",
            },
            { name: "SRI CHINMAYANANDA", role: "Student Member", img: "" },
            {
              name: "Pradyumna Mohapatra",
              role: "Student Member",
              img: "https://i.postimg.cc/KYQcm7tt/IMG-20231224-191023.jpg",
            },
            { name: "M Sai Krishna", role: "Student Member", img: "" },
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
            },
            {
              name: "Ashish Kumar Sahu",
              role: "Vice- Captain",
              img: "https://i.postimg.cc/1Xn3Chxt/ASHISH-KUMAR-SAHU.jpg",
            },
            { name: "Sidhartha Sekhar Das", role: "Student Member", img: "" },
            {
              name: "Ayush Sahu",
              role: "Student Member",
              img: "https://i.postimg.cc/cLQrGSvt/Ayush-Sahu.jpg",
            },
            {
              name: "PRIYANSHU SINGH",
              role: "Student Member",
              img: "https://i.postimg.cc/15V8M6PH/PRIYANSHU-SINGH.jpg",
            },
            {
              name: "Shakti prasad patra",
              role: "Student Member",
              img: "https://i.postimg.cc/PqTNtRD3/Shakti-Prasad-patra.jpg",
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
            },
            {
              name: "Ayush Kumar Nayak",
              role: "Vice-Captain",
              img: "",
            },
            {
              name: "Sriharsha Mishra",
              role: "Aerodynamics Subsystem Lead",
              img: "",
            },
            {
              name: "Biswaranjan Guru",
              role: "Electronics lead and Manager",
              img: "",
            },
            {
              name: "Saumyadeep Sau",
              role: "Student Member",
              img: "",
            },
            {
              name: "Sidhartha Sekhar Das",
              role: "Student Member",
              img: "",
            },
            {
              name: "DEEPANDRA SINGH",
              role: "Student Member",
              img: "",
            },
            {
              name: "PRIYANSHU SINGH",
              role: "Student Member",
              img: "https://i.postimg.cc/1tZxxkNX/PRIYANSHU-SINGH.jpg",
            },
            {
              name: "Pratyush Kumar Mohapatra",
              role: "Student Member",
              img: "",
            },
            {
              name: "Shakti prasad patra",
              role: "Student Member",
              img: "https://i.postimg.cc/tR5KfmRR/Shakti-Prasad-patra.jpg",
            },
            {
              name: "Pradyumna Mohapatra",
              role: "Student Member",
              img: "https://i.postimg.cc/j2ZB7C3n/IMG-20230829-164130.jpg",
            },
          ],
        },
        {
          title: "Creative",
          id: "Team5",
          members: [
            { name: "Archana Moharana", role: "Creative Head", img: "" },
            { name: "DEEPANDRA SINGH", role: "Student member", img: "" },
            { name: "Shaswat Padhan", role: "Student member", img: "" },
            { name: "pritidipan Khatua", role: "student member", img: "" },
            { name: "SRI CHINMAYA NANDA", role: "Student member", img: "" },
            { name: "DEEPANDRA SINGH", role: "Student Member", img: "" },
            { name: "Shaswat Padhan", role: "Student member", img: "" },
            { name: "pritidipan Khatua", role: "student member", img: "" },
            { name: "Anurag Shaw", role: "student member", img: "" },
            { name: "shweta raj", role: "Student Member", img: "" },
            { name: "Pravanjan Pradhan", role: "student member", img: "" },
            { name: "Jangam Anuhya", role: "student member", img: "" },
            { name: "Saumyadeep Sau", role: "Student Member", img: "" },
            { name: "Sidhartha Sekhar Das", role: "Student Member", img: "" },
            { name: "Debasish Rana", role: "Student Member", img: "" },
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
            },
            {
              name: "Anisha Mohapatra",
              role: "Ex Vice President",
              img: "",
            },
            {
              name: "Sarthak Sahoo",
              role: "Ex BS 10.0 Captain",
              img: "",
            },
            {
              name: "Essa Ameen Baig",
              role: "Ex Treasurer and Ex BP 1.0 Captain",
              img: "",
            },
            {
              name: "Rahul Kumar Pandey",
              role: "Ex BS 10.0 Vice-Captain",
              img: "",
            },
            {
              name: "Manjit Kumar Sethi",
              role: "Ex General Secretary",
              img: "",
            },
            {
              name: "Devansh Saxena",
              role: "Ex BP 1.0 Vice-Captain",
              img: "",
            },
          ],
        },
      ],
    },
  ];

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
    <Layout>
      <div className="team-main">
        <h1>OUR MEMBERS</h1>
        <div className="team-sidebar">
          <div className="team-wrapper2">
            <div class="dropdown">
              <>
                <button
                  class="btn btn-secondary dropdown-toggle"
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
                            <button
                              key={id}
                              className={`team-btn ${
                                maintoggled === id ? "mainclicked" : ""
                              }`}
                              onClick={() => mainhandleClick(id)}
                            >
                              {title}
                            </button>
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
                              <div className="team-row">
                                {members.map(({ name, role, img }) => {
                                  return (
                                    <>
                                      <div className="team-row">
                                        <div className="team-col">
                                          <div className="team-card">
                                            <div className="teamContent-img">
                                              <img src={img} alt="team-img" />
                                            </div>

                                            <h3>{name}</h3>
                                            <p>{role}</p>
                                            <ul className="team-icon">
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
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  );
                                })}
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
  );
};

export default Team;
