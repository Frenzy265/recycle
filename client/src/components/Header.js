import styled from "styled-components/macro";

const Header = styled.header`
  display: flex;
  font-family: var(--header-font);
  color: var(--action-color);
  place-items: center;
  min-height: 100px;
  font-size: 35px;
  word-wrap: break-word;
  line-height: 30px;
  justify-content: center;
  width: 100%;
  background-color: var(--primary-color);

  button {
    position: absolute;
    left: 30px;
  }
`;

export default Header;
