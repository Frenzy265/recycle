import styled from "styled-components/macro";
import IconSearch from "../assets/icon-search-noaction.svg";
import IconLightBulb from "../assets/icon-lightbulb-noaction.svg";
import IconBox from "../assets/icon-box-noaction.svg";

const Footer = styled.footer`
  min-height: 80px;
  width: 80vw;
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0;

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
