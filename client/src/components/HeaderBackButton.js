import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import arrowBack from "../assets/icon-arrow-back-action.svg";
import PropTypes from "prop-types";

const Header = styled.header`
  display: grid;
  font-family: var(--header-font);
  color: var(--action-color);
  place-items: center;
  min-height: 100px;
  font-size: 35px;
  word-wrap: break-word;
  line-height: 30px;
  text-align: center;
  justify-content: center;
  width: 100%;
  background-color: var(--primary-color);
  grid-template-columns: 10% 1fr 10%;
`;

const Button = styled.button`
  border: none;
  background-color: var(--primary-color);

  img {
    object-fit: contain;
  }
`;

export const HeaderBackButton = ({ headline }) => {
  const history = useHistory();
  return (
    <>
      <Header>
        <Button onClick={() => history.goBack()}>
          <img src={arrowBack} alt="Arrow Back" />
        </Button>
        {headline}
      </Header>
    </>
  );
};

HeaderBackButton.propTypes = {
  headline: PropTypes.string.isRequired,
};
