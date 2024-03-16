import React from "react";
import "../Loader/Loader.css";

const Loader = () => {
  return (
    <>
      <div className="LoaderBody">
        <div className="LoaderContainer">
          <div className="LoaderRing"></div>
          <div className="LoaderRing"></div>
          <div className="LoaderRing"></div>
          <span className="LoaderLoading">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Loader;
