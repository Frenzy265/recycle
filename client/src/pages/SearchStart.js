import styled from "styled-components/macro";
import { Inputfield } from "../components/Input";
import { List } from "../components/ListItem";
import IconSearch from "../assets/icon-search-primary.svg";
import IconArrowForward from "../assets/icon-arrow-forward-primary.svg";

const Container = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  place-items: center;
`;

export default function Search() {
  return (
    <>
      <Container>
        <Inputfield
          title="Was möchtest du recyceln?"
          icon={IconSearch}
          alt="Icon Search"
        />
        <List
          item="Fahrradreifen"
          icon={IconArrowForward}
          alt="Icon Arrow Forward"
        />
      </Container>
    </>
  );
}
