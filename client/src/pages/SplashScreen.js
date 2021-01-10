import Banane from "../assets/banane-transparent.png";
import Typo from "../assets/typo-transparent.png";
import styled from "styled-components/macro";

const SplashContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-left: 20px;

  img {
    height: 50vh;
    padding-top: 80px;
    padding-bottom: 20px;
  }
`;
const Animation = styled.img`
  height: 30vh;
  animation: wobble 0.6s 2;
  animation-delay: 1s;

  @keyframes wobble {
    25% {
      transform: rotate(15deg);
    }
    50% {
      transform: rotate(-30deg);
    }
    75% {
      transform: rotate(5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export default function SplashScreen() {
  return (
    <>
      <SplashContainer>
        <img src={Typo} alt="Claim" />
      </SplashContainer>
      <Animation src={Banane} alt="Banane" />
    </>
  );
}
