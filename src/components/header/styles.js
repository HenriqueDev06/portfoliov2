import styled, { keyframes } from "styled-components";

const animateBackground = keyframes`
  20% {
    background-image: radial-gradient(
    circle,
    rgba(28, 28, 28, 1) 3%,
    rgba(182, 89, 248, 1) 45%,
    rgba(10, 10, 10, 1) 100%
  );
  }
  20% {
    background-image: radial-gradient(
    circle,
    rgba(28, 28, 28, 1) 3%,
    rgba(91, 233, 91, 1) 45%,
    rgba(10, 10, 10, 1) 100%
  );
  }
  40% {
    background-image: radial-gradient(
    circle,
    rgba(28, 28, 28, 1) 3%,
    rgba(217, 229, 79, 1) 45%,
    rgba(10, 10, 10, 1) 100%
  );
  }
  60% {
    background-image: radial-gradient(
    circle,
    rgba(28, 28, 28, 1) 3%,
    rgba(192, 72, 72, 1) 45%,
    rgba(10, 10, 10, 1) 100%
  );
  }
  80% {
    background-image: radial-gradient(
    circle,
    rgba(28, 28, 28, 1) 3%,
    rgba(187, 71, 135, 1) 45%,
    rgba(10, 10, 10, 1) 100%
  );
  }
  100% {
    background-image: radial-gradient(
    circle,
    rgba(28, 28, 28, 1) 3%,
    rgba(71, 127, 187, 1) 45%,
    rgba(10, 10, 10, 1) 100%
  );
  }
`;

export const Container = styled.header`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  background-image: radial-gradient(
    circle,
    rgba(28, 28, 28, 1) 3%,
    rgba(71, 127, 187, 1) 45%,
    rgba(10, 10, 10, 1) 100%
  );

  background-size: 100%;
  background-position: center;

  transition: 0.4s ease;
  animation: ${animateBackground} 4s ease infinite;
  animation-play-state: ${(props) =>
    props.isAnimating ? "running" : "paused"};

  #info {
    color: #b0b5ff;
    text-transform: uppercase;
    margin-top: 20px;
    font-weight: bolder;
  }
`;

export const Content = styled.div`
  text-align: center;
  h1 {
    line-height: 0.8;
    font-size: 140px;
    color: white;
    letter-spacing: 0px;
  }

  p {
    font-weight: 500;
    color: white;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 80px;
    }
  }
`;
