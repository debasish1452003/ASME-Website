import React from "react";
import { useNavigate } from "react-router-dom";

const galleryPreview = [
  "https://www.hindustantimes.com/ht-img/img/2023/07/24/1600x900/nit-rourkela_1690183502765_1690183512065.jpeg",
  "https://i.postimg.cc/zDkQMggR/Whats-App-Image-2023-07-18-at-12-10-53-PM.jpg",
  "https://i.postimg.cc/D05Yb9Tc/Whats-App-Image-2023-07-18-at-12-11-08-PM.jpg",
  "https://i.postimg.cc/tJ9MJXLT/Whats-App-Image-2023-07-18-at-12-11-13-PM.jpg",
];

const GallaryCard = () => {
  const navigate = useNavigate();
  return (
    <section className="club-section gallery-container">
      <div className="section-heading">
        <p className="eyebrow">Archive</p>
        <h2 className="homeHeader">Gallery</h2>
        <span>Build days, events, campus moments, and chapter memories.</span>
      </div>
      <div className="gallery-preview-grid">
        {galleryPreview.map((src, index) => (
          <button
            className={index === 0 ? "gallery-preview-item wide" : "gallery-preview-item"}
            key={src}
            onClick={() => navigate("/gallery")}
          >
            <img src={src} alt="ASME gallery preview" />
          </button>
        ))}
        <button className="gallery-preview-cta" onClick={() => navigate("/gallery")}>
          <span>Open full archive</span>
        </button>
      </div>
    </section>
  );
};

export default GallaryCard;
