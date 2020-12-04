import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { BasicStyle, BasicSize } from "../globalstyle";

const Input = styled.input`
  ${BasicStyle};
  ${BasicSize};
  background-color: var(--action-color);
  color: var(--primary-color);
  justify-content: space-around;
  margin: 8px 0;

  ::placeholder {
    color: var(--primary-color);
  }

  img {
    height: 20px;
    width: 20px;
  }
`;

export const InputField = ({ title }) => {
  return <Input type="text" placeholder={title} size="29" />;
};

InputField.propTypes = {
  title: PropTypes.string.isRequired,
};
