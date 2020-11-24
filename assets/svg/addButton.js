/* eslint-disable react/prop-types */
import React from 'react';

const AddButton = ({ width, height, stroke, backgroundFill, viewBox }) => {
  return (
    <svg
      width={width || '48'}
      height={height || '48'}
      viewBox={viewBox || '0 0 48 48'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="24" fill={backgroundFill || 'black'} />
      <path
        d="M14 24H33.8"
        stroke={stroke || 'white'}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 14V34"
        stroke={stroke || 'white'}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default AddButton;
