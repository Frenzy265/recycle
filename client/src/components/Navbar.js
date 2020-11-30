import styled from "styled-components/macro";
import IconSearch from "../assets/icon-search-tertiary.svg";
import IconLightBulb from "../assets/icon-lightbulb-tertiary.svg";
import IconBox from "../assets/icon-box-tertiary.svg";

const Footer = styled.footer`
  min-height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0;
  left: 0;
  align-items: center;

  img {
    height: 20px;
    width: 20px;
  }

  a {
    height: 24px;
    width: 24px;
  }
`;

export const Navbar = () => {
  return (
    <Footer>
      <a href="/">
        <img src={IconSearch} alt="Icon Search" />
      </a>
      <a href="/">
        <img src={IconBox} alt="Icon Box" />
      </a>
      <a href="/">
        <img src={IconLightBulb} alt="Icon Lightbulb" />
      </a>
    </Footer>
  );
};
