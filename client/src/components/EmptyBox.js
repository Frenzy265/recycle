import styled from "styled-components/macro";

const Box = styled.div`
  max-width: 800px;
  background: none;
  color: var(--tertiary-color);
  text-align: center;
  margin: 30px;
`;

export const EmptyBox = () => {
  return (
    <>
      <Box>
        Du hast noch keine Sammelbox erstellt. Benötigst du Inspiration? Sammle
        ungenutze Dinge für ebay, Wertstoffhof, Kleidercontainer, Flohmarkt oder
        um sie zu verschenken.
      </Box>
    </>
  );
};
