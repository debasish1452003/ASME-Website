import React from "react";
import Layout from "../components/Layouts/Layout";
import videoo from "../assets/bgvideo.webm";

const Events = () => {
  return (
    <Layout>
      <>
        <div
          className="main-events"
          style={{ height: "70vh", marginTop: "71px" }}
        >
          <video
            id="myVideo"
            src={videoo}
            autoPlay
            loop
            muted
            style={{
              width: "100%",
              height: "100%",

              zIndex: "1",
              // objectFit: "contain",
              objectFit: "cover",
              // filter: "blur(4px)",
            }}
          />
        </div>
        <h1 className="cont-events">EVENTS</h1>
      </>
    </Layout>
  );
};

export default Events;
