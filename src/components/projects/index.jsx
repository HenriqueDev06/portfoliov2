import React, { useEffect } from "react";
import { Container, ProjectsList } from "./styles";
import ProjectCard from "../projectcard";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  SiStyledcomponents,
  SiTypescript,
  SiJavascript,
  SiReact,
} from "react-icons/si";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Container id="projects">
      <h1>PROJETOS</h1>
      <p id="title_info">Confira alguns dos meus projetos</p>
      <ProjectsList>
        <ProjectCard
          imgsrc={
            "https://res.cloudinary.com/dmceve2cp/image/upload/v1685929690/ecomerce/Screenshot_1_t1rcmz.png"
          }
          title={"The Dragon Store"}
          links={[
            "https://github.com/HenriqueDev06/eco-ecommerce",
            "https://dragon-ecommerce-rouge.vercel.app",
          ]}
          techs={
            <>
              <SiReact /> <SiStyledcomponents /> <SiTypescript />
            </>
          }
          desc="E-commerce exclusivo para produtores de conteúdo da internet, oferecendo produtos selecionados para impulsionar sua presença online."
        />
        <ProjectCard
          imgsrc={
            "https://res.cloudinary.com/dmceve2cp/image/upload/v1685978898/ecomerce/Screenshot_3_wwu47i.png"
          }
          title={"My Games List"}
          links={[
            "https://github.com/HenriqueDev06/my-games-list",
            "https://mygamelist-xi.vercel.app",
          ]}
          techs={
            <>
              <SiReact /> <SiStyledcomponents /> <SiJavascript />
            </>
          }
          desc="Um site de listagem de jogos que permite aos usuários marcar seus jogos favoritos e salvar no seu computador localmente. Tudo em um só lugar"
        />
        <ProjectCard
          imgsrc={
            "https://res.cloudinary.com/dmceve2cp/image/upload/v1685978899/ecomerce/Screenshot_4_j6lc7u.png"
          }
          title={"Memory Game"}
          links={[
            "https://github.com/HenriqueDev06/Memory-game",
            "https://memory-game-gjip9xpjg-henriquedev06.vercel.app",
          ]}
          techs={
            <>
              <SiReact /> <SiStyledcomponents /> <SiTypescript />
            </>
          }
          desc="Jogo da memória com temas cativantes. Desafie sua memória combinando cartas e divirta-se enquanto explora diferentes temas."
        />
        <ProjectCard
          imgsrc={
            "https://res.cloudinary.com/dmceve2cp/image/upload/v1688871924/ecomerce/Screenshot_2_rs7jje.png"
          }
          title={"Meu Portifolio V1"}
          links={[
            "https://meuportifolio-one.vercel.app",
            "https://meuportifolio-one.vercel.app",
          ]}
          techs={
            <>
              <SiReact /> <SiStyledcomponents /> <SiJavascript />
            </>
          }
          desc="Versão 1 do meu portfólio, Com um interface mais limpa, combinando design estético um pouco 'gamer' com código limpo e eficiente."
        />
      </ProjectsList>
    </Container>
  );
};
export default Projects;
