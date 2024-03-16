import React, { useState, useEffect } from "react";
import Layout from "../components/Layouts/Layout";
import { Link } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const Pagenotfound = () => {
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(true);
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
          <Layout isScrolled={isScrolled}>
            <div className="pnf">
              <h1 className="pnf-title">404</h1>
              <h2 className="pnf-heading">Oops ! Page Not Found</h2>
              <Link to="/" className="pnf-btn">
                Go Back
              </Link>
            </div>
          </Layout>
        </>
      )}
    </>
  );
};

export default Pagenotfound;
