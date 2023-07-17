import React from "react";
import { Container, ListServices } from "./styles";

import { MdWeb, MdOutlineDesignServices } from "react-icons/md";
import { AiTwotoneMobile } from "react-icons/ai";
import { TbApi } from "react-icons/tb";
import { FaMicrochip } from "react-icons/fa";
import { SlEnergy } from "react-icons/sl";

const Services = () => {
  return (
    <Container id="services">
      <h1>Serviços</h1>
      <p id="title_info">Um pouco dos serviços que tenho a oferecer!</p>
      <ListServices>
        <div className="item" data-aos="fade-up">
          <MdWeb />
          <h2>Desenvolvimento de Site</h2>
          <p>
            Crio sites interativos e responsivos usando HTML, CSS e JavaScript,
            combinados com frameworks como React ou Vue.js.
          </p>
        </div>
        <div className="item" data-aos="fade-up">
          <MdOutlineDesignServices />
          <h2>UI/UX Designer</h2>
          <p>
            Crio layouts e designs atraentes para interfaces de usuário,
            garantindo uma experiência visualmente agradável e intuitiva.
          </p>
        </div>
        <div className="item" data-aos="fade-up">
          <AiTwotoneMobile />
          <h2>Desenvolvimento de Mobile</h2>
          <p>
            Com React Native, Crio aplicativos móveis nativos ou híbridos para
            iOS e Android usando JavaScript.
          </p>
        </div>
        <div className="item" data-aos="fade-up">
          <TbApi />
          <h2>Desenvolvimento de APIs</h2>
          <p>
            Projeto APIs para permitir a comunicação entre diferentes sistemas,
            fornecendo acesso a dados e funcionalidades específicas.
          </p>
        </div>
        <div className="item" data-aos="fade-up">
          <FaMicrochip />
          <h2>Integração de sistemas</h2>
          <p>
            Integro diferentes sistemas e tecnologias, garantindo a comunicação
            eficiente e a transferência de dados entre eles.
          </p>
        </div>
        <div className="item" data-aos="fade-up">
          <SlEnergy />
          <h2>Consultoria em tecnologia</h2>
          <p>
            Ofereço consultoria para ajudar os clientes a tomar decisões
            estratégicas em relação às tecnologias, arquiteturas.
          </p>
        </div>
      </ListServices>
    </Container>
  );
};
export default Services;
