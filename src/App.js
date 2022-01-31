import "./App.css";
import ScrollToTop from "react-scroll-to-top";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Icons from "./components/Icons";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  if (isDarkMode) {
    document.body.style.background = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.background = "white";
    document.body.style.color = "black";
  }
  const service = process.env.REACT_APP_SERVICE;
  const template = process.env.REACT_APP_TEMPLATE;
  const user = process.env.REACT_APP_USER;


  return (
    <>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <ScrollToTop smooth />
            <Header isDarkMode={isDarkMode} />
            <About />
            <Skills isDarkMode={isDarkMode} />
            <Projects isDarkMode={isDarkMode} />
            <Contact service={service} user={user} template={template} />
            <Icons isDarkMode={isDarkMode} />
      
    </>
  );
}

export default App;
