import styled from "styled-components/macro";
import PropTypes from "prop-types";
import Progressbar from "./Progressbar";

const Container = styled.div`
  align-items: center;
  border-radius: 7px;
  border: none;
  box-shadow: var(--default-box-shadow);
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 0 20px;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  align-items: center;
  min-height: 110px;
  width: 80vw;
  padding: 20px;
  font-size: 14px;

  img {
    width: 40px;
    justify-self: center;
  }
`;

const Textbox = styled.div`
  margin-right: 10px;

  p {
    margin: 0px;
  }

  h2 {
    margin: 0;
    text-transform: uppercase;
  }
`;

export const CardDefault = ({ title, infoOne, infoTwo, icon, alt }) => {
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

export const CardProgress = ({ title, infoOne, infoTwo, progress }) => {
  return (
    <Container>
      <Textbox>
        <h2>{title}</h2>
        <p>{infoOne}</p>
        <p>{infoTwo}</p>
      </Textbox>
      <Progressbar progress={progress} />
    </Container>
  );
};

CardDefault.propTypes = {
  icon: PropTypes.any,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  infoOne: PropTypes.string.isRequired,
  infoTwo: PropTypes.string,
};

CardProgress.propTypes = {
  icon: PropTypes.any,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  infoOne: PropTypes.string.isRequired,
  infoTwo: PropTypes.string,
  progress: PropTypes.number.isRequired,
};
