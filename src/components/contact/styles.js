import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  button {
    width: 50%;
    height: 55px;

    border-radius: 5px;
    color: rgba(203, 226, 250, 1);
    background-color: rgba(71, 127, 187, 1);

    margin: 30px 0;
    cursor: pointer;
  }

  h1 {
    color: rgb(15, 5, 44);
    font-size: 80px;
    line-height: 0.9;
    font-weight: bolder;
    font-family: "BOLDS";
    text-transform: uppercase;
  }

  .links {
    width: 60%;

    font-weight: 300;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 20px 0;
    border-radius: 5px;

    nav {
      margin-top: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  a {
    font-size: 50px;
    margin: 0 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid rgba(0, 0, 0, 0.3);

    padding: 10px 19px;
    border-radius: 5px;

    font-size: 50px;

    cursor: pointer;
    transition: 0.4s ease;

    :hover {
      background-color: rgba(20, 20, 20, 1);
      color: rgba(247, 213, 252, 1);
    }

    :active {
      color: rgba(160, 255, 109, 1);
    }

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
    }
  }

  .text {
    text-align: start;
    margin-left: 5px;

    white-space: nowrap;
  }

  #title_info {
    margin-bottom: 20px;
    width: 60%;
    text-align: center;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 65px;
      text-align: center;
    }
    #title_info {
      width: 85%;
      margin-top: 5px;
    }

    height: auto;

    padding-top: 60px;

    nav {
      flex-direction: column;

      a {
        min-width: 100%;
        margin-bottom: 8px;
        margin-right: 0 !important;
        justify-content: flex-start !important;

        background-color: transparent;
        color: rgba(20, 20, 20, 1);
      }
    }
  }
`;
