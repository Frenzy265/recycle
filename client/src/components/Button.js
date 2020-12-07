import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { BasicStyle, BasicSize } from "../globalstyle";

const Button = styled.button`
  ${BasicStyle};
  ${BasicSize};
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
};

export default Button;
