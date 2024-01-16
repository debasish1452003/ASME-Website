import React from "react";
import Layout from "../components/Layouts/Layout";
// import videoo from "../assets/bgvideo.webm";

const Events = () => {
  return (
    <Layout>
      <>
        <div
          className="main-events"
          style={{ height: "70vh", marginTop: "71px" }}
        >
          {/* <video
            id="myVideo"
            src={videoo}
            autoPlay
            loop
            muted
            style={{
              width: "100%",
              height: "100%",
              zIndex: "1", 
              objectFit: "cover",
            }}
          /> */}
          {
            <img
              src="https://i.postimg.cc/x8DtCB3Y/toy-bricks-table-with-word-events.jpg"
              alt="Events"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          }
        </div>
      </>
    </Layout>
  );
};

export default Events;
