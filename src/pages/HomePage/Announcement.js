import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
const Announcement = () => {
  return (
    <>
      <div className="notify">
        <h1 className="homeHeader">ANNOUNCEMENT</h1>
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
    </>
  );
};

export default Announcement;
