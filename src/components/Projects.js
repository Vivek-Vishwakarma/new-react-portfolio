import React from "react";
import Heading from "./Heading";
import ScrollToTop from "react-scroll-to-top";
import "../css/project.css";

const Projects = ({isDarkMode}) => {
  document.querySelectorAll(".card").forEach(element => {
    element.style.background = isDarkMode ? "black" : "white"
  })
  return (
    <>
      <Heading heading={"Projects"} />
      <ScrollToTop smooth />
      <div id="projects"  className="container">
        <div className="card" style={{ width: "350px"}}>
          <img
            src={require("../images/newsApp.png").default}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">News App using React</h5>
            <p className="tech">JavaScript, React, API, BootStrap</p>
            <p className="card-text">
              I made this app using News api. App can be used to read news
              category wise have infinite scroll and searchbar to fetch
              whichever news you want.
            </p>
            <a
              href="https://github.com/Vivek-Vishwakarma/news-app-react"
              target="_blank"
              rel="noreferrer"
              className="btn btn-success"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/posts/vivek-vishwakarma-2172a519b_javascript-reactjs-html-activity-6844572450034868224-JeFg"
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              Video
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "350px" }}>
          <img
            src={require("../images/newsApp.png").default}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">Chatting App</h5>
            <p className="tech">JavaScript, Socketio, HTML, CSS</p>
            <p className="card-text">
              This is basic chatting app which use socketio to connect 2 clients
              at same time.
            </p>
            <a
              href="https://github.com/Vivek-Vishwakarma/Chat-App-V3"
              target="_blank"
              rel="noreferrer"
              className="btn btn-success"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/posts/vivek-vishwakarma-2172a519b_javascript-reactjs-html-activity-6844572450034868224-JeFg"
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              Video
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "350px" }}>
          <img
            src={require("../images/tictactoe.png").default}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">Tic-Tac-Toe</h5>
            <p className="tech">JavaScript, HTML, CSS</p>
            <p className="card-text">
              Tic-Tac-Toe game created using HTML 5, CSS 3(Grid) and Java
              Script(Logic). It also show turn and winner at top.
            </p>
            <a
              href="https://github.com/Vivek-Vishwakarma/Tic-Tac-Toe"
              target="_blank"
              rel="noreferrer"
              className="btn btn-success"
            >
              Github
            </a>
            <a
              href="https://basic-tic-tac-toe.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              View
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "350px" }}>
          <img
            src={require("../images/music.PNG").default}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">Music Player</h5>
            <p className="tech">JavaScript, HTML, CSS</p>
            <p className="card-text">
              Simple Music Player you can skip the song or jump to next song. It
              also have nice animation effect. It takes music form local
              storage.
            </p>
            <a
              href="https://github.com/Vivek-Vishwakarma/music-player"
              target="_blank"
              rel="noreferrer"
              className="btn btn-success"
            >
              Github
            </a>
            <a
              href="https://v3musicplayer.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              View
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "350px" }}>
          <img
            src={require("../images/weather.PNG").default}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">Weather Web App</h5>
            <p className="tech">JavaScript, HTML, CSS, API</p>
            <p className="card-text">
              Weather App I made this using open weather api. All date is real
              time, recorded and send on webpage through api.
            </p>
            <a
              href="https://github.com/Vivek-Vishwakarma/WeatherApp"
              target="_blank"
              rel="noreferrer"
              className="btn btn-success"
            >
              Github
            </a>
            <a
              href="https://basic-weather-webapp.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              View
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "350px" }}>
          <img
            src={require("../images/rps.PNG").default}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">Rock-Paper-Scissor</h5>
            <p className="tech">JavaScript, HTML, CSS</p>
            <p className="card-text">
              Rock-Paper-Scissor web game its fun to play and completely depends
              on rng(random number regenerator) as its single player.
            </p>
            <a
              href="https://github.com/Vivek-Vishwakarma/rock-paper-scissor"
              target="_blank"
              rel="noreferrer"
              className="btn btn-success"
            >
              Github
            </a>
            <a
              href="https://vivek-vishwakarma.github.io/rock-paper-scissor/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              View
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "350px" }}>
          <img
            src={require("../images/notes.PNG").default}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">Note App (Advanced ToDo List)</h5>
            <p className="tech">JavaScript, HTML, CSS, BootStrap</p>
            <p className="card-text">
              Advance ToDo list. It keeps data even when u reload page. And it's
              completely responsive
            </p>
            <a
              href="https://github.com/Vivek-Vishwakarma/notesApp"
              target="_blank"
              rel="noreferrer"
              className="btn btn-success"
            >
              Github
            </a>
            <a
              href="https://vivek-vishwakarma.github.io/notesApp/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              View
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "350px" }}>
          <img
            src={require("../images/calc.PNG").default}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">Simple Calculator</h5>
            <p className="tech">JavaScript, HTML, CSS</p>
            <p className="card-text">
              Basic calculator using table in HTML and using eval function in
              Java Script. And it's completely responsive as well.
            </p>
            <a
              href="https://github.com/Vivek-Vishwakarma/Calc"
              target="_blank"
              rel="noreferrer"
              className="btn btn-success"
            >
              Github
            </a>
            <a
              href="https://v3-calc.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              View
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "350px" }}>
          <img
            src={require("../images/todo.PNG").default}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">To-Do-List</h5>
            <p className="tech">JavaScript, HTML, CSS</p>
            <p className="card-text">
              It's a To-Do-List used to take a note of things u wanna do. I have
              to work on it's responsivness.
            </p>
            <a
              href="https://github.com/Vivek-Vishwakarma/To-Do-List"
              target="_blank"
              rel="noreferrer"
              className="btn btn-success"
            >
              Github
            </a>
            <a
              href="https://vivek-vishwakarma.github.io/To-Do-List/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              View
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "350px" }}>
          <img
            src={require("../images/clock.PNG").default}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">Analog Clock</h5>
            <p className="tech">JavaScript, HTML, CSS</p>
            <p className="card-text">
              Analog Clock made using blank clock layout and hands are made up
              of css and logic using Java Script. It shows real time ofcoure.
            </p>
            <a
              href="https://github.com/Vivek-Vishwakarma/analog_clock"
              target="_blank"
              rel="noreferrer"
              className="btn btn-success"
            >
              Github
            </a>
            <a
              href="https://vivek-vishwakarma.github.io/analog_clock/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              View
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
