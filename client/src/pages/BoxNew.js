import styled from "styled-components/macro";
import { Inputfield } from "../components/Input";
import Button from "../components/Button";
import IconAdd from "../assets/icon-add-primary.svg";
import IconPen from "../assets/icon-pen-primary.svg";
import IconRecycle from "../assets/icon-recycle-primary.svg";

const Container = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  place-items: center;
`;

export default function BoxNew() {
  return (
    <Container>
      <Inputfield
        title="Geben Sie der Box einen Namen"
        icon={IconPen}
        alt="Icon Add"
      />
      <Inputfield title="Neuer Eintrag" icon={IconAdd} alt="Icon Add" />
      <Button>
        <p>Erfolgreich recycled</p>
        <img src={IconRecycle} alt="Icon recycle" />
      </Button>
    </Container>
  );
}
