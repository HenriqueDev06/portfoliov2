import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  padding-top: 30px;

  h1 {
    color: rgb(15, 5, 44);
    font-size: 80px;
    line-height: 0.9;
    font-weight: bolder;
    font-family: "BOLDS";
    text-transform: uppercase;

    text-align: center;

    margin-bottom: 24px;
  }

  .links {
    font-size: 50px;

    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      margin-right: 30px;

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

      h2 {
        font-size: 20px;
      }

      p {
        font-size: 14px;
      }

      .text {
        text-align: start;
        margin-left: 5px;

        white-space: nowrap;
      }
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 94%;

    img {
      transition: 0.4s ease;
      width: 530px;

      :hover {
        transform: scale(1.07);
      }
    }

    .info {
      display: flex;
      justify-content: center;
      align-items: center;

      flex-direction: column;
      width: inherit;
    }

    p {
      font-size: 18px;
      line-height: 1.3;

      text-align: center;
    }

    #p2 {
      margin-top: 9px;
    }
  }

  @media (max-width: 768px) {
    img {
      display: none;
    }

    a {
      font-style: normal;
      text-decoration: none;
    }

    height: auto;

    button {
      min-width: 100%;
      margin-bottom: 8px;
      margin-right: 0 !important;
      justify-content: flex-start !important;

      background-color: transparent;
      color: rgba(20, 20, 20, 1);
    }

    .content {
      width: 94%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .info {
      width: 100%;
    }

    .text {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: -webkit-fill-available;
    }

    .links {
      width: 100%;

      flex-direction: column;
    }
  }
`;
