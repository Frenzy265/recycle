import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
    box-sizing: border-box;
  }

:root {
    --main-color: #264031;
    --secondary-color: #778C80;
    --action-color: #F2CB05;
    --noaction-color: #fff;
    --light-font-color: #fff;
    --dark-font-color: var(--main-color)
}

body {
    margin: 0;
    background: var(--main-color);
    font-family: "Roboto", sans-serif;
    color: var(--light-font-color)
}

h1 {
    color: var(--main-color);
    font-size: 35px;
    font-family: "Permanent Marker", sans-serif;
}

h2 {
    color: var(--main-color);
    font-size: 20px;
    font-weight: bold;
}

`;

export default GlobalStyle;
