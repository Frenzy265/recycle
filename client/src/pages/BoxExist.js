import { List } from "../components/ListItem";
import IconRecycle from "../assets/icon-recycle-primary.svg";
import { FormInput } from "../components/Form";
import IconAdd from "../assets/icon-add-primary.svg";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components/macro";
import IconMinus from "../assets/icon-minus-action.svg";
import { HeaderBackButton } from "../components/HeaderBackButton";
import { Modal } from "../components/Modal";
import { getBoxByTitle, setItemByTitle } from "../indexedDB/boxes";

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

export default function BoxExist() {
  const [box, setBox] = useState({});
  const [newItem, setNewItem] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const { title } = useParams();

  useEffect(() => {
    let mounted = true;

    async function fetchData() {
      const boxDetails = await getBoxByTitle(title);

      if (mounted) {
        setBox(boxDetails);
      }
    }
    fetchData();
    return () => {
      mounted = false;
    };
  }, [title, newItem]);

  const handleDeleteItem = async (item) => {
    const deletedItem = box.items.indexOf(item);
    const allItems = box.items;
    allItems.splice(deletedItem, 1);
    setItemByTitle(title, allItems);
  };

  const handleSubmitItem = (event) => {
    event.preventDefault();
    const allItems = box.items;
    allItems.push(newItem);
    setItemByTitle(title, allItems);
    setNewItem("");
  };

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <>
      <HeaderBackButton headline={box.title}></HeaderBackButton>
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
      <ButtonContainer>
        <FormInput
          onSubmit={handleSubmitItem}
          title="Hinzufügen"
          icon={IconAdd}
          alt="Icon add"
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
        />
        <Button active onClick={() => setModalOpen(true)}>
          <p>Schließen</p>
          <img src={IconRecycle} alt="Icon recycle" />
        </Button>
      </ButtonContainer>
      {modalOpen && <Modal boxtitle={box.title} closeModal={closeModal} />}
    </>
  );
}
