import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { BasicStyle } from "../globalstyle";

const Box = styled.button`
  ${BasicStyle};
  background-color: ${(props) =>
    props.existing ? "var(--secondary-color)" : "var(--action-color)"};
  color: var(--primary-color);
  height: 130px;
  width: 130px;
  flex-direction: column;
  justify-content: center;

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
