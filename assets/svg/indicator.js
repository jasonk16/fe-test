/* eslint-disable react/prop-types */
import React from 'react';

const Indicator = ({
  width,
  height,
  backgroundFill,
  circleStrokeWidth,
  iconColour,
  viewBox,
}) => {
  return (
    <svg
      width={width || '48'}
      height={height || '42'}
      viewBox={viewBox || '0 0 48 42'}
      fill={backgroundFill || 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="23.5"
        cy="14.5"
        r="13"
        stroke={iconColour || '#828282'}
        strokeWidth={circleStrokeWidth || '1'}
      />
      <line
        x1="1.5"
        y1="38.5"
        x2="46.5"
        y2="38.5"
        r="14"
        stroke={iconColour || '#828282'}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Indicator;
