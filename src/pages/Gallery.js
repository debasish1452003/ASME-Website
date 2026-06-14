import React, { useEffect, useMemo, useState } from "react";
import Layout from "../components/Layouts/Layout";
import Loader from "../components/Loader/Loader";
import { RxCross1 } from "react-icons/rx";
import { GrNext, GrPrevious } from "react-icons/gr";
import "../style/gallery.css";
import { useSiteContent } from "../hooks/useSiteContent";

const Gallery = () => {
  const importAll = (r) => r.keys().map(r);
  const assetImages = useMemo(
    () => importAll(require.context("../assets/gallery", false, /\.(png|jpe?g|svg)$/)),
    []
  );
  const { content, loading: contentLoading } = useSiteContent({
    preloadImages: true,
    extraImageUrls: assetImages,
  });
  const [loading, setLoading] = useState(process.env.NODE_ENV !== "production");
  const [activeIndex, setActiveIndex] = useState(null);

  const images = useMemo(() => {
    const backendImages = (content.gallery || [])
      .filter((item) => item.url)
      .map((item) => ({
        src: item.url,
        title: item.title || "ASME memory",
        category: item.category || "Chapter",
      }));

    const legacyImages = assetImages.map((src, index) => ({
      src,
      title: `Archive memory ${index + 1}`,
      category: "Legacy archive",
    }));

    return [...backendImages, ...legacyImages];
  }, [assetImages, content.gallery]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 250);
    return () => clearTimeout(timer);
  }, []);

  const close = () => setActiveIndex(null);
  const previous = () => setActiveIndex((index) => Math.max(index - 1, 0));
  const next = () => setActiveIndex((index) => Math.min(index + 1, images.length - 1));
  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  if (loading || contentLoading) {
    return <Loader label="Preparing gallery" />;
  }

  return (
    <Layout
      title="ASME NITR | Gallery"
      description="Browse ASME NIT Rourkela gallery images from workshops, competitions, build sessions, and campus memories."
      keywords="ASME gallery, NIT Rourkela photos, workshops, competitions, chapter memories"
      canonicalPath="/gallery"
      isScrolled
    >
      <section className="gallery-page">
        <div className="page-shell-heading">
          <p className="eyebrow">Chapter archive</p>
          <h1>Gallery</h1>
          <span>
            A curated memory wall for build sessions, competitions, workshops, and campus moments.
          </span>
        </div>

        <div className="archive-grid">
          {images.map((image, index) => (
            <button
              className={index % 11 === 0 ? "archive-card large" : "archive-card"}
              key={`${image.src}-${index}`}
              onClick={() => setActiveIndex(index)}
            >
              <img src={image.src} alt={image.title} />
              <span>{image.category}</span>
            </button>
          ))}
        </div>
      </section>

      {activeImage && (
        <div className="gallery-lightbox">
          <button className="lightbox-close" onClick={close} aria-label="Close image">
            <RxCross1 />
          </button>
          <button
            className="lightbox-nav"
            onClick={previous}
            disabled={activeIndex === 0}
            aria-label="Previous image"
          >
            <GrPrevious />
          </button>
          <figure>
            <img src={activeImage.src} alt={activeImage.title} />
            <figcaption>
              <strong>{activeImage.title}</strong>
              <span>{activeImage.category}</span>
            </figcaption>
          </figure>
          <button
            className="lightbox-nav"
            onClick={next}
            disabled={activeIndex === images.length - 1}
            aria-label="Next image"
          >
            <GrNext />
          </button>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
