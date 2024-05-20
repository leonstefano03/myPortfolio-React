import React, { useEffect, useState } from 'react';
import astro from '../assets/astro.png';
import spaceShip from '../assets/spaceShip.png';
import '../style/Home.css';

function Home() {
  const [isRotated, setIsRotated] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const moveNavbar = () => {
    setIsRotated(!isRotated);

    if (!isMoving) {
      setTimeout(() => {
        setIsMoving(!isMoving);
      }, 500);
    } else {
      setIsMoving(!isMoving);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const navbar = document.querySelector('.navbar');

    if (isMoving) {
      navbar.style.transform = 'translateX(0%)';
    } else {
      if (windowWidth <= 450) {
        navbar.style.transform = 'translateX(85%)';
      } else {
        navbar.style.transform = 'translateX(33%)';
      }
    }
  }, [isMoving, windowWidth]);

  return (
    <section className="fondo" id="home">
      <div className="foto"></div>

      <div className={`navbar  `}>
        <div
          className={`cont-spaceship ${isRotated ? 'rotate' : 'rotate2'}`}
          onClick={() => moveNavbar()}
        >
          <img
            className="menu-spaceShip"
            src={spaceShip}
            alt="spaceShip-menu"
          />
        </div>
        <ul className={`nav-links ${isMoving ? 'visible' : ''}`}>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT ME</a>
          </li>
          <li>
            <a href="#skills">SKILLS</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contact">CONTACT ME</a>
          </li>
          <li>
            <a href="#social">SOCIAL</a>
          </li>
        </ul>
      </div>
      <div className="container-line">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="astro animate__animated animate__backInLeft">
        <img src={astro} alt="astro" />
      </div>
      <div className="cont-info">
        <div className="centrar">
          <div className="info">
            <h1 class="animate__animated animate__backInLeft ">DEVELOPER</h1>
            <div>
              {' '}
              <h3 class="animate__animated animate__backInLeft ">FULL-STACK</h3>
            </div>
            <h5 class="animate__animated animate__backInLeft ">
              By Stéfano León
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
