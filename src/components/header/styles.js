import styled, { keyframes } from "styled-components";

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
    letter-spacing: -10px;
  }

  p {
    font-weight: 500;
    color: white;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 80px;
      letter-spacing: -4px;
    }
  }
`;
