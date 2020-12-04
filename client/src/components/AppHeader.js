import { useLocation, useParams } from "react-router-dom";
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
  width: 100%;
  background-color: var(--primary-color);
`;

const titles = {
  "/": "Reduce, Reuse, Recycle",
  "/search": "Suche",
  "/goodtoknow": "Wussten Sie schon?",
  "/box": "Recyclingkisten",
  "/box/new": "Eine neue Kiste",
};

export default function AppHeader() {
  const location = useLocation();
  const { title } = useParams();

  function getTitle() {
    if (location.pathname === "/box/:title") {
      return title;
    }
    return titles[location.pathname];
  }

  return <Header>{getTitle()}</Header>;
}
