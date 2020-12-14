import styled from "styled-components/macro";
import { BasicStyle, BasicSize } from "../globalstyle";

const Card = styled.div`
  ${BasicStyle};
  ${BasicSize};
  background-color: var(--secondary-color);
  color: var(--main-colorr);

  img {
    height: 70px;
    width: 70px;
  }

  p {
    text-align: left;
  }
`;

export default Card;
