import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Form = styled.form`
  background-color: var(--action-color);
  color: var(--main-color);
  height: 50px;
  min-width: 300px;
  max-width: 80vw;
  border-radius: 7px;
  border: none;
  box-shadow: var(--default-box-shadow);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0;
`;

const Input = styled.input`
  background-color: var(--action-color);
  color: var(--main-color);
  border: none;

  ::placeholder {
    color: var(--secondary-color);
  }
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

export const Inputfield = ({ title, icon, alt }) => {
  return (
    <Form>
      <Input placeholder={title} size="30" />
      <ButtonIcon type="submit">
        <img src={icon} alt={alt} />
      </ButtonIcon>
    </Form>
  );
};

Inputfield.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any,
  alt: PropTypes.string.isRequired,
};
