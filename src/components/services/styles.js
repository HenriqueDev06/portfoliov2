import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 110vh;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  padding-bottom: 40px;

  z-index: 9999999999999999;

  background-color: rgba(11, 11, 11, 1);

  padding-top: 30px;

  h1 {
    color: rgb(229, 220, 255);
    font-size: 80px;
    line-height: 1.1;
    font-weight: bolder;
    font-family: "BOLDS";
    text-transform: uppercase;
  }

  #title_info {
    margin-bottom: 70px;
    color: rgba(229, 220, 255, 0.81);
  }

  @media (max-width: 768px) {
    height: auto;

    h1 {
      font-size: 65px;
    }
  }
`;

export const ListServices = styled.section`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;

  gap: 40px;

  .item {
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
    text-align: center;

    svg {
      color: rgb(155, 122, 255);
      fill: rgb(155, 122, 255);

      font-size: 40px;
    }

    h2 {
      color: rgb(229, 220, 255);
    }

    p {
      color: rgba(229, 220, 255, 0.81);
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
