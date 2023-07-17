import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

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

  z-index: 9999999999999999;

  background-color: rgba(202, 210, 255, 1);
  position: relative;
  padding-top: 20px;

  .techs {
    img {
      height: 70px;
    }

    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 45px;

    .item {
      margin-left: 25px;

      width: 70px;
      p {
        font-size: xx-small;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;

        transition: 0.4s ease;

        color: rgba(20, 1, 33, 1);
      }

      :hover {
        p {
          transform: scale(1.07);
          background-color: rgba(20, 1, 33, 1);
          color: white;
        }
      }
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 50px;
    }
    .techs + .techs {
      margin-top: 10px !important;
    }
    .techs {
      width: 100%;
      flex-wrap: wrap;

      .item {
        display: flex;
        justify-content: center;
        align-items: center;

        flex-direction: column;
        margin-bottom: 30px;
        p {
          text-align: center;
        }
      }
      img {
        height: 45px;
      }
    }
  }
`;
