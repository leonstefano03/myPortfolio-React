import React, { useState, useRef } from "react";
import "../style/Projects.css";
import ologram from "../assets/ologram.png";
import spaceNebulosa from "../assets/spaceNebulosa.png";
import earth from "../assets/planets/earth.png";
import venus from "../assets/planets/venus.png";
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
      img: require("../assets/projects/colorGame.png"),
      link: "https://colorgame-plataforma5.netlify.app/",
      title: "COLOR GAME",
      description:
        "The Color Game project is an interactive game developed with HTML and CSS. It presents the user with the name of a color in RGB format and challenges the player to guess the correct color by selecting a provided color option.",
    },
    {
      img: require("../assets/projects/toDoList.png"),
      link: "https://todolist-plataforma5.netlify.app/",
      title: "TO DO LIST",
      description:
        "The To-Do List project is a simple application developed with HTML and CSS. It allows the user to create and manage a list of pending tasks.",
    },
    {
      img: require("../assets/projects/wheatherChannel.png"),
      link: "https://weatherchannel-plataforma5.netlify.app/",
      title: "WHEATHER CHANNEL",
      description:
        "The Weather Channel project is a web application developed with HTML and CSS. It enables the user to input the name of a city and displays information about the current weather in that location. It utilizes a weather forecast API.",
    },
    {
      img: require("../assets/projects/fastDeliveryes.png"),
      link: "https://fast-delivery-front-rab6.vercel.app/",
      title: "FAST DELIVERY",
      description:
        "Fast Delivery is a logistics app that simplifies delivery management for couriers and businesses. Couriers handle up to 10 daily deliveries, while administrators oversee and optimize operations, including geolocation. We utilize technologies like Next.js, TS, Docker, AWS, Swagger, Jest, and more.",
    },
    {
      img: require("../assets/projects/ElClubDelPlan.png"),
      link: "https://elclubdelplan.netlify.app/",
      title: "EL CLUB DEL PLAN",
      description:
        "The Plan Club aims to streamline the organization of social events. Whether you're planning a birthday party, a gathering with friends, or a conference, this application allows you to manage, share, and fund the event among your contacts.",
    },
    {
      img: require("../assets/projects/gotam.png"),
      link: "https://gotam-front.onrender.com/",
      title: "GOTAM",
      description:
        "This business project simplifies the management of employees and work areas, allowing you to assign employees to different areas and access a comprehensive list of employees with their respective work areas and personal and professional information.",
    },
  ];

  const planets = [
    { name: mars, projectIndex: 0 },
    { name: earth, projectIndex: 1 },
    { name: venus, projectIndex: 2 },
    { name: mercury, projectIndex: 3 },
    { name: neptune, projectIndex: 4 },
    { name: saturnus, projectIndex: 5 },
    { name: jupiter },
    { name: uranus },
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
    <section className="fondoo" id="projects">
      <div className="container-ologram">
        <div className="container-img">
          <img src={ologram} alt='ologram'/>
      
        <div className="container-ologram-cart">
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
        </div>  </div>
      </div>
      <div className="container-planets">
        <img className="space-img" src={spaceNebulosa} alt='space nebulosa'/>
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
