import styled from "styled-components/macro";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";

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

  svg {
    height: 25px;
    width: 25px;
  }
`;

const Navlink = styled(Link)`
  svg {
    fill: ${(props) =>
      props.$active ? "var(--action-color)" : "var(--tertiary-color)"};
  }
`;

export const Navbar = () => {
  const location = useLocation();
  useEffect(() => {}, [location]);

  return (
    <Footer>
      <Navlink to="/" $active={location.pathname === "/"}>
        <svg viewBox="0 0 31 31">
          <path d="M15,30V21h6v9h7.5V18H33L18,4.5,3,18H7.5V30Z" />
        </svg>
      </Navlink>
      <Navlink to={"/search"} $active={location.pathname.startsWith("/search")}>
        <svg viewBox="0 0 30 30.005">
          <path d="M29.592,25.941,23.75,20.1a1.405,1.405,0,0,0-1-.41H21.8a12.183,12.183,0,1,0-2.11,2.11v.955a1.405,1.405,0,0,0,.41,1l5.842,5.842a1.4,1.4,0,0,0,1.986,0l1.658-1.658a1.413,1.413,0,0,0,.006-1.992Zm-17.4-6.252a7.5,7.5,0,1,1,7.5-7.5A7.5,7.5,0,0,1,12.188,19.689Z" />
        </svg>
      </Navlink>
      <Navlink to="/box" $active={location.pathname.startsWith("/box")}>
        <svg viewBox="0 0 59.691 44.086">
          <path d="M39.7,24.294a4.477,4.477,0,0,1-3.861-2.3l-6-10.49-5.987,10.49a4.493,4.493,0,0,1-3.87,2.313,4.081,4.081,0,0,1-1.24-.187L5.97,20.259V37.775a3.112,3.112,0,0,0,2.257,3.051L28.39,46.149a5.755,5.755,0,0,0,2.891,0l20.182-5.324a3.129,3.129,0,0,0,2.257-3.051V20.259L40.943,24.107A4.081,4.081,0,0,1,39.7,24.294ZM59.529,13.253l-4.8-10.116a1.506,1.506,0,0,0-1.557-.876L29.844,5.4,38.4,20.367a1.5,1.5,0,0,0,1.725.718l18.456-5.56a1.646,1.646,0,0,0,.951-2.273ZM4.962,3.137.16,13.253A1.629,1.629,0,0,0,1.1,15.516l18.456,5.56a1.5,1.5,0,0,0,1.725-.718L29.844,5.4,6.511,2.261A1.507,1.507,0,0,0,4.962,3.137Z" />
        </svg>
      </Navlink>
      <Navlink to="/goodtoknow" $active={location.pathname === "/goodtoknow"}>
        <svg viewBox="0 0 20.625 30">
          <path d="M5.628,26.621a1.876,1.876,0,0,0,.314,1.037l1,1.505A1.874,1.874,0,0,0,8.5,30H12.12a1.874,1.874,0,0,0,1.561-.837l1-1.505A1.874,1.874,0,0,0,15,26.621l0-2.247H5.625l0,2.247ZM0,10.312A10.255,10.255,0,0,0,2.552,17.1a16.838,16.838,0,0,1,3.059,5.358c0,.015,0,.03.006.046h9.389c0-.015,0-.03.006-.046A16.838,16.838,0,0,1,18.072,17.1,10.31,10.31,0,1,0,0,10.312ZM10.312,5.625a4.693,4.693,0,0,0-4.687,4.687.937.937,0,1,1-1.875,0A6.57,6.57,0,0,1,10.312,3.75a.937.937,0,0,1,0,1.875Z" />
        </svg>
      </Navlink>
    </Footer>
  );
};

Navbar.propType = {
  active: PropTypes.bool,
};
