import React from "react";
import Layout from "../components/Layouts/Layout";
import "../style/aboutus.css";

const Aboutus = () => {
  return (
    <Layout title={"ASME-NITRKL Aboutus"}>
      <div className="bgHeading">
        <img
          className="bgImage"
          src="https://images.pexels.com/photos/586570/pexels-photo-586570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <h1 className="heading">About Us</h1>
      </div>

      <div className="bg">
        <div className="aboutUsContent">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            ea? Totam eius accusantium non vitae, corporis, nulla, aut iusto
            delectus assumenda reprehenderit nobis nisi esse laudantium! Ab
            reiciendis, qui beatae nihil aspernatur neque totam! Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Neque ullam tenetur,
            aspernatur earum sed harum suscipit quod modi voluptas, nemo rerum
            corrupti vitae veritatis tempore reiciendis fugit iste. Cumque
            provident odio esse consectetur tempora optio repellat minus, autem
            rerum temporibus beatae, exercitationem voluptatum officia
            reprehenderit fugiat veritatis enim doloremque placeat?
          </p>
        </div>
        <div className="right_content">
          <h4 className="h4_left">Passion in the new Human powered vehicle</h4>
          <h4 className="h4_right">High-Quality design craft</h4>
        </div>
      </div>

      <div className="lowerContent"></div>
    </Layout>
  );
};

export default Aboutus;
