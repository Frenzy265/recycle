import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { BasicStyle, BasicSize } from "../globalstyle";
import IconFilter from "../assets/icon-filter-primary.svg";

const Container = styled.div`
  ${BasicStyle};
  ${BasicSize};
  background-color: var(--action-color);
  color: var(--primary-color);
  justify-content: space-between;
  max-width: 300px;
  margin: 0.1rem 0;

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
  margin-left: 6px;
`;

export const Searchfield = ({ title, value, onChange }) => {
  return (
    <Container>
      <img src={IconFilter} alt="Icon Filter" />
      <Input
        value={value}
        onChange={onChange}
        type="search"
        placeholder={title}
        size="28"
      />
    </Container>
  );
};

Searchfield.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
