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

const AcheivementsCard = () => {
  return (
    <>
      <div className="acheivements-container">
        <h1 className="homeHeader">ACHEIVEMENTS</h1>

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
    </>
  );
};

export default AcheivementsCard;
