import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  background: rgb(202, 210, 255);
  background: linear-gradient(
    0deg,
    rgba(202, 210, 255, 1) 20%,
    rgba(255, 255, 255, 1) 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  padding-top: 90px;
  padding-bottom: 53px;

  h1 {
    color: rgb(15, 5, 44);
    font-size: 80px;
    line-height: 0.9;
    font-weight: bolder;
    font-family: "BOLDS";
    text-transform: uppercase;
  }

  #title_info {
    margin-bottom: 70px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 65px;
    }
  }
`;

export const ProjectsList = styled.div`
  width: 90%;
  z-index: 9;

  display: grid;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  grid-template-columns: 1fr 1fr;
  grid-gap: 22px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    grid-template-columns: 1fr;
  }
`;
