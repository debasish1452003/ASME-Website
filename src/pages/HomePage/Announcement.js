import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { useSiteContent } from "../../hooks/useSiteContent";

const Announcement = () => {
  const { content } = useSiteContent();
  return (
    <section className="club-section notify">
      <div className="section-heading">
        <p className="eyebrow">Notice board</p>
        <h2 className="homeHeader">Announcements</h2>
        <span>Current posters and chapter updates, preserved from the original site.</span>
      </div>
      <Swiper
        autoplay={{ delay: 2600, disableOnInteraction: false }}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{ rotate: 24, stretch: 0, depth: 120, modifier: 1, slideShadows: false }}
        loop
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {content.announcements.map((src) => (
          <SwiperSlide key={src}>
            <img src={src} alt="ASME announcement" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Announcement;
