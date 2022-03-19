import React, { useEffect } from "react";
import Heading from "./Heading";
import "../css/skill.css";
import AOS from "aos";
const Skills = ({ isDarkMode }) => {
  document.querySelectorAll(".progress-bar").forEach((element) => {
    element.style.background = isDarkMode ? "black" : "white";
  });
  document.querySelectorAll(".progress-bar-percent").forEach((element) => {
    element.style.color = isDarkMode ? "white" : "black";
  });
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Heading heading={"Skills"} />

      <div id="skills" className="sdiv">
        <img
          data-aos="fade-up"
          className="simg"
          src={require("../images/html.png")}
          alt=""
        />
        <img
          data-aos="fade-down"
          className="simg"
          src={require("../images/css.png")}
          alt=""
        />
        <img
          data-aos="fade-right"
          className="simg"
          src={require("../images/js.png")}
          alt=""
        />
        <img
          data-aos="fade-up"
          className="simg"
          src={require("../images/c++.png")}
          alt=""
        />
        <img
          data-aos="fade-up-right"
          className="simg"
          src={require("../images/bootstrap.png")}
          alt=""
        />
        <img
          data-aos="fade-up-right"
          className="simg"
          src={require("../images/py.png")}
          alt=""
        />
        <img
          data-aos="fade-down-right"
          className="simg"
          src={require("../images/react.png")}
          alt=""
        />
        <img
          data-aos="fade-down-down"
          className="simg"
          src={require("../images/c.png")}
          alt=""
        />
        <img
          data-aos="flip-left"
          className="simg"
          src={require("../images/ps.png")}
          alt=""
        />
        <img
          data-aos="flip-right"
          className="simg"
          src={require("../images/ms.png")}
          alt=""
        />
        <img
          data-aos="flip-up"
          className="simg"
          src={require("../images/mongo.png")}
          alt=""
        />
      </div>
      {/* <div className="skillDiv">
        
        <div className="innerSkill">
          <h3>Html</h3>
          <ProgressBar
            fontColor="black"
            width="400"
            trackWidth="13"
            percentage="75"
          />
        </div>
        <div className="innerSkill">
          <h3>CSS</h3>
          <ProgressBar
            fontColor="black"
            width="400"
            trackWidth="13"
            percentage="70"
          />
        </div>
        <div className="innerSkill">
          <h3>JavaScript</h3>
          <ProgressBar
            fontColor="black"
            width="400"
            trackWidth="13"
            percentage="60"
          />
        </div>
        <div className="innerSkill">
          <h3>Python</h3>
          <ProgressBar
            fontColor="black"
            width="400"
            trackWidth="13"
            percentage="50"
          />
        </div>
        <div className="innerSkill">
          <h3>C++</h3>
          <ProgressBar
            fontColor="black"
            width="400"
            trackWidth="13"
            percentage="70"
          />
        </div>
        <div className="innerSkill">
          <h3>C</h3>
          <ProgressBar
            fontColor="black"
            width="400"
            trackWidth="13"
            percentage="60"
          />
        </div>
        <div className="innerSkill">
          <h3>React</h3>
          <ProgressBar
            fontColor="black"
            width="400"
            trackWidth="13"
            percentage="45"
          />
        </div>
      </div> */}
    </>
  );
};

export default Skills;
