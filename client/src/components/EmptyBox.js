import styled from "styled-components/macro";

const Box = styled.div`
  width: 300px;
  max-width: 80%;
  background: none;
  color: var(--tertiary-color);
  margin-top: 30px;
  text-align: center;
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
