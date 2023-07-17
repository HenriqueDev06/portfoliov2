import React from "react";
import { Container } from "./styles";

import copy from "copy-to-clipboard";

import {
  TbBrandGithub,
  TbBrandDiscord,
  TbBrandLinkedin,
  TbBrandWhatsapp,
  TbBrandGmail,
} from "react-icons/tb";

const Contact = () => {
  const handleCopyEmail = () => {
    const email = "johanhenrique18@gmail.com";

    copy(email);
  };

  const handleCopyDiscord = () => {
    const discord = "henrique06_";

    copy(discord);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "5511969351638";
    const message = "Olá, Estou precisando de um freelancer...";

    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(url, "_blank");
  };

  const handleLinkedInClick = () => {
    const profileUrl = "https://www.linkedin.com/in/johan-henrique-541891279/"; // Substitua pela URL do seu perfil no LinkedIn

    window.open(profileUrl, "_blank");
  };

  const handleGitHubClick = () => {
    const profileUrl = "https://github.com/HenriqueDev06"; // Substitua pela URL do seu perfil no GitHub

    window.open(profileUrl, "_blank");
  };

  return (
    <Container id="contact">
      <h1 data-aos="fade-up">Entre em Contato</h1>
      <p data-aos="fade-up" id="title_info">
        Será um prazer receber uma mensagem sua. Envie sua proposta,
        questionamentos ou ideias. Farei o meu melhor para respondê-lo(a) o
        quanto antes!
      </p>

      <div className="links">
        <nav data-aos="fade-up">
          <a onClick={() => handleCopyEmail()}>
            <TbBrandGmail />
            <div className="text">
              <h2>Email</h2>
              <p>Enviar um Email</p>
            </div>
          </a>
          <a onClick={() => handleGitHubClick()}>
            <TbBrandGithub />
            <div className="text">
              <h2>Github</h2>
              <p>Clique para ver</p>
            </div>
          </a>
          <a onClick={() => handleCopyDiscord()}>
            <TbBrandDiscord />
            <div className="text">
              <h2>Discord</h2>
              <p>Copiar usuário</p>
            </div>
          </a>
          <a onClick={() => handleLinkedInClick()}>
            <TbBrandLinkedin />
            <div className="text">
              <h2>Linkedin</h2>
              <p>Clique para ver</p>
            </div>
          </a>
          <a onClick={() => handleWhatsAppClick()}>
            <TbBrandWhatsapp />
            <div className="text">
              <h2>Whatsapp</h2>
              <p>Mandar mensagem</p>
            </div>
          </a>
        </nav>
      </div>
    </Container>
  );
};
export default Contact;
