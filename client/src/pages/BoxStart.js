import Box from "../components/Box";
import IconBoxOld from "../assets/icon-box-primary.svg";
import IconBoxNew from "../assets/icon-box-new-primary.svg";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { getBoxes } from "../api/boxes";
import { useEffect, useState } from "react";
import Header from "../components/Header";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 800px;
`;

export default function BoxStart() {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    let mounted = true;

    async function fetchData() {
      const newBoxes = await getBoxes();
      if (mounted) {
        setBoxes(newBoxes);
      }
    }
    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <Header>Sammelboxen</Header>
      <Container>
        <Link to="/box/new">
          <Box>
            <img src={IconBoxNew} alt="Icon Box" />
            <p>Neue Box</p>
          </Box>
        </Link>
        {boxes?.map((box) => (
          <Link key={box._id} to={`/box/${box.title}`}>
            <Box key={box._id} existing>
              <img src={IconBoxOld} alt="Icon Box" />
              <p>{box.title}</p>
            </Box>
          </Link>
        ))}
      </Container>
    </>
  );
}
