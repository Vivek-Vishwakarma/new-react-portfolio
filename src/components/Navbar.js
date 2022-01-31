import React from "react";
import "../css/nav.css";
import logo from "../images/logo.PNG";
import { Link } from "react-scroll";
import DarkModeToggle from "react-dark-mode-toggle";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const toggleNav = () => {
    const navtoggle = document.querySelector(".nav");
    navtoggle.classList.toggle("new");
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
                  <Link
                    activeClass="active"
                    className="nav-links"
                    spy={true}
                    offset={-180}
                    to="home"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    spy={true}
                    offset={-180}
                    activeClass="active"
                    className="nav-links"
                    to="about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    spy={true}
                    offset={-180}
                    className="nav-links"
                    to="skills"
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="nav-links"
                    spy={true}
                    offset={-180}
                    to="projects"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    spy={true}
                    offset={-180}
                    className="nav-links"
                    to="contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="logo">
            <DarkModeToggle
              onChange={setIsDarkMode}
              checked={isDarkMode}
              size={60}
            />
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
