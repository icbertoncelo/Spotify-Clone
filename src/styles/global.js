import { createGlobalStyle } from 'styled-components';
import 'rc-slider/assets/index.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0
  };

  ::-webkit-scrollbar {
      width: 15px;
      background: #282828;
  }
  ::-webkit-scrollbar-track-piece {
    background-color: #181818;
  }
  ::-webkit-scrollbar-thumb {
      background: #b3b3b3;
  }

  html, body, #root {
    height: 100%
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #181818;
    font-family: 'Montserrat', sans-serif;
    color: #fff
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
