import React from "react";
import "../style/Skills.css";
import alien from "../assets/alien.png";
import bootstrap from "../assets/logos/boostrap.png";
import mongodb from "../assets/logos/mongodeb.png";
import react from "../assets/logos/react.png";
import node from "../assets/logos/node.png";
import postgresql from "../assets/logos/postgresql.png";
import js from "../assets/logos/js.png";
import css from "../assets/logos/css.png";
import html from "../assets/logos/html.png";
import jwt from "../assets/logos/jwt.png";
import redux from "../assets/logos/redux.png";
import aws from "../assets/logos/aws.png";
import docker from "../assets/logos/docker.png";
import git from "../assets/logos/git.png";
import github from "../assets/logos/github.png";
import jest from "../assets/logos/jest.png";
import next from "../assets/logos/next.png";
import swagger from "../assets/logos/swagger.png";
import tailwind from "../assets/logos/tailwind.png";
import typeScript from "../assets/logos/typescript.jpg";
import scrum from "../assets/logos/scrum.png";

function Skills() {
  return (
    <section className="fondo" id="skills">
      <div className="container-line4">
        <div className="line4"></div>
        <div className="line4"></div>
        <div className="line4"></div>
        <div className="line4"></div>
      </div>

      <div className="container-line5">
        <div className="containerr-line5">
          <div className="line5"></div>
          <div className="line5"></div>
          <div className="line5"></div>
          <div className="line5"></div>
        </div>
      </div>
      <div className="container-line6">
        <div className="line6"></div>
        <div className="line6"></div>
        <div className="line6"></div>
        <div className="line6"></div>
      </div>
      <div className="container-line7">
        <div className="containerr-line7">
          <div className="line7"></div>
          <div className="line7"></div>
          <div className="line7"></div>
          <div className="line7"></div>
        </div>
      </div>
      <div className="container-skills">
        <div className="containerr-skills">
          <div className="container-h1">
            <h1>SKILLS</h1>
          </div>
          <div className="container-square">
            <div className="square">
              <img src={react} alt="react" data-text="REACT" />
            </div>
            <div className="square">
              <img src={node} alt="node" />
            </div>
            <div className="square">
              <img src={postgresql} alt="postgresql" />
            </div>
            <div className="square" id="mongo">
              <img src={mongodb} alt="mongo" />
            </div>
            <div className="square">
              <img src={jwt} alt="jwt" />
            </div>
            <div className="square" id="css">
              <img src={css} alt="css" />
            </div>
            <div className="square" id="html">
              <img src={html} alt="html" />
            </div>
            <div className="square">
              <img src={js} alt="js" />
            </div>
            <div className="square">
              <img src={typeScript} alt="typeScript" />
            </div>
            <div className="square">
              <img src={redux} alt="redux" />
            </div>
            <div className="square">
              <img src={aws} alt="aws" />
            </div>
            <div className="square">
              <img src={docker} alt="docker" />
            </div>
            <div className="square">
              <img src={jest} alt="jest" />
            </div>
            <div className="square" id="next">
              <img src={next} alt="next" />
            </div>
            <div className="square">
              <img src={git} alt="git" />
            </div>
            <div className="square">
              <img src={github} alt="github" />
            </div>
            <div className="square" id="swagger">
              <img src={swagger} alt="swagger" />
            </div>
            <div className="square">
              <img src={tailwind} alt="tailwind" />
            </div>
            <div className="square">
              <img src={bootstrap} alt="bootstrap" />
            </div>
            <div className="square">
              <img src={scrum} alt="scrum" />
            </div>
          </div>
        </div>
      </div>

      <img className="alien" src={alien} alt="alien" />
    </section>
  );
}

export default Skills;
