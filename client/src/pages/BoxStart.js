import Box from "../components/Box";
import IconBoxOld from "../assets/icon-box-primary.svg";
import IconBoxNew from "../assets/icon-box-new-primary.svg";
import styled from "styled-components/macro";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function BoxStart() {
  return (
    <Container>
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
    </Container>
  );
}
