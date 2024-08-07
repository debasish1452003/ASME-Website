import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const Header = ({ isScrolled }) => {
  const location = useLocation();

  const isHomeActive =
    location.pathname === "/" || location.pathname === "/ASME-Website";

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary fixed-top ${
          isScrolled ? "navbar-scrolled" : "navbars"
        }`}
      >
        <div className="container-fluid">
          <Link to="#" className="navbar-brand">
            <div className="overlay-div">
              <img
                src="https://i.postimg.cc/RVCw6ktN/Whats-App-Image-2023-12-12-at-4-12-10-PM.jpg"
                alt="asme-logo"
              />
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon " />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  to="/ASME-Website"
                  className={isHomeActive ? "nav-link active" : "nav-link"}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/aboutus" className="nav-link">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/achievements" className="nav-link">
                  Achievements
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/projects" className="nav-link">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/events" className="nav-link">
                  Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/gallery" className="nav-link">
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Our-Team" className="nav-link">
                  Our Team
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
