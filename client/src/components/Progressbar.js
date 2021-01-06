import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components/macro";
import IconTrophy from "../assets/icon-trophy-action.svg";
import PropTypes from "prop-types";

const Container = styled.div`
  position: relative;
  width: 75px;
  height: 75px;
`;

const CircleSvg = styled.svg`
  position: relative;
  width: 80px;
  height: 80px;
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
  top: 25px;
  left: 20px;
`;

const Progressbar = ({ progress }) => {
  const [offset, setOffset] = useState(0);
  const circleRef = useRef(null);

  //   const progress = 75;
  const size = 80;
  const strokeWidth = 8;

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
    circleRef.current.style =
      "transition: stroke-dashoffset 850ms ease-in-out;";
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
