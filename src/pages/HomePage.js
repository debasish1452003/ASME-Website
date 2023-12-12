import React from "react";
import Layout from "../components/Layouts/Layout";

const HomePage = () => {
  // const textElements = document.getElementsByClassName("span");

  // let visible = 0;

  // setInterval(() => {
  //   textElements[visible].style.opacity = "0";
  //   visible = (visible + 1) % textElements.length;
  //   textElements[visible].style.opacity = "1";
  // }, 2000);

  return (
    <Layout>
      <div className="page">
        <div className="content">
          <h1 className="gradient-text">ASME</h1>
          <p className="change-text"></p>

          {/* <div className="change-text">
            <span className="text1">NIT ROURKELA STUDENT CHAPTER</span>
            <span className="text2">WE MAKE HUMAN POWERED VEHICLES</span>
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
