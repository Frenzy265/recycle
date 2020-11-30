import styled from "styled-components/macro";
import PropTypes from "prop-types";

const ListItem = styled.li`
  background-color: var(--secondary-color);
  color: var(--primary-color);
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

export const List = ({ item, icon, alt }) => {
  return (
    <ListItem>
      {item}
      <img src={icon} alt={alt} />
    </ListItem>
  );
};

List.propTypes = {
  item: PropTypes.string.isRequired,
  icon: PropTypes.any,
  alt: PropTypes.string.isRequired,
};
