import React from "react";
import { useNavigate } from "react-router-dom";

const GallaryCard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="gallery-container">
        <h1 className="homeHeader">GALLERY</h1>
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
          <div
            class="grid-item small-width"
            onClick={() => navigate("/gallery")}
          >
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
    </>
  );
};

export default GallaryCard;
