import React from "react";
import { Container } from "./styles";

const NavBar = ({ handleHoverLink, handleLeaveLink }) => {
  const handleScroll = (to) => {
    const element = document.getElementById(to);

    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const offsetTop = rect.top + scrollTop;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <a
        onClick={() => handleScroll("about")}
        onMouseEnter={handleHoverLink}
        onMouseLeave={handleLeaveLink}
      >
        Sobre
      </a>
      <a
        onClick={() => handleScroll("projects")}
        onMouseEnter={handleHoverLink}
        onMouseLeave={handleLeaveLink}
      >
        Projetos
      </a>
      <a
        onClick={() => handleScroll("skills")}
        onMouseEnter={handleHoverLink}
        onMouseLeave={handleLeaveLink}
      >
        Habilidades
      </a>
      <a
        onClick={() => handleScroll("services")}
        onMouseEnter={handleHoverLink}
        onMouseLeave={handleLeaveLink}
      >
        Serviços
      </a>
      <a
        onClick={() => handleScroll("contact")}
        onMouseEnter={handleHoverLink}
        onMouseLeave={handleLeaveLink}
      >
        Contato
      </a>
    </Container>
  );
};
export default NavBar;
