import React from "react";
import "../css/nav.css";
import logo from "../images/logo.PNG";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "react-dark-mode-toggle";

const Navbar = ({isDarkMode, setIsDarkMode}) => {

  const toggleNav = () => {
    const navtoggle = document.querySelector(".nav");
    navtoggle.classList.toggle("new");
    console.log("click");
  };
  return (
    <>
      <div className="sticky">
        <nav className="navbar">
          <div className="head-nav">
            <div className="name">
              <h2>Vivek.</h2>
            </div>
            <div className="nav-responsive">
              <ul className="nav">
                <li>
                  <NavLink
                    activeClassName="active"
                    exact
                    className="nav-links"
                    to="/new-react-portfolio"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    exact
                    className="nav-links"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    exact
                    className="nav-links"
                    to="/skills"
                  >
                    Skills
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    exact
                    className="nav-links"
                    to="/projects"
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    exact
                    className="nav-links"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="logo">
            <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={60}/>
            <h2 className="arrow">&#8594;</h2>
            <img
              src={logo}
              alt="logo"
              className="logoimg"
              onClick={toggleNav}
            />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
