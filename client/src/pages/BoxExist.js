import { useMutation, useQuery, useQueryClient } from "react-query";
import { List } from "../components/ListItem";
import IconRecycle from "../assets/icon-recycle-primary.svg";
import { FormInput } from "../components/Form";
import IconAdd from "../assets/icon-add-primary.svg";
import Button from "../components/Button";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components/macro";
import IconMinus from "../assets/icon-minus-action.svg";
import { HeaderBackButton } from "../components/HeaderBackButton";
import { Modal } from "../components/Modal";
import { getBoxByTitle, setItemByTitle } from "../indexeddb";

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
  const { title } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [newItem, setNewItem] = useState("");
  const queryClient = useQueryClient();

  const { data: box, status } = useQuery(["boxbytitle", title], () =>
    getBoxByTitle(title)
  );

  const mutation = useMutation((allItems) => setItemByTitle(title, allItems), {
    onSuccess: () => queryClient.invalidateQueries("boxbytitle"),
  });

  const deleteItem = (item) => {
    const itemToDelete = box.items.indexOf(item);
    const allItems = box.items;
    allItems.splice(itemToDelete, 1);
    mutation.mutate(allItems);
  };

  const createItem = (event) => {
    event.preventDefault();
    const allItems = box.items;
    allItems.push(newItem);
    mutation.mutate(allItems);
    setNewItem("");
  };

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <>
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Es ist ein Fehler aufgetreten</div>}
      {status === "success" && (
        <>
          <HeaderBackButton headline={box.title}></HeaderBackButton>

          <ListContainer>
            {box.items?.map((item) => (
              <List
                key={item}
                item={item}
                icon={IconMinus}
                alt={"Icon Delete"}
                onClick={() => deleteItem(item)}
              />
            ))}
          </ListContainer>
          <ButtonContainer>
            <FormInput
              onSubmit={createItem}
              type="text"
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
      )}
    </>
  );
}
