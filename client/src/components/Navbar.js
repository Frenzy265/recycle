import styled from "styled-components/macro";
import IconSearch from "../assets/icon-search-tertiary.svg";
import IconLightBulb from "../assets/icon-lightbulb-tertiary.svg";
import IconBox from "../assets/icon-box-tertiary.svg";
import { Link } from "react-router-dom";

const Footer = styled.footer`
  min-height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0;
  left: 0;
  align-items: center;
  background-color: var(--primary-color);

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
      <Link to="/search">
        <img src={IconSearch} alt="Icon Search" />
      </Link>
      <Link to="/box">
        <img src={IconBox} alt="Icon Box" />
      </Link>
      <Link to="/goodtoknow">
        <img src={IconLightBulb} alt="Icon Lightbulb" />
      </Link>
    </Footer>
  );
};
