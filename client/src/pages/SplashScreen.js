import Banane from "../assets/banane_cut.jpg";
import styled from "styled-components/macro";

const SplashContainer = styled.div`
  display: grid;
  place-items: center;
  height: 90vh;

  img {
    height: 70vh;
  }
`;

export default function SplashScreen() {
  return (
    <>
      <SplashContainer>
        <img src={Banane} alt="Start with Banane" />
      </SplashContainer>
    </>
  );
}
