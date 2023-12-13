import React from "react";
import Layout from "../components/Layouts/Layout";
import Design from "../components/Layouts/Design";

const HomePage = () => {
  return (
    <Layout>
      <div className="page">
        <Design />
        <div className="content">
          <h1 className="gradient-text">ASME</h1>
          <p className="change-text"></p>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
