import styled from "styled-components/macro";
import { BasicStyle } from "../globalstyle";
import PropTypes from "prop-types";

const Container = styled.div`
  ${BasicStyle};
  background-color: var(--secondary-color);
  color: var(--primary-color);
  min-height: 130px;
  width: 80vw;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.9rem;

  p {
    margin: 0;
    text-align: center;
  }
`;

const LabelContainer = styled.div`
  color: var(--primary-color);
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  width: 100%;
  font-size: 0.9rem;

  span {
    ${BasicStyle};
    background-color: var(--tertiary-color);
    text-transform: uppercase;
    height: 30px;
    width: 100px;
    justify-content: center;
  }

  button {
    ${BasicStyle};
    background-color: ${(props) =>
      props.done ? "var(--action-color)" : "var(--tertiary-color)"};
    color: var(--primary-color);
    text-transform: uppercase;
    height: 30px;
    width: 100px;
    font-size: 0.9rem;
    justify-content: center;
  }
`;

export const Task = ({ done, label, task }) => {
  return (
    <>
      <Container>
        <p>{task}</p>
        <LabelContainer done={done}>
          <button> {done ? "DONE" : "DO"}</button>
          <span>{label}</span>
        </LabelContainer>
      </Container>
    </>
  );
};

LabelContainer.propTypes = {
  done: PropTypes.bool,
};

Task.propTypes = {
  label: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  done: PropTypes.bool,
};
