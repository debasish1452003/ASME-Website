import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = ({ isScrolled }) => {
  const navClass = ({ isActive }) => `nav-link${isActive ? " active" : ""}`;

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? "navbar-scrolled" : "navbars"}`}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <div className="overlay-div">
            <img
              src="https://i.postimg.cc/RVCw6ktN/Whats-App-Image-2023-12-12-at-4-12-10-PM.jpg"
              alt="ASME NIT Rourkela logo"
            />
          </div>
          <span>ASME NITR</span>
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
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" end className={navClass}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/aboutus" className={navClass}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/achievements" className={navClass}>
                Achievements
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className={navClass}>
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/events" className={navClass}>
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/gallery" className={navClass}>
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blogs" className={navClass}>
                Journal
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/our-team" className={navClass}>
                Team
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
