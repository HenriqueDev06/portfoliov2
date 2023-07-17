import React from "react";
import { Container } from "./styles";

import { TbBrandGithub } from "react-icons/tb";

const ProjectCard = ({ imgsrc, title, techs, desc, links }) => {
  const handleProject = () => {
    window.open(links[1], "_blank");
  };

  const handleRepositorie = () => {
    window.open(links[0], "_blank");
  };

  return (
    <Container data-aos="fade-up">
      <img src={imgsrc} />

      <div className="title">
        <h2>{title}</h2>
        <div className="icons">{techs}</div>
      </div>
      <div className="info">
        <p id="desc">{desc}</p>
        <div className="buttons">
          <button onClick={() => handleProject()}>Ver Projeto</button>
          <button onClick={() => handleRepositorie()}>
            <TbBrandGithub />
            <p id="repo">Repositorio</p>
          </button>
        </div>
      </div>
    </Container>
  );
};
export default ProjectCard;
