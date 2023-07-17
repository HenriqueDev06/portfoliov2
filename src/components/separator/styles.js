import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  background-color: white;

  #a5 {
    width: 100%;
    height: 3px;
    background-color: ${(props) => props.colored};
    margin-top: 3px;
  }
`;
