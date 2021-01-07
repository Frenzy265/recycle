import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components/macro";
import IconTrophy from "../assets/icon-trophy-action.svg";
import PropTypes from "prop-types";

const Container = styled.div`
  position: relative;
  justify-self: center;
  width: 70px;
  height: 70px;
`;

const CircleSvg = styled.svg`
  position: relative;
  width: 70px;
  height: 70px;
`;

const CircleBack = styled.circle`
  fill: none;
  stroke: #fff;
`;

const CircleFront = styled.circle`
  fill: none;
  stroke: var(--action-color);
`;

const Image = styled.img`
  height: 30px;
  position: absolute;
  top: 20px;
  left: 15px;
`;

const Progressbar = ({ progress }) => {
  const [offset, setOffset] = useState(0);
  const circleRef = useRef(null);

  //   const progress = 75;
  const size = 70;
  const strokeWidth = 8;

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = Math.round(2 * Math.PI * radius);

  useEffect(() => {
    const progressOffset = Math.round(((100 - progress) / 100) * circumference);
    setOffset(progressOffset);
    circleRef.current.style =
      "transition: stroke-dashoffset 1000ms ease-in-out;";
  }, [setOffset, circumference, progress, offset]);

  return (
    <Container>
      <CircleSvg>
        <CircleBack
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
        ></CircleBack>
        <CircleFront
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          ref={circleRef}
          strokeDashoffset={offset}
        ></CircleFront>
      </CircleSvg>
      <Image src={IconTrophy} alt="Icon Trophy" />
    </Container>
  );
};

export default Progressbar;

Progressbar.propTypes = {
  progress: PropTypes.number.isRequired,
};
