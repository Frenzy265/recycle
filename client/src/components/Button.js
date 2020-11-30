import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Button = styled.button`
  background-color: ${(props) =>
    props.active ? "var(--action-color)" : "var(--tertiary-color)"};
  color: var(--primary-color);
  height: 50px;
  min-width: 300px;
  max-width: 80vw;
  border-radius: 7px;
  border: none;
  box-shadow: var(--default-box-shadow);
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px;

  img {
    height: 20px;
    margin-right: 20px;
  }

  p {
    margin-left: 20px;
    font-size: 16px;
  }
`;

Button.propTypes = {
  active: PropTypes.bool,
};

export default Button;
