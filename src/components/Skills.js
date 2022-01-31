import React from "react";
import Heading from "./Heading";
import ProgressBar from "react-animated-progress-bar";
import "../css/skill.css";

const Skills = ({isDarkMode}) => {
  document.querySelectorAll('.progress-bar').forEach(element => {
    element.style.background = isDarkMode ? "black" : "white"
    
  })
  document.querySelectorAll('.progress-bar-percent').forEach(element => {
    element.style.color = isDarkMode ? "white" : "black"
    
  })
  return (
    <>
    
      <Heading heading={"Skills"} />

      <div id="skills" className="sdiv">
        <img
          className="simg"
          src={require("../images/html.png").default}
          alt=""
        />
        <img
          className="simg"
          src={require("../images/css.png").default}
          alt=""
        />
        <img
          className="simg"
          src={require("../images/js.png").default}
          alt=""
        />
        <img
          className="simg"
          src={require("../images/c++.png").default}
          alt=""
        />
        <img
          className="simg"
          src={require("../images/bootstrap.png").default}
          alt=""
        />
        <img
          className="simg"
          src={require("../images/py.png").default}
          alt=""
        />
        <img
          className="simg"
          src={require("../images/react.png").default}
          alt=""
        />
        <img className="simg" src={require("../images/c.png").default} alt="" />
        <img
          className="simg"
          src={require("../images/ps.png").default}
          alt=""
        />
        <img
          className="simg"
          src={require("../images/ms.png").default}
          alt=""
        />
      </div>
      <div className="skillDiv">
        
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
      </div>
    </>
  );
};

export default Skills;
