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
import IconMinus from "../assets/icon-minus-action.svg";
import { deleteItemByName } from "../api/boxes";

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
`;

export default function BoxExist() {
  const [box, setBox] = useState({});
  const [newItem, setNewItem] = useState("");
  const { title } = useParams();
  const history = useHistory();
  // const [delItem, setDelItem] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const boxDetails = await getBoxByTitle(title);
      setBox(boxDetails);
    }
    fetchData();
  }, [title, newItem, box.items]);

  const handleDeleteItem = async (item) => {
    console.log(item);
    await deleteItemByName(box.title, item);
  };

  const handleDeleteBox = async () => {
    await deleteBoxByTitle(box.title);
    history.push("/box");
  };

  const handleSubmitItem = async (event) => {
    event.preventDefault();
    await addItemByTitle(newItem, box.title);
    setNewItem("");
  };

  return (
    <>
      <Header title={box.title} />
      <FormInput
        onSubmit={handleSubmitItem}
        title="Neuer Eintrag"
        icon={IconAdd}
        alt="Icon add"
        value={newItem}
        onChange={(event) => setNewItem(event.target.value)}
      />
      <ListContainer>
        {box.items?.map((item) => (
          <List
            key={item}
            item={item}
            icon={IconMinus}
            alt={"Icon Delete"}
            onClick={() => handleDeleteItem(item)}
          />
        ))}
      </ListContainer>
      <Button onClick={handleDeleteBox}>
        <p>Kiste erfolgreich recycled</p>
        <img src={IconRecycle} alt="Icon recycle" />
      </Button>
    </>
  );
}
