import React from "react";
import "../css/icon.css"
const Icons = ({isDarkMode}) => {
  // if (isDarkMode) {
  //   document.querySelectorAll(".fa-3x").forEach(element => {
  //     element.style.color = "hsl(0deg 0% 40%)"
  //   })
  // }
  // else {
  //   document.querySelectorAll(".fa-3x").forEach(element => {
  //     element.style.color = "black"
  //   })
  // }
  return (
    <>
    <div className="icons">
      <a href="https://github.com/Vivek-Vishwakarma" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-3x"></i></a>
      <a href="https://twitter.com/VivekVish2002" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-3x"></i></a>
      <a href="https://www.linkedin.com/in/vivek-vishwakarma-2172a519b/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-3x"></i></a>
      <a href="mailto:vivek.vishwakarma10022002@gmail.com" target="_blank" rel="noopener noreferrer"><i className="far fa-envelope fa-3x"></i></a>
    </div>
    </>
  );
};

export default Icons;
