import React from "react";

import { ArrowContainer, ScrollIndicatorContainer, Arrow } from "./styles";

const ScrollIndicator = () => {
  const handleScroll = () => {
    window.scroll({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <ScrollIndicatorContainer onClick={handleScroll}>
      <ArrowContainer>
        <Arrow />
      </ArrowContainer>
    </ScrollIndicatorContainer>
  );
};

export default ScrollIndicator;
