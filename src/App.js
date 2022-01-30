import "./App.css";
import ScrollToTop from "react-scroll-to-top";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
      <Router>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Switch>
          <Route exact path="/new-react-portfolio/">
            <ScrollToTop smooth />
            <Header isDarkMode={isDarkMode} />
            <About />
            <Skills isDarkMode={isDarkMode} />
            <Projects isDarkMode={isDarkMode} />
            <Contact service={service} user={user} template={template} />
            <Icons isDarkMode={isDarkMode} />
          </Route>
          <Route exact path="/about" component={About} />
          <Route exact path="/skills">
            <Skills isDarkMode={isDarkMode} />
          </Route>
          <Route exact path="/projects">
            <Projects isDarkMode={isDarkMode} />
          </Route>
          <Route exact path="/contact">
            <Contact service={service} user={user} template={template} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
