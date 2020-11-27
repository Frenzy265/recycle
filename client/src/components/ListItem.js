import styled from "styled-components/macro";
import PropTypes from "prop-types";

const ListItem = styled.li`
  background-color: var(--noaction-color);
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

  img {
    height: 20px;
    width: 20px;
  }
`;

export const ListItems = ({ item, icon, alt }) => {
  return (
    <ListItem>
      {item}
      <img src={icon} alt={alt} />
    </ListItem>
  );
};

ListItems.propTypes = {
  item: PropTypes.string.isRequired,
  icon: PropTypes.any,
  alt: PropTypes.string.isRequired,
};
