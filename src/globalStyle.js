import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        font-family: 'Poppins';
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
        border: 0;
    }
    html, body{
        overflow-x: hidden;
        width: 100%;
    }
    a{
        text-decoration: none;
    }
    .display-flex{
        display: flex;
        justify-content: center;
        align-items: center;
    }

  @font-face {
    font-family: 'Whopa';
    src: url('/public/fonts/Whoopass-m95.ttf') format('truetype');
  }

  @font-face {
  font-family: 'Sigana';
  src: url('/public/fonts/FontsFree-Net-calcio-demo-400.ttf') format('truetype');
  }

  @font-face {
  font-family: 'BOLDS';
  src: url('/public/fonts/BoldstromD.otf') format('OpenType');
  }


::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-track {
  background: transparent;
}




`;
