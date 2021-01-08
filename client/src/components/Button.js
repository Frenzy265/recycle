import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { BasicStyle } from "../globalstyle";

const Button = styled.button`
  ${BasicStyle};
  width: ${(props) => (props.regular ? "300px" : "145px")};
  height: 50px;
  background-color: ${(props) =>
    props.active ? "var(--action-color)" : "var(--tertiary-color)"};
  color: var(--primary-color);
  text-align: left;
  justify-content: space-between;

  img {
    width: 20px;
  }
`;

Button.propTypes = {
  active: PropTypes.bool,
  regular: PropTypes.bool,
};

export default Button;
