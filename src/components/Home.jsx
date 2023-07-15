import React from "react";
import astro from "../assets/astro.png";
import spaceShip from "../assets/spaceShip.png";
import "../style/Home.css";

function Home() {
  return (
    <section className="fondo">
      <div className="foto"></div>
      <div className="container-menu">
        <img className="menu-spaceShip" src={spaceShip} alt="spaceShip-menu" />
      </div>
      <div className="container-line">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <img className="astro" src={astro} alt="astro" />
      <div className="info">
        <h1>DEVELOPER</h1>
        <h3>FULL-STACK</h3>
        <h5>By Stéfano León</h5>
      </div>
    </section>
  );
}

export default Home;
