import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { BasicStyle, BasicSize } from "../globalstyle";

const ListItem = styled.li`
  ${BasicStyle};
  ${BasicSize};
  background-color: var(--secondary-color);
  color: var(--primary-color);
  justify-content: space-between;
  max-width: 300px;
  margin: 0.1rem 0;
`;

const Button = styled.button`
  border: none;
  height: 20px;
  width: 20px;
  align-items: center;
  display: flex;
  background: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const List = ({ item, icon, alt, onClick }) => {
  return (
    <ListItem>
      {item}
      <Button onClick={onClick}>
        <img src={icon} alt={alt} />
      </Button>
    </ListItem>
  );
};

List.propTypes = {
  item: PropTypes.string.isRequired,
  icon: PropTypes.any,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
