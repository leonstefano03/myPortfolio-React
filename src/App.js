import React from "react";
import "./style/App.css";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <main className="main">
      <Home />
      <AboutMe />
      <Skills />
      <Projects/>
      <ContactMe/>
    </main>
  );
}

export default App;
