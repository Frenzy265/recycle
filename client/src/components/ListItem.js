import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { BasicStyle, BasicSize } from "../globalstyle";

const ListItem = styled.li`
  ${BasicStyle};
  ${BasicSize};
  background-color: var(--secondary-color);
  color: var(--primary-color);
  justify-content: space-between;
  margin: 0.25rem auto;
  max-width: 300px;

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
