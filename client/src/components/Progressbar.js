import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import IconTrophy from "../assets/icon-trophy-action.svg";

const Container = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;

const CircleSvg = styled.svg`
  position: relative;
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
  height: 40px;
  position: absolute;
  top: 30px;
  left: 30px;
`;

const Progressbar = ({ size, progress, strokeWidth }) => {
  const [offset, setOffset] = useState(0);
  const circleRef = useRef(null);

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
  size: PropTypes.number,
  progress: PropTypes.number,
  strokeWidth: PropTypes.number,
};
