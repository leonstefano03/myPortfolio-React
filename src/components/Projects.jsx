import React, { useState, useEffect, useRef } from "react";
import "../style/Projects.css";
import ologram from "../assets/ologram.png";
import spaceNebulosa from "../assets/spaceNebulosa.png";
import earth from "../assets/planets/earth.png";
import venus from "../assets/planets/venus.png";
import { Link } from "react-router-dom";
import mercury from "../assets/planets/mercury.png";
import neptune from "../assets/planets/neptune.png";
import saturnus from "../assets/planets/saturnus.png";
import jupiter from "../assets/planets/jupiter.png";
import uranus from "../assets/planets/uranus.png";
import mars from "../assets/planets/mars.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  const [hovered, setHovered] = useState(false);
  const sliderRef = useRef(null);
  let projects = [
    {
      img: "https://media.istockphoto.com/id/1180270841/es/vector/fant%C3%A1stico-paisaje-psicod%C3%A9lico-de-estilo-hippie-con-monta%C3%B1as-en-forma-de-rayas-de-colores-y.jpg?s=612x612&w=0&k=20&c=dkvS7KDOdk_pD7ODLlLPrlXOVPHt05xnAlGDzxahoLk=",
      link: "https://colorgame-plataforma5.netlify.app/",
      title: "COLOR GAME",
      description:
        "El proyecto Color Game es un juego interactivo desarrollado con HTML y CSS. Presenta al usuario el nombre de un color en formato RGB y desafía al jugador a adivinar el color correcto seleccionando una opción de colores proporcionada.",
    },
    {
      img: "https://media.istockphoto.com/id/1336091469/es/vector/sonrisa-divertida-caras-patr%C3%B3n-sin-fisuras-vector-doodle-dibujos-animados-kawaii-dise%C3%B1o-de.jpg?s=612x612&w=0&k=20&c=mvExVxrC8MtUJLZON5L1i3AGO8rX5fDpaa7zRP8GONo=",
      link: "https://todolist-plataforma5.netlify.app/",
      title: "TO DO LIST",
      description:
        "El proyecto de la To-Do List es una aplicación sencilla desarrollada con HTML y CSS. Permite al usuario crear y administrar una lista de tareas pendientes. ",
    },
    {
      img: "https://media.istockphoto.com/id/1168711039/es/vector/patr%C3%B3n-de-pollo-de-goma-plano.jpg?s=612x612&w=0&k=20&c=v1G-spwio29KPzj0RfSHhefwaAxxkpPV8PbZ_he5xVU=",
      link: "https://weatherchannel-plataforma5.netlify.app/",
      title: "WHEATHER CHANNEL",
      description:
        "El proyecto del Weather Channel es una aplicación web desarrollada con HTML y CSS. Permite al usuario ingresar el nombre de una ciudad y muestra información sobre el clima actual en esa ubicación. Utiliza una API de pronóstico del clima.",
    },
  ];

  const planets = [
    { name: mars, projectIndex:0 },
    { name: earth, projectIndex:1 },
    { name: venus, projectIndex :2},
    { name: mercury},
    { name: neptune},
    { name: saturnus},
    { name: jupiter},
    { name: uranus}
  ];
  const handlePlanetClick = (projectIndex) => {
     sliderRef.current.slickGoTo(projectIndex);
  };
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <section className="fondo">
      <div className="container-ologram">
        <div className="container-ologram-cart">
          <img src={ologram} />
          <Slider 
          ref={sliderRef}
            className="cart-slider"
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={!hovered}
            autoplaySpeed={5000}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {projects?.map((project, index) => (
              <div className="cart-project" key={index}>
     
                <div className="img-project">
                  <img src={project.img} alt={project.title} />
                </div>
                <h1>{project.title}</h1>
                <h2>{project.description}</h2>
                <div className="button-project">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="button">
                      <span>VIEW</span>
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="container-planets">
        <img className="space-img" src={spaceNebulosa} />
        <div className="planets">
         
         {planets?.map((planet, index) => (
      <img
        key={index}
        src={planet.name}
        alt={planet.name}
        onClick={() => handlePlanetClick(planet.projectIndex)}
      />
    ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
