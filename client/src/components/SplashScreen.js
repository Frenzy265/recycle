import Banane from "../assets/start-banane.jpg";
import styled from "styled-components/macro";

const Starter = styled.img`
  width: 100%;
`;

export default function SplashScreen() {
  return (
    <>
      <Starter src={Banane} alt="Start with Banane" />
    </>
  );
}
