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
    }, 500000);

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
                style={{
                  marginTop: "4vmax",
                  width: "100%",
                  height: "100vh",
                  background: "black",
                  position: "fixed",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "2vmax",
                    right: "3vmax",
                    objectFit: "cover",
                    // borderRadius: "50%",
                    height: "2vmax",
                    width: "2vmax",
                    // background: "red",
                    textAlign: "center",
                    cursor: "pointer",
                    padding: "2px 2px",
                    color: "black",
                    background: "white",

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
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                style={{ padding: "8vmax 0", backgroundColor: "white" }}
              >
                <Masonry gutter="8px">
                  {images.map((image, i) => (
                    <img
                      key={i}
                      src={image}
                      style={{
                        width: "32vmax",
                        height: "20vmax",
                        // width: "100%",
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
