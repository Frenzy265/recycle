import Box from "../components/Box";
import IconBoxOld from "../assets/icon-box-primary.svg";
import IconBoxNew from "../assets/icon-box-new-primary.svg";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { getBoxes } from "../utils/api-boxes";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function BoxStart() {
  const [boxes, setBoxes] = useState(null);

  useEffect(async () => {
    const existBoxes = await getBoxes();
    setBoxes(existBoxes);
  }, []);

  return (
    <Container>
      <Link to="/box/new">
        <Box>
          <img src={IconBoxNew} alt="Icon Box" />
          <p>Neue Kiste</p>
        </Box>
      </Link>
      {boxes?.map((box) => (
        <Link key={box.id} to={`/box/${box.title}`}>
          <Box key={box.id} existing>
            <img src={IconBoxOld} alt="Icon Box" />
            <p>{box.title}</p>
          </Box>
        </Link>
      ))}
    </Container>
  );
}
