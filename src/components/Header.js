import React from "react";
import "../css/header.css";
import bg from "../images/bg.svg";
import Icons from "./Icons";
import { Typewriter } from "react-simple-typewriter";
import Button from "./Button";
const Header = ({isDarkMode}) => {

  return (
    <>
      <section>
        <div id="home" className="header">
          <div className="info">
            <h3>Hey There !</h3>
            <h1>I'm Vivek Vishwakarma</h1>
            <h2 className="skills">
              <Typewriter
                words={["Web Developer", "Tech Enthusiast"]}
                loop="true"
                cursor="true"
                cursorStyle="|"
              />
            </h2>
            <div className="icons">
              <Icons />
            </div>
            <Button isDarkMode={isDarkMode} url="mailto:vivek.vishwakarma10022002@gmail.com" text="Hire Me &#8594;" />
          </div>
          <div className="image">
            <img src={bg} alt="bg" />
          </div>
        </div>
      </section>
    </>
  );
};



export default Header;
