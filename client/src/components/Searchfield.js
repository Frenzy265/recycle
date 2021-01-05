import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { BasicStyle, BasicSize } from "../globalstyle";
import IconFilter from "../assets/icon-filter-primary.svg";

const Container = styled.div`
  ${BasicStyle};
  ${BasicSize};
  background-color: var(--action-color);
  color: var(--primary-color);
  justify-content: space-around;
  margin: 8px 0;

  img {
    height: 20px;
    width: 20px;
  }
`;

const Input = styled.input`
  background-color: var(--action-color);
  color: var(--primary-color);
  border: none;
  outline: none;
`;

export const Searchfield = ({ title, value, onChange }) => {
  return (
    <Container>
      <Input
        value={value}
        onChange={onChange}
        type="text"
        placeholder={title}
        size="29"
      />
      <img src={IconFilter} alt="Icon Filter" />
    </Container>
  );
};

Searchfield.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
