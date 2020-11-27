import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Button = styled.button`
  background-color: ${(props) =>
    props.active ? "var(--action-color)" : "var(--secondary-color)"};
  color: var(--main-color);
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

  img {
    height: 20px;
    margin-right: 20px;
  }

  p {
    margin-left: 20px;
  }
`;

Button.propTypes = {
  active: PropTypes.bool,
};

export default Button;
