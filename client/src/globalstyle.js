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
    --main-font: "Roboto", sans-serif;
    --text-color: #5A5A5A,
    --header-font: "Permanent Marker", sans-serif;
    --default-box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.16)
}

body {
    margin: 0;
    background: var(--main-color);
    font-family: var(--main-font);
    color: var(--noactioncolor);
}

h1 {
    color: var(--main-color);
    font-size: 35px;
    font-family: var(--header-font)
}

h2 {
    color: var(--main-color);
    font-size: 20px;
    font-weight: bold;
}

`;

export default GlobalStyle;
