import styled from "styled-components/macro";
import { ListItems } from "../components/ListItem";
import IconRecycle from "../assets/icon-recycle-primary.svg";

const ListItemContainer = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  place-items: center;
`;

export default function BoxExist() {
  return (
    <ListItemContainer>
      <ListItems item="Wandfarbe" icon={IconRecycle} alt={"Icon Recycle"} />
    </ListItemContainer>
  );
}
