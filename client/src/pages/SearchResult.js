import styled from "styled-components/macro";
import { TextBox } from "../components/TextBox";
import IconRecycle from "../assets/icon-recycle-primary.svg";
import IconLightBulb from "../assets/icon-lightbulb-action.svg";

const Container = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  place-items: center;
`;

export default function SearchResult() {
  return (
    <>
      <Container>
        <TextBox
          icon={IconRecycle}
          alt="Icon Recycle"
          headline="Entsorgungsmöglichkeit"
          text="Lorem Ipsum"
        />
        <TextBox
          icon={IconLightBulb}
          alt="Icon Lightbulb"
          headline="Wussten Sie schon..."
          text="Lorem Ipsum"
        />
      </Container>
    </>
  );
}
