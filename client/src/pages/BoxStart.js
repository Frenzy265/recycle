import Box from "../components/Box";
import IconBoxOld from "../assets/icon-box-primary.svg";
import IconBoxNew from "../assets/icon-box-new-primary.svg";
import styled from "styled-components/macro";

const BoxContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`;

export default function BoxStart() {
  return (
    <BoxContainer>
      <Box>
        <img src={IconBoxNew} alt="Icon Box" />
        <p>Neue Kiste</p>
      </Box>
      <Box existing>
        <img src={IconBoxOld} alt="Icon Box" />
        <p>Wertstoffhof</p>
      </Box>
      <Box existing>
        <img src={IconBoxOld} alt="Icon Box" />
        <p>ebay</p>
      </Box>
      <Box existing>
        <img src={IconBoxOld} alt="Icon Box" />
        <p>Kleidercontainer</p>
      </Box>
    </BoxContainer>
  );
}
