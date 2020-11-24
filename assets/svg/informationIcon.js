/* eslint-disable react/prop-types */
import React from 'react';

const InformationIcon = ({
  width,
  height,
  stroke,
  backgroundFill,
  viewBox,
}) => {
  return (
    <svg
      width={width || '30'}
      height={height || '30'}
      viewBox={viewBox || '0 0 30 30'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="15"
        cy="15"
        r="14"
        stroke={stroke || 'white'}
        strokeWidth="2"
        fill={backgroundFill || ''}
      />
      <path d="M15 12V23" stroke={stroke || 'white'} strokeWidth="3" />
      <path
        d="M16.5 8.5C16.5 9.32843 15.8284 10 15 10C14.1716 10 13.5 9.32843 13.5 8.5C13.5 7.67157 14.1716 7 15 7C15.8284 7 16.5 7.67157 16.5 8.5Z"
        fill={stroke || 'white'}
      />
    </svg>
  );
};

export default InformationIcon;
