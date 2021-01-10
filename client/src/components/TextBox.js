import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Box = styled.div`
  background-color: var(--tertiary-color);
  border-radius: 7px;
  border: none;
  box-shadow: var(--default-box-shadow);
  min-width: 300px;
  max-width: 80%;
  padding: 5px 20px;

  p {
    color: var(--primary-color);
  }

  h2 {
    display: flex;
    align-items: center;
  }

  img {
    height: 20px;
    width: 20px;
    margin-right: 10px;
  }
`;

export const TextBox = ({ icon, alt, headline, text }) => {
  return (
    <Box>
      <h2>
        <img src={icon} alt={alt} />
        {headline}
      </h2>
      <p>{text}</p>
    </Box>
  );
};

TextBox.propTypes = {
  icon: PropTypes.any,
  alt: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
