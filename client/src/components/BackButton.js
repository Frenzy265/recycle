import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import arrowBack from "../assets/icon-arrow-back-action.svg";

const Button = styled.button`
  border: none;
  background-color: var(--primary-color);

  img {
    object-fit: contain;
  }
`;

export const BackButton = () => {
  const history = useHistory();
  return (
    <>
      <Button onClick={() => history.goBack()}>
        <img src={arrowBack} alt="Arrow Back" />
      </Button>
    </>
  );
};
