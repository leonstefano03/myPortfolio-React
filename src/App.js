import React from "react";
import "./style/App.css";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="main">
      <Home />
      <AboutMe />
      <Skills />
      <Projects/>
      <ContactMe/>
      <Footer/>
    </main>
  );
}

export default App;
