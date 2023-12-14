import React from "react";
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
          pagination={{
            clickable: true,
          }}
          loop={true}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/G2828yhd/Whats-App-Image-2023-12-13-at-10-10-06-PM.jpg"
              alt="carousel"
            />
          </SwiperSlide>
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
      <div className="project-container">
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
      </div>

      {/* ==============================Events Section ======================= */}
      <div className="events-container">
        <h1>EVENTS</h1>
        <div className="events-box">
          <div className="events-content">
            <div className="events-desc">
              <h3>ASME EFX</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                facilis pariatur voluptatem laborum nisi repudiandae natus
                omnis, ipsum nostrum deserunt veritatis vel sunt voluptate
                quibusdam expedita? Repellat enim quasi inventore, recusandae
                facilis debitis quia?
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
                omnis, ipsum nostrum deserunt veritatis vel sunt voluptate
                quibusdam expedita? Repellat enim quasi inventore, recusandae
                facilis debitis quia?
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
          slidesPerView={"3"}
          pagination={{
            clickable: true,
          }}
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
          <div class="grid-item full-width">
            <img
              src="https://i.postimg.cc/T3QDjSqq/eric-park-Qb-X8-A8e-Hfzw-unsplash.jpg"
              alt="gallery-img"
            />
          </div>

          <div class="grid-item large-width">
            {" "}
            <img
              src="https://i.postimg.cc/h403m4QX/rafay-ansari-Sd9p5p38nu-I-unsplash.jpg"
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
              src="https://i.postimg.cc/hPXm8MZH/karolina-bobek-y-We-Lk-Oq-Xmcg-unsplash.jpg"
              alt="gallery-img"
            />
          </div>
          <div class="grid-item equal-width">
            <img
              src="https://i.postimg.cc/1XjqhNXC/mate-vanyek-OYn-U6-Vs-P3-M-unsplash.jpg"
              alt="gallery-img"
            />
          </div>
          {/* <div class="grid-item equal-width"></div> */}
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
              perferendis eum! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Fugit laboriosam quasi tempore hic aliquid
              tenetur quam culpa alias asperiores quidem. Dolor enim rem natus
              eaque repellendus nisi repellat, provident consequatur.
            </p>
            <div className="team-btn">
              <button>Know Us</button>
            </div>
          </div>
        </div>
      </div>

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
