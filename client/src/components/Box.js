import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { BasicStyle } from "../globalstyle";

const Box = styled.button`
  ${BasicStyle};
  background-color: ${(props) =>
    props.existing ? "var(--secondary-color)" : "var(--action-color)"};
  color: var(--primary-color);
  height: 110px;
  width: 110px;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;

  img {
    height: 44px;
    width: 60px;
    margin-top: 10px;
  }

  p {
    margin-bottom: 10px;
    margin-top: 5px;
    font-size: 14px;
  }
`;

Box.propTypes = {
  existing: PropTypes.bool,
};

export default Box;
