import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { BasicStyle } from "../globalstyle";

const Form = styled.form`
  ${BasicStyle};
  width: ${(props) => (props.regular ? "300px" : "145px")};
  height: 50px;
  background-color: var(--action-color);
  color: var(--primary-color);
  justify-content: space-around;
`;

const Input = styled.input`
  background-color: var(--action-color);
  color: var(--primary-color);
  border: none;
  outline: none;
`;

const ButtonIcon = styled.button`
  background-color: var(--action-color);
  height: 20px;
  width: 20px;
  border: none;

  img {
    height: 20px;
    width: 20px;
  }
`;

export const FormInput = ({
  value,
  title,
  icon,
  alt,
  onSubmit,
  onChange,
  regular,
}) => {
  return (
    <Form regular={regular} onSubmit={onSubmit}>
      <Input value={value} onChange={onChange} placeholder={title} size="10" />
      <ButtonIcon type="submit">
        <img src={icon} alt={alt} />
      </ButtonIcon>
    </Form>
  );
};

FormInput.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.any,
  alt: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  regular: PropTypes.bool,
};
