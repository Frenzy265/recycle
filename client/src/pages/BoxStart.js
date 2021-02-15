import { useQuery } from "react-query";
import Box from "../components/Box";
import IconBoxOld from "../assets/icon-box-primary.svg";
import IconBoxNew from "../assets/icon-box-new-primary.svg";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { EmptyBox } from "../components/EmptyBox";
import { getBoxes } from "../indexeddb";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 800px;
`;

export default function BoxStart() {
  const { data: boxes, status } = useQuery("allboxes", getBoxes);

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

        {status === "loading" && <div>Loading...</div>}
        {status === "error" && <div>Es ist ein Fehler aufgetreten</div>}
        {status === "success" && boxes.length === 0 && <EmptyBox />}

        {status === "success" &&
          boxes.map((box) => (
            <Link key={box.title} to={`/box/${box.title}`}>
              <Box key={box.title} existing>
                <img src={IconBoxOld} alt="Icon Box" />
                <p>{box.title}</p>
              </Box>
            </Link>
          ))}
      </Container>
    </>
  );
}
