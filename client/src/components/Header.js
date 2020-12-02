import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components/macro";

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
`;

export default function Header() {
  const location = useLocation();
  useEffect(() => {}, [location]);

  function getTitle() {
    if (location.pathname === "/") {
      return "Reduce, Reuse, Recycle";
    }
    if (location.pathname === "/search") {
      return "Suche";
    }
    if (location.pathname === "/goodtoknow") {
      return "Wussten Sie schon?";
    }
    if (location.pathname === "/box") {
      return "Recyclingkisten";
    }
    if (location.pathname === "/box/new") {
      return "Eine neue Kiste";
    }
  }

  return (
    <>
      <Headline>{getTitle()}</Headline>
    </>
  );
}
