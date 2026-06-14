import React from "react";
import "../Loader/Loader.css";

const Loader = ({ label = "Preparing experience" }) => {
  return (
    <div className="LoaderBody">
      <div className="LoaderAura" />
      <div className="LoaderContainer" role="status" aria-live="polite">
        <div className="LoaderMark" aria-hidden="true">
          <div className="LoaderOrbit orbit-one" />
          <div className="LoaderOrbit orbit-two" />
          <div className="LoaderHub">ASME</div>
        </div>
        <span className="LoaderLoading">{label}</span>
        <span className="LoaderSubcopy">NIT Rourkela Student Chapter</span>
        <div className="LoaderLine" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  );
};

export default Loader;
