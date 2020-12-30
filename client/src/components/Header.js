import React from "react";
import styled from "styled-components/macro";
import { useLocation } from "react-router-dom";
import { BackButton } from "../components/BackButton";
import PropTypes from "prop-types";

const Headline = styled.header`
  display: grid;
  font-family: var(--header-font);
  color: var(--action-color);
  place-items: center;
  min-height: 100px;
  font-size: 35px;
  word-wrap: break-word;
  line-height: 30px;
  text-align: center;
  width: 100%;
  background-color: var(--primary-color);
  grid-template-columns: 20% auto 20%;
`;

const Header = ({ title }) => {
  const location = useLocation();

  return (
    <>
      <Headline>
        <div> {location.pathname !== "/" && <BackButton />}</div>
        {title}
        <div></div>
      </Headline>
    </>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
