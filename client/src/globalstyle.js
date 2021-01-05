import { createGlobalStyle, css } from "styled-components/macro";
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

#root {
    height: 100%
}

html {
    width: 100%;
    height: 100%;
}

body {
    margin: 0;
    background: var(--primary-color);
    font-family: var(--main-font);
    width: 100%;

}

input, button, li {
    font-family: var(---main-font);
    font-size: 16px;
    padding: 0px
}

a {
    text-decoration: none;
}

h1 {
    color: var(--action-color);
    font-size: 35px;
    font-family: var(--header-font);
    transform: uppercase;
}

h2 {
    color: var(--primary-color);
    font-size: 16px;
    font-weight: bold;
}

::placeholder {
    color: var(--secondary-color);
    font-size: 1rem;
}
`;

export const BasicStyle = css`
  align-items: center;
  border-radius: 7px;
  border: none;
  box-shadow: var(--default-box-shadow);
  display: flex;
  padding: 0 20px;
`;

export const BasicSize = css`
  min-width: 300px;
  max-width: 80%;
  height: 50px;
`;

export default GlobalStyle;
