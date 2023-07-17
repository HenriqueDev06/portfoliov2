import React, { useEffect } from "react";
import { Container } from "./styles";

const Skills = () => {
  return (
    <Container id="skills">
      <h1>Habilidades</h1>
      <p id="title_info">Algumas das tecnologias que eu utilizo</p>
      <div className="techs">
        <div className="item" data-aos="fade-up">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          <p>JAVASCRIPT</p>
        </div>
        <div className="item" data-aos="fade-up">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
          <p>Typescript</p>
        </div>
        <div className="item" data-aos="fade-up">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          <p>Css</p>
        </div>
        <div className="item" data-aos="fade-up">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          <p>Html</p>
        </div>
        <div className="item" data-aos="fade-up">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <p>React</p>
        </div>
        <div className="item" data-aos="fade-up">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
          <p>next</p>
        </div>
        <div className="item" data-aos="fade-up">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" />
          <p>three</p>
        </div>
        <div className="item" data-aos="fade-up">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
          <p>Figma</p>
        </div>
      </div>
      <div className="techs">
        <div className="item" data-aos="fade-up">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
          <p>Node</p>
        </div>
        <div className="item" data-aos="fade-up">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
          <p>express</p>
        </div>
        <div className="item" data-aos="fade-up">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
          <p>MongoDb</p>
        </div>
        <div className="item" data-aos="fade-up">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
          <p>firebase</p>
        </div>
        <div className="item" data-aos="fade-up">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
          <p>mysql</p>
        </div>
        <div className="item" data-aos="fade-up">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          <p>github</p>
        </div>
        <div className="item" data-aos="fade-up">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg" />
          <p>Godot</p>
        </div>
      </div>
    </Container>
  );
};
export default Skills;
