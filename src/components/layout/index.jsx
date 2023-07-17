import React from "react";
import { Container } from "./styles";

import Header from "../header";
import Projects from "../projects";
import Separator from "../separator";
import Services from "../services";
import Skills from "../skills";
import Contact from "../contact";
import Footer from "../footer";
import AboutMe from "../about";

const Layout = () => {
  return (
    <Container>
      <Header />

      <Separator color={"rgba(71, 127, 187, 1)"} />
      <AboutMe />
      <Projects />
      <Skills />
      <Services />
      <Separator color={"rgba(13, 13, 13, 1)"} />
      <Contact />
      <Separator color={"rgba(13, 13, 13, 1)"} />
      <Footer />
    </Container>
  );
};
export default Layout;
