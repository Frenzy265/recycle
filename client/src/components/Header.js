import styled from "styled-components/macro";

const Header = styled.header`
  display: grid;
  font-family: var(--header-font);
  color: var(--action-color);
  place-items: center;
  min-height: 100px;
  font-size: 35px;
  word-wrap: break-word;
  line-height: 30px;
  text-align: center;
  width: 100vw;
  background-color: var(--primary-color);
`;

export default Header;
