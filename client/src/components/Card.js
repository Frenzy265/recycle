import styled from "styled-components/macro";
import PropTypes from "prop-types";
import Progressbar from "./Progressbar";
import IconTrophy from "../assets/icon-trophy-primary.svg";
import IconHook from "../assets/icon-hook-primary.svg";
import { useState } from "react";

const Container = styled.div`
  align-items: center;
  border-radius: 7px;
  border: none;
  box-shadow: var(--default-box-shadow);
  display: grid;
  grid-template-columns: 4fr 1fr;
  padding: 0 20px;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  align-items: center;
  min-height: 110px;
  width: 80vw;
  max-width: 800px;
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

const Button = styled.button`
  align-items: center;
  border-radius: 50%;
  border: none;
  box-shadow: var(--default-box-shadow);
  background-color: ${(props) =>
    props.done ? "var(--action-color)" : "var(--tertiary-color)"};
  color: var(--primary-color);
  height: 50px;
  width: 50px;
  justify-self: center;
  outline: none;
  transition: all 0.3s;

  img {
    height: 20px;
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

export const CardChallenge = ({ title, description }) => {
  const [doneStatus, setDoneStatus] = useState(
    JSON.parse(localStorage.getItem(title))
  );

  const togglStatus = () => {
    localStorage.setItem(title, !doneStatus);
    setDoneStatus(!doneStatus);
  };

  return (
    <Container done={JSON.parse(doneStatus)}>
      <Textbox>
        <h2>{title}</h2>
        <p>{description}</p>
      </Textbox>
      <Button onClick={togglStatus} done={JSON.parse(doneStatus)}>
        {JSON.parse(doneStatus) ? (
          <img src={IconTrophy} alt="Icon Trophy" />
        ) : (
          <img src={IconHook} alt="Icon hook" />
        )}
      </Button>
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
  title: PropTypes.string.isRequired,
  infoOne: PropTypes.string.isRequired,
  infoTwo: PropTypes.string,
  progress: PropTypes.number.isRequired,
};

CardChallenge.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};
