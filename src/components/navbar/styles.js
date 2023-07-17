import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 55px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 10px;

  z-index: 99999999;

  a {
    margin: 0 8px;
    color: white;
    font-weight: 300;

    cursor: pointer;
    border-bottom: 1px solid transparent;
    transition: 0.4s ease;
    padding-bottom: 2px;

    :hover {
      border-bottom-color: white;

      .container-header {
        background-position: 120%;
      }
    }
  }

  @media (max-width: 768px) {
    a {
      font-size: 15px;
    }
  }
`;
