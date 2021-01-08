import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { BasicStyle } from "../globalstyle";
import { deleteBoxByTitle } from "../api/boxes";
import { useHistory } from "react-router-dom";

const ModalContainer = styled.div`
  position: absolute;
  left: 48.4%;
  top: 50%;
  transform: translate(-50%, -50%);
  ${BasicStyle};
  flex-direction: column;
  width: 300px;
  height: 300px;
  background-color: var(--tertiary-color);
  color: var(--primary-color);
  margin: 10px;

  p {
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    ${BasicStyle};
    background-color: var(--action-color);
    color: var(--primary-color);
    font-size: 1rem;
    width: 120px;
    height: 40px;
    text-align: center;
  }
`;

export const Modal = ({ boxtitle, closeModal }) => {
  const history = useHistory();

  const handleDeleteBox = async () => {
    await deleteBoxByTitle(boxtitle);
    history.push("/box");
  };

  return (
    <>
      <ModalContainer>
        <h2>Box schließen</h2>
        <p>
          Möchtest du die Box {boxtitle} wirklich schließen und alle darin
          enthaltenen Einträge löschen?
        </p>
        <ButtonContainer>
          <button onClick={handleDeleteBox}>Schließen</button>
          <button onClick={() => closeModal()}>Behalten</button>
        </ButtonContainer>
      </ModalContainer>
    </>
  );
};

Modal.propTypes = {
  boxtitle: PropTypes.string.isRequired,
  closeModal: PropTypes.func,
};
