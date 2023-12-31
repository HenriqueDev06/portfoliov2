import React, { useRef, useEffect, useState } from "react";
import { Container, Content } from "./styles";

import ScrollIndicator from "../scrollDown";
import NavBar from "../navbar";

const Header = () => {
  const containerRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleInfoHover = () => {
    if (containerRef.current) {
      containerRef.current.style.backgroundSize = "150%";
      // setIsAnimating(true);
    }
  };

  const handleInfoLeave = () => {
    if (containerRef.current) {
      containerRef.current.style.backgroundSize = "100%";
      // setIsAnimating(false);
    }
  };

  const handleHoverLink = () => {
    if (containerRef.current) {
      containerRef.current.style.backgroundSize = "120%";
    }
  };

  const handleLeaveLink = () => {
    if (containerRef.current) {
      containerRef.current.style.backgroundSize = "100%";
    }
  };

  return (
    <Container ref={containerRef} isAnimating={isAnimating}>
      <NavBar
        handleHoverLink={handleHoverLink}
        handleLeaveLink={handleLeaveLink}
      />
      <Content
        onMouseEnter={handleInfoHover}
        onMouseLeave={handleInfoLeave}
        onTouchStart={handleInfoHover}
        onTouchEnd={handleInfoLeave}
        className="content-header"
      >
        <p>OI 👋, EU SOU</p>
        <div className="text">
          <h1>JOHAN</h1>
          <h1>HENRIQUE</h1>
        </div>
        <p id="info">Designer + Desenvolvedor</p>
      </Content>
      <ScrollIndicator />
    </Container>
  );
};
export default Header;
