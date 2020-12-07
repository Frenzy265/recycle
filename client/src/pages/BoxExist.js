import { List } from "../components/ListItem";
import IconRecycle from "../assets/icon-recycle-primary.svg";
import { FormInput } from "../components/Form";
import IconAdd from "../assets/icon-add-primary.svg";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { deleteBoxById, getBoxByTitle } from "../utils/api-boxes";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components/macro";
import Header from "../components/Header";

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
`;

export default function BoxExist() {
  const [box, setBox] = useState({});
  const { title } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const existBox = await getBoxByTitle(title);
      setBox(existBox);
    }
    fetchData();
  }, [title]);

  const handleDelete = async () => {
    await deleteBoxById(box.id);
    history.push("/box");
  };

  return (
    <>
      <Header>{box.title}</Header>
      <FormInput title="Neuer Eintrag" icon={IconAdd} alt="Icon add" />
      <ListContainer>
        {box.items?.map((item) => (
          <List
            key={item}
            item={item}
            icon={IconRecycle}
            alt={"Icon Recycle"}
          />
        ))}
      </ListContainer>
      <Button onClick={handleDelete}>
        <p>Kiste erfolgreich recycled</p>
        <img src={IconRecycle} alt="Icon recycle" />
      </Button>
    </>
  );
}
