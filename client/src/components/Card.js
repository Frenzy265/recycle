import styled from "styled-components/macro";
import { BasicStyle } from "../globalstyle";
import PropTypes from "prop-types";

const Container = styled.div`
  ${BasicStyle};
  background-color: var(--secondary-color);
  color: var(--primary-color);
  align-items: center;
  justify-content: space-between;
  min-height: 110px;
  width: 80vw;
  padding: 0 20px;
  font-size: 14px;

  img {
    width: 40px;
    margin-left: 10px;
  }
`;

const Textbox = styled.div`
  p {
    margin: 0px;
  }

  h2 {
    margin: 0;
    text-transform: uppercase;
  }
`;

export const Card = ({ title, infoOne, infoTwo, icon, alt }) => {
  return (
    <>
      <Container>
        <Textbox>
          <h2>{title}</h2>
          <p>{infoOne}</p>
          <p>{infoTwo}</p>
        </Textbox>
        <img src={icon} alt={alt} />
      </Container>
    </>
  );
};

Card.propTypes = {
  icon: PropTypes.any,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  infoOne: PropTypes.string.isRequired,
  infoTwo: PropTypes.string,
};
