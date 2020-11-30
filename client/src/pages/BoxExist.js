import styled from "styled-components/macro";
import { List } from "../components/ListItem";
import IconRecycle from "../assets/icon-recycle-primary.svg";
import { Inputfield } from "../components/Input";
import IconAdd from "../assets/icon-add-primary.svg";
import Button from "../components/Button";

const Container = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  place-items: center;
`;

export default function BoxExist() {
  return (
    <Container>
      <Inputfield title="Neuer Eintrag" icon={IconAdd} alt="Icon add" />
      <List item="Wandfarbe" icon={IconRecycle} alt={"Icon Recycle"} />
      <Button>
        <p>Erfolgreich recycled</p>
        <img src={IconRecycle} alt="Icon recycle" />
      </Button>
    </Container>
  );
}
