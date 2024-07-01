import React, { useEffect, useState } from "react";
import Layout from "../components/Layouts/Layout";
import Loader from "../components/Loader/Loader";
import { RxCross1 } from "react-icons/rx";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import "../style/gallery.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(true);
  const [isPrev, setIsPrev] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const [data, setData] = useState({ img: "", i: 0 });

  const importAll = (r) => r.keys().map(r);

  const [images, setImages] = useState(
    importAll(require.context("../assets/gallery", false, /\.(png|jpe?g|svg)$/))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      // Shuffle the images randomly
      setImages([...images.sort(() => Math.random() - 0.5)]);
    }, 250000);

    return () => clearInterval(interval);
  }, [images]);

  const imageSize = images.length;

  const viewImage = (img, i) => {
    setData({ img, i });
    if (i === 0) {
      setIsPrev(true);
    }

    if (i === imageSize - 1) {
      setIsNext(true);
    }
  };

  const imgActionp = (action) => {
    let i = data.i;

    if (i <= imageSize - 1) {
      setIsNext(false);
    }

    if (i === 1) {
      setIsPrev(true);
    } else {
      setIsPrev(false);
    }

    if (action === "previous-img" && i > 0) {
      setData({ img: images[i - 1], i: i - 1 });
    }

    if (!action) {
      setData({ img: "", i: 0 });
    }
  };

  const imgActionn = (action) => {
    let i = data.i;

    if (i >= 0 && i <= imageSize - 1) {
      setIsPrev(false);
    }

    if (i === imageSize - 2) {
      setIsNext(true);
    } else {
      setIsNext(false);
    }

    if (action === "next-img" && i < imageSize - 1) {
      setData({ img: images[i + 1], i: i + 1 });
    }
  };

  console.log(data.i);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 350);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Layout title={"Gallery"} isScrolled={isScrolled}>
            {data.img && (
              <div
                className="gallery-im"
                style={{
                  width: "100%",
                  height: "100vh",
                  background: "black",
                  position: "fixed",
                  top: "0",
                  // boxSizing: "content-box",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  background:
                    'url("https://i.postimg.cc/2y9DBgqY/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner.jpg")',
                  zIndex: "10000",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "2vmax",
                    right: "3vmax",
                    // objectFit: "cover",
                    // borderRadius: "50%",

                    // background: "red",
                    textAlign: "center",
                    textJustify: "center",
                    cursor: "pointer",
                    // padding: "1px 1px",
                    color: "white",

                    background: "black",

                    transition: "background-color 0.6s ease-out",
                  }}
                  onClick={() => imgActionp()}
                  className="close-tag"
                >
                  <RxCross1 />
                </div>
                <button
                  onClick={() => imgActionp("previous-img")}
                  className={isPrev ? "prev-tagmod" : "prev-tag"}
                >
                  <GrPrevious />
                </button>
                <img
                  src={data.img}
                  alt="gallery-img"
                  style={{ width: "auto", maxWidth: "90%", maxHeight: "90%" }}
                />
                <button
                  onClick={() => imgActionn("next-img")}
                  className={isNext ? "prev-tagmod" : "next-tag"}
                >
                  <GrNext />
                </button>
              </div>
            )}

            <div
              className="gallery-contain"
              style={{
                padding: "10px ",

                backgroundColor: "white",
              }}
            >
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 3, 750: 2, 900: 5 }}
                style={{
                  color: "black",
                  padding: "10vmax 0",
                  background:
                    'url("https://i.postimg.cc/SNX6Y83F/white-blank-background-texture-design-element.jpg")',
                }}
              >
                <h1>OUR MEMORIES</h1>
                <Masonry gutter="1vmax">
                  {images.map((image, i) => (
                    <img
                      key={i}
                      src={image}
                      style={{
                        width: "32vmax",
                        height: "15vmax",
                        width: "100%",
                        display: "block",
                        cursor: "pointer",
                      }}
                      alt="gallery-images"
                      onClick={() => viewImage(image, i)}
                    />
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>
          </Layout>
        </>
      )}
    </>
  );
};

export default Gallery;
