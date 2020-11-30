import { createGlobalStyle } from "styled-components/macro";
import myFont from "./assets/edosz.ttf";

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
    box-sizing: border-box;
  }

@font-face {
    font-family: "Edosz";
    src: url(${myFont});
}

:root {
    --primary-color: #1C4046;
    --secondary-color: #418A8C;
    --tertiary-color: #92B9B8;
    --action-color: #F2CB05;
    --main-font: "Roboto", sans-serif;
    --text-color: #FFFFFF;
    --header-font: "Edosz", sans-serif;
    --default-box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.16)
}

body {
    margin: 0;
    background: var(--primary-color);
    font-family: var(--main-font);
}

h1 {
    color: var(--action-color);
    font-size: 35px;
    font-family: var(--header-font);
    transform: uppercase;
}

h2 {
    color: var(--primary-color);
    font-size: 20px;
    font-weight: bold;
}

`;

export default GlobalStyle;
