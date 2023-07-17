import React from "react";
import { Container } from "./styles";
import { TbBrandGithub, TbBrandLinkedin, TbFile } from "react-icons/tb";

const AboutMe = () => {
  const handleGitHubClick = () => {
    const profileUrl = "https://github.com/HenriqueDev06"; // Substitua pela URL do seu perfil no GitHub

    window.open(profileUrl, "_blank");
  };

  const handleLinkedInClick = () => {
    const profileUrl = "https://www.linkedin.com/in/johan-henrique-541891279/"; // Substitua pela URL do seu perfil no LinkedIn

    window.open(profileUrl, "_blank");
  };
  return (
    <Container id="about" data-aos="fade-up">
      <div className="content">
        <img src="https://res.cloudinary.com/dmceve2cp/image/upload/v1689142169/ecomerce/ReadyPlayerMe-Avatar_oh8b5b.png" />
        <div data-aos="fade-up" className="info">
          <h1 data-aos="fade-up">Sobre Mim</h1>
          <p data-aos="fade-up">
            Olá! Meu nome é Johan Henrique e tenho 20 anos. Trabalho como
            desenvolvedor web, especializado em JavaScript, React e TypeScript.
            Além disso, também tenho experiência em desenvolvimento de backend
            com Node.js e criação de APIs.
          </p>
          <p id="p2" data-aos="fade-up">
            Sou apaixonado pela área de programação desde muito cedo e decidi
            transformar essa paixão em uma carreira. Há três anos, comecei a
            trabalhar como freelancer, oferecendo meus serviços de
            desenvolvimento web. Durante esse tempo, tive a oportunidade de
            aprimorar minhas habilidades técnicas e adquirir um vasto
            conhecimento sobre as melhores práticas de desenvolvimento.
          </p>
          <div data-aos="fade-up" className="links">
            <button onClick={() => handleGitHubClick()}>
              <TbBrandGithub />
              <div className="text">
                <h2>Github</h2>
                <p>Clique para ver</p>
              </div>
            </button>

            <button onClick={() => handleLinkedInClick()}>
              <TbBrandLinkedin />
              <div className="text">
                <h2>Linkedin</h2>
                <p>Clique para ver</p>
              </div>
            </button>
            <button>
              <TbFile />
              <div className="text">
                <h2>Curriculo</h2>
                <p>Clique para baixar</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default AboutMe;
