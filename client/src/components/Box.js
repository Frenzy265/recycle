import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Box = styled.button`
  background-color: ${(props) =>
    props.existing ? "var(--action-color)" : "var(--noaction-color)"};
  color: var(--secondary-color);
  height: 130px;
  width: 130px;
  border-radius: 7px;
  border: none;
  box-shadow: var(--default-box-shadow);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 44px;
    width: 60px;
    margin-top: 10px;
  }

  p {
    margin-bottom: 10px;
    margin-top: 5px;
  }
`;

Box.propTypes = {
  existing: PropTypes.bool,
};

export default Box;
