import React, { useEffect } from "react";
import Layout from "../components/Layouts/Layout";
import Design from "../components/Layouts/Design";

// import { Swiper, SwiperSlide } from "swiper/react";

import { Swiper, SwiperSlide } from "swiper/react";
// import React, { useRef, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

// Import Swiper styles
import "swiper/css";

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

const HomePage = () => {
  const eventdata = [
    {
      id: "event1",
      title: "ASME Efx",
      img: "https://i.postimg.cc/d3v666rJ/mate-vanyek-OYn-U6-Vs-P3-M-unsplash.jpg",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem excepturi sed natus voluptatem corporis voluptate unde illum?Necessitatibus voluptates eaque magnam illum voluptate recusanda neque, aut id unde voluptas iure r  dicta",
    },
    {
      id: "event2",
      title: "ASME Efx",
      img: "https://i.postimg.cc/d3v666rJ/mate-vanyek-OYn-U6-Vs-P3-M-unsplash.jpg",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem excepturi sed natus voluptatem corporis voluptate unde illum?Necessitatibus voluptates eaque magnam illum voluptate recusanda neque, aut id unde voluptas iure r  dicta",
    },
    {
      id: "event3",
      title: "ASME Efx",
      img: "https://i.postimg.cc/d3v666rJ/mate-vanyek-OYn-U6-Vs-P3-M-unsplash.jpg",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem excepturi sed natus voluptatem corporis voluptate unde illum?Necessitatibus voluptates eaque magnam illum voluptate recusanda neque, aut id unde voluptas iure r  dicta",
    },
    {
      id: "event4",
      title: "ASME Efx",
      img: "https://i.postimg.cc/d3v666rJ/mate-vanyek-OYn-U6-Vs-P3-M-unsplash.jpg",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem excepturi sed natus voluptatem corporis voluptate unde illum?Necessitatibus voluptates eaque magnam illum voluptate recusanda neque, aut id unde voluptas iure r  dicta",
    },
  ];

  const projectdata = [
    {
      id: "event1",
      title: "ASME Efx",
      img: "https://i.postimg.cc/d3v666rJ/mate-vanyek-OYn-U6-Vs-P3-M-unsplash.jpg",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem excepturi sed natus voluptatem corporis voluptate unde illum?Necessitatibus voluptates eaque magnam illum voluptate recusanda neque, aut id unde voluptas iure r  dicta",
    },
    {
      id: "event2",
      title: "ASME Efx",
      img: "https://i.postimg.cc/d3v666rJ/mate-vanyek-OYn-U6-Vs-P3-M-unsplash.jpg",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem excepturi sed natus voluptatem corporis voluptate unde illum?Necessitatibus voluptates eaque magnam illum voluptate recusanda neque, aut id unde voluptas iure r  dicta",
    },
    {
      id: "event3",
      title: "ASME Efx",
      img: "https://i.postimg.cc/d3v666rJ/mate-vanyek-OYn-U6-Vs-P3-M-unsplash.jpg",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem excepturi sed natus voluptatem corporis voluptate unde illum?Necessitatibus voluptates eaque magnam illum voluptate recusanda neque, aut id unde voluptas iure r  dicta",
    },
    {
      id: "event4",
      title: "ASME Efx",
      img: "https://i.postimg.cc/d3v666rJ/mate-vanyek-OYn-U6-Vs-P3-M-unsplash.jpg",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem excepturi sed natus voluptatem corporis voluptate unde illum?Necessitatibus voluptates eaque magnam illum voluptate recusanda neque, aut id unde voluptas iure r  dicta",
    },
  ];

  return (
    // ========================Hero Section=============================
    <Layout title={"ASME-NITRKL Homepage"}>
      <div className="page">
        <Design />
        <div className="content">
          <h1 className="gradient-text">ASME</h1>
          <p className="change-text"></p>
        </div>
      </div>

      {/* ============================Announcement section======================  */}
      <div className="notify">
        <h1>ANNOUNCEMENT</h1>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"3"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          loop={true}
          // navigation={true}
          modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/j5pjzSLN/Whats-App-Image-2023-12-13-at-10-11-06-PM.jpg"
              alt="carousel"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/T3fp71QJ/Whats-App-Image-2023-12-13-at-10-11-06-PM-1.jpg"
              alt="carousel"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/vmSTZzy0/Whats-App-Image-2023-12-13-at-10-12-12-PM.jpg"
              alt="carousel"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/htshHn5W/Whats-App-Image-2023-12-13-at-10-13-33-PM.jpg"
              alt="carousel"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/3JMyGnv6/Whats-App-Image-2023-12-13-at-10-14-08-PM.jpg"
              alt="carousel"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/hvmfw7Hp/Whats-App-Image-2023-12-13-at-10-15-41-PM.jpg"
              alt="carousel"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src=" https://i.postimg.cc/nr5tWr9M/Whats-App-Image-2023-12-13-at-11-15-23-AM.jpg"
              alt="Carousel"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* ============================Project Section====================== */}

      {/* <div className="project-container">
        <h1>PROJECTS</h1>
        <div className="project-div">
          <div className="project-content">
            <div className="project-img">
              <img
                src="https://i.postimg.cc/Gm7LBQyT/pexels-lukas-669615.jpg"
                alt="project-img"
              />
            </div>
            <div className="project-desc">
              <h3>ASME EFx</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Libero, asperiores! Nihil aliquam veniam nesciunt similique,
                eligendi omnis ex saepe nobis optio sequi facere repellat
                sapiente illo! Consequatur libero officia obcaecati?
              </p>
              <div className="project-btn">
                <button>Know More</button>
              </div>
            </div>
          </div>
          <div className="project-content" id="project2">
            <div className="project-desc">
              <h3>ASME EFx</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Libero, asperiores! Nihil aliquam veniam nesciunt similique,
                eligendi omnis ex saepe nobis optio sequi facere repellat
                sapiente illo! Consequatur libero officia obcaecati?
              </p>
              <div className="project-btn">
                <button>Know More</button>
              </div>
            </div>
            <div className="project-img">
              <img
                src="https://i.postimg.cc/Gm7LBQyT/pexels-lukas-669615.jpg"
                alt="project-img"
              />
            </div>
          </div>
        </div>
      </div> */}

      <div className="project-container">
        <h1>PROJECTS</h1>

        <div
          className="event-container secondary d-flex flex-wrap"
          style={{
            margin: "0 auto",
            padding: "0 auto",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          {projectdata.map(({ title, id, description, img }) => {
            return (
              <div
                className="project-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  // justifyContent: "center",
                  flexDirection: "column",
                  width: "350px",
                  height: "100%",
                  margin: "2em 2.5em",
                }}
              >
                <div
                  className="project-img"
                  style={{
                    width: "100%",
                    height: "80%",
                  }}
                >
                  <img
                    src={img}
                    alt="project-img"
                    style={{
                      objectFit: "contain",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="project-decs">
                  <h2 className="text-center">{title}</h2>
                  <div className="project-para">
                    <p>{description.substring(0, 100)}...</p>
                  </div>
                  <div className="project-btn">
                    <button className="btn">Know More</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ==============================Events Section ======================= */}
      {/* <div className="events-container">
        <h1>EVENTS</h1>
        <div className="events-box">
          <div className="events-content">
            <div className="events-desc">
              <h3>ASME EFX</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                facilis pariatur voluptatem laborum nisi repudiandae natus
                omnis, ipsum nostrum
              </p>
              <div className="events-btn">
                <button>
                  Know More
                  <ion-icon name="arrow-forward-outline" />
                </button>
              </div>
            </div>
            <div className="events-img">
              <img
                src="https://i.postimg.cc/d3v666rJ/mate-vanyek-OYn-U6-Vs-P3-M-unsplash.jpg"
                alt="events-img"
              />
            </div>
          </div>
          <div className="events-content" id="events-content2">
            <div className="events-desc">
              <h3>ASME EFX</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                facilis pariatur voluptatem laborum nisi repudiandae natus
                omnis, ipsum nostrum
              </p>
              <div className="events-btn">
                <button>
                  Know More
                  <ion-icon name="arrow-forward-outline" />
                </button>
              </div>
            </div>
            <div className="events-img">
              <img
                src="https://i.postimg.cc/d3v666rJ/mate-vanyek-OYn-U6-Vs-P3-M-unsplash.jpg"
                alt="events-img"
              />
            </div>
          </div>
        </div>
      </div> */}

      <div className="events-container">
        <h1>EVENTS</h1>

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
                  width: "350px",
                  height: "100%",
                  margin: "2em 2.5em",
                }}
              >
                <div
                  className="event-img"
                  style={{
                    width: "100%",
                    height: "80%",
                  }}
                >
                  <img
                    src={img}
                    alt="event-img"
                    style={{
                      objectFit: "contain",
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
                  <div className="events-btn">
                    <button className="btn">Know More</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =============================== Achievements ======================= */}
      <div className="acheivements-container">
        <h1>ACHEIVEMENTS</h1>

        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          slidesPerView={"auto"}
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
          loop={true}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
          className="mySwipers"
        >
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt="acheivements"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              alt="acheivements"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              alt="acheivements"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-4.jpg"
              alt="acheivements"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-5.jpg"
              alt="acheivements"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-6.jpg"
              alt="acheivements"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-7.jpg"
              alt="acheivements"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-8.jpg"
              alt="acheivements"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* ================================ Gallery ========================== */}
      <div className="gallery-container">
        <h1>GALLERY</h1>
        <div className="grid-container">
          <div className="grid-item full-width" style={{ objectFit: "cover" }}>
            <img
              // src="https://i.postimg.cc/T3QDjSqq/eric-park-Qb-X8-A8e-Hfzw-unsplash.jpg"
              src="https://www.hindustantimes.com/ht-img/img/2023/07/24/1600x900/nit-rourkela_1690183502765_1690183512065.jpeg"
              alt="gallery-img"
            />
          </div>

          <div class="grid-item large-width">
            <img
              src="https://i.postimg.cc/zDkQMggR/Whats-App-Image-2023-07-18-at-12-10-53-PM.jpg"
              alt="gallery-img"
            />
          </div>
          <div class="grid-item small-width">
            {/* <img
              src="https://i.postimg.cc/X7tCsFTX/karolina-bobek-c-Zy-4x-Mxrh4-unsplash.jpg"
              alt="gallery-img"
            /> */}
            <h3>See More</h3>
          </div>
          <div class="grid-item equal-width">
            <img
              src="https://i.postimg.cc/D05Yb9Tc/Whats-App-Image-2023-07-18-at-12-11-08-PM.jpg"
              alt="gallery-img"
            />
          </div>
          <div class="grid-item equal-width">
            <img
              src="https://i.postimg.cc/tJ9MJXLT/Whats-App-Image-2023-07-18-at-12-11-13-PM.jpg
              "
              alt="gallery-img"
            />
          </div>
        </div>
      </div>
      {/* ======================== Our Team =========================== */}

      <div className="team-container">
        <div className="team-box">
          <div className="team-img">
            <img
              src="https://i.postimg.cc/kgKMv6xN/pexels-fauxels-3184396.jpg"
              alt="team-img"
            />
          </div>

          <div className="team-content">
            <h1>OUR TEAM</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ex
              quas nulla quaerat, deserunt placeat illo odio consequuntur
              perferendis eum!
            </p>
            <div className="teams-btn">
              <button>Know Us</button>
            </div>
          </div>
        </div>
      </div>

      {/* ===========================Sponsors============================ */}
      <div className="sponsors">
        <h4>OUR SPONSORS</h4>
        <div className="sponsors-logo">
          <img src="https://i.postimg.cc/Qxc0Kzhd/pngwing-com.png" alt="logo" />
          <img
            src="https://i.postimg.cc/bY7mJPX5/pngwing-com-1.png"
            alt="logo"
          />
          <img
            src="https://i.postimg.cc/QN96htz5/pngwing-com-3.png
          "
            alt="logo"
          />
          <img
            src="https://i.postimg.cc/g2d4VK2q/pngwing-com-2.png"
            alt="logo"
          />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
