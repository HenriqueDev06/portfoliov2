import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  z-index: 999999999999999;

  background: rgb(3, 8, 16);
  border-radius: 8px;

  color: rgb(233, 226, 252);

  h2 {
    z-index: 999999999999999;
    text-transform: uppercase;
  }

  position: relative;

  .icons {
    font-size: 15px;
    color: white;

    margin-left: 15px;

    svg {
      margin-right: 5px;
    }
  }

  p {
    opacity: 0.8;
    text-align: start;
  }

  margin: 0 9px;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;

    border-radius: 8px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .title {
    width: 95%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 14px;
  }

  padding-bottom: 10px;

  #desc {
    font-size: 13px;
    font-weight: 300;
    text-align: start;
  }

  .info {
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 8px;

    #repo {
      display: none;
    }

    .buttons {
      display: flex;
      justify-content: center;
      align-items: center;

      button + button {
        margin-left: 5px;
      }

      button {
        white-space: nowrap;
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 3px;
        cursor: pointer;

        background-color: transparent;
        border: 1px solid rgb(225, 214, 255);
        color: rgb(225, 214, 255);

        padding: 5px 10px;
        height: 40px;

        transition: 0.4s ease;

        #repo {
          color: rgb(225, 214, 255);
        }

        :hover {
          background-color: rgb(225, 214, 255);
          color: rgb(22, 22, 22);
          border-radius: 5px;

          #repo {
            color: rgb(22, 22, 22);
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    width: auto;

    #repo {
      display: block !important;
      color: rgb(225, 214, 255);
    }

    #desc {
      margin-right: 5px;
    }

    .buttons {
      flex-direction: column;

      width: 100%;
      button {
        width: 100%;
        margin-left: 0 !important;
      }

      button + button {
        margin-top: 5px;
      }

      svg {
        display: none;
      }
    }
  }
`;
