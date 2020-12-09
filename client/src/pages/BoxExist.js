import { List } from "../components/ListItem";
import IconRecycle from "../assets/icon-recycle-primary.svg";
import { FormInput } from "../components/Form";
import IconAdd from "../assets/icon-add-primary.svg";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { deleteBoxByTitle, getBoxByTitle, addItemByTitle } from "../api/boxes";
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
      const boxDetails = await getBoxByTitle(title);
      setBox(boxDetails);
    }
    fetchData();
  }, [title]);

  const handleDelete = async () => {
    await deleteBoxByTitle(box.title);
    history.push("/box");
  };

  const [item, setItem] = useState();

  const handleSubmitItem = async (event) => {
    event.preventDefault();
    await addItemByTitle([item, box.title]);
  };

  return (
    <>
      <Header>{box.title}</Header>
      <FormInput
        onSubmit={handleSubmitItem}
        title="Neuer Eintrag"
        icon={IconAdd}
        alt="Icon add"
        value={item}
        onChange={(event) => setItem(event.target.value)}
      />
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
