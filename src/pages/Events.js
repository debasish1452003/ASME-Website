import React from "react";
import Layout from "../components/Layouts/Layout";

const Events = () => {
  const eventdata = [
    {
      id: "event1",
      title: "ASME Efx",
      img: "https://i.postimg.cc/d3v666rJ/mate-vanyek-OYn-U6-Vs-P3-M-unsplash.jpg",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem excepturi sed natus voluptatem corporis voluptate unde illum?Necessitatibus voluptates eaque magnam illum voluptate recusanda neque, aut id unde voluptas iure r  dicta",
    },
    {
      id: "event2",
      title: "ASME Efx",
      img: "https://i.postimg.cc/d3v666rJ/mate-vanyek-OYn-U6-Vs-P3-M-unsplash.jpg",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem excepturi sed natus voluptatem corporis voluptate unde illum?Necessitatibus voluptates eaque magnam illum voluptate recusanda neque, aut id unde voluptas iure r  dicta",
    },
    {
      id: "event3",
      title: "ASME Efx",
      img: "https://i.postimg.cc/d3v666rJ/mate-vanyek-OYn-U6-Vs-P3-M-unsplash.jpg",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem excepturi sed natus voluptatem corporis voluptate unde illum?Necessitatibus voluptates eaque magnam illum voluptate recusanda neque, aut id unde voluptas iure r  dicta",
    },
    {
      id: "event4",
      title: "ASME Efx",
      img: "https://i.postimg.cc/d3v666rJ/mate-vanyek-OYn-U6-Vs-P3-M-unsplash.jpg",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem excepturi sed natus voluptatem corporis voluptate unde illum?Necessitatibus voluptates eaque magnam illum voluptate recusanda neque, aut id unde voluptas iure r  dicta",
    },
  ];
  return (
    <Layout>
      <>
        <div className="events-container">
          <h1>Events</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
            dolorem excepturi sed natus voluptatem corporis voluptate unde
            illum? Necessitatibus voluptates eaque magnam illum voluptate
            recusandae neque, aut id unde voluptas iure repudiandae voluptatem
            itaque tempore distinctio minus omnis corporis magni ab obcaecati
            enim repellendus aperiam accusantium quod? Voluptas consectetur,
            natus facilis consequuntur
          </p>
          <div
            className="event-container secondary d-flex flex-wrap"
            style={{
              width: "100vw",
              margin: "0 auto",
              padding: "0 auto",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            {eventdata.map(({ title, id, description, img }) => {
              return (
                <div
                  className="event-card"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    // justifyContent: "center",
                    flexDirection: "column",
                    width: "300px",
                    height: "100%",
                    margin: "2em 2.5em",
                  }}
                >
                  <div
                    className="event-img"
                    style={{
                      width: "100%",
                      height: "80%",
                    }}
                  >
                    <img
                      src={img}
                      alt="event-img"
                      style={{
                        objectFit: "contain",
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  </div>
                  <div className="events-decs">
                    <h2 className="text-center">{title}</h2>
                    <div className="events-para">
                      <p>{description.substring(0, 100)}...</p>
                    </div>
                    <div className="events-btn">
                      <button className="btn btn-primary   ">Know More</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Events;
