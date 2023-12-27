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
              // img: "https://i.postimg.cc/gJRFDgwv/SAMIDHA.jpg",
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
              // img: "https://i.postimg.cc/66rx41xK/IMG-20220328-WA0083.jpg",
              // img: "https://i.postimg.cc/VsXByp23/IMG-20220328-WA0083.jpg",
              img: "https://i.postimg.cc/hvdbn6dh/IMG-20220329-WA0108.jpg",
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
              img: "https://i.postimg.cc/pdmvPJq3/20231129-155035.jpg",
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
            { name: "NIBEDITA TRIPATHY", role: "Student Member", img: "" },
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
            { name: "Pradyumna Mohapatra", role: "Student Member", img: "" },
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
            { name: "Ashish Kumar Sahu", role: "Vice- Captain", img: "" },
            { name: "Sidhartha Sekhar Das", role: "Student Member", img: "" },
            {
              name: "Ayush Sahu",
              role: "Student Member",
              img: "https://i.postimg.cc/L4vMZsnH/IMG20230403130618-1.jpg",
            },
            { name: "PRIYANSHU SINGH", role: "Student Member", img: "" },
            { name: "Shakti prasad patra", role: "Student Member", img: "" },
          ],
        },
        {
          title: "Creative",
          id: "Team4",
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
            { name: "Grace Lee", role: "Manager", img: "" },
            { name: "Mark Johnson", role: "Developer", img: "" },
            { name: "Sophie Davis", role: "Designer", img: "" },
            { name: "Elijah Moore", role: "Analyst", img: "" },
          ],
        },
        {
          title: "Bluestreak",
          id: "Team2",
          members: [
            { name: "Lily Wilson", role: "Manager", img: "" },
            { name: "Ethan Garcia", role: "Developer", img: "" },
            { name: "Aiden Clark", role: "Designer", img: "" },
            { name: "Olivia Smith", role: "Analyst", img: "" },
          ],
        },
        {
          title: "Bluebird",
          id: "Team3",
          members: [
            { name: "Lucas Martinez", role: "Manager", img: "" },
            { name: "Aria White", role: "Developer", img: "" },
            { name: "Emma Taylor", role: "Designer", img: "" },
            { name: "Jackson Brown", role: "Analyst", img: "" },
          ],
        },
        {
          title: "Creative",
          id: "Team4",
          members: [
            { name: "Harper Anderson", role: "Manager", img: "" },
            { name: "Jack Lopez", role: "Developer", img: "" },
            { name: "Avery Davis", role: "Designer", img: "" },
            { name: "Mia Johnson", role: "Analyst", img: "" },
          ],
        },
      ],
    },
    {
      id: "id2021",
      title: "2021",
      teams: [
        {
          title: "Executive",
          id: "Team1",
          members: [
            { name: "Noah Wilson", role: "Manager", img: "" },
            { name: "Sophia Garcia", role: "Developer", img: "" },
            { name: "James Lee", role: "Designer", img: "" },
            { name: "Ava Davis", role: "Analyst", img: "" },
          ],
        },
        {
          title: "Bluestreak",
          id: "Team2",
          members: [
            { name: "Elijah Martinez", role: "Manager", img: "" },
            { name: "Chloe White", role: "Developer", img: "" },
            { name: "Logan Taylor", role: "Designer", img: "" },
            { name: "Grace Brown", role: "Analyst", img: "" },
          ],
        },
        {
          title: "Bluebird",
          id: "Team3",
          members: [
            { name: "Mason Anderson", role: "Manager", img: "" },
            { name: "Aurora Lopez", role: "Developer", img: "" },
            { name: "Emily Clark", role: "Designer", img: "" },
            { name: "Liam Smith", role: "Analyst", img: "" },
          ],
        },
        {
          title: "Creative",
          id: "Team4",
          members: [
            { name: "Evelyn Johnson", role: "Manager", img: "" },
            { name: "Owen Davis", role: "Developer", img: "" },
            { name: "Scarlett Wilson", role: "Designer", img: "" },
            { name: "Wyatt Garcia", role: "Analyst", img: "" },
          ],
        },
      ],
    },
  ];

  const [toggled, setToggled] = useState(data[0].id);
  const [maintoggled, mainsetToggled] = useState(data[0].teams[0].id);

  const [clicked, setClicked] = useState(true);
  const [mainclicked, mainsetClicked] = useState(true);

  const handleClick = (id) => {
    setClicked(!clicked);
    setToggled(id);
  };

  const mainhandleClick = (id) => {
    mainsetClicked(!mainclicked);
    mainsetToggled(id);
  };

  return (
    <Layout>
      <div className="team-main">
        <h1>OUR MEMBERS</h1>
        <div className="team-info">
          <div className="team-sidebar">
            {data.map(({ title, id }) => {
              return (
                <div className="team-wrapper2">
                  <button
                    key={id}
                    className={`team-sidebar-btn ${
                      toggled === id ? "clicked" : ""
                    }`}
                    onClick={() => handleClick(id)}
                  >
                    {title}
                  </button>
                </div>
              );
            })}
          </div>
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
