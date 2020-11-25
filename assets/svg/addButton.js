import React from 'react';
import PropTypes from 'prop-types';

const AddButton = ({ width, height, strokeFill, backgroundFill, viewBox }) => {
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
        stroke={strokeFill || 'white'}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 14V34"
        stroke={strokeFill || 'white'}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

AddButton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  strokeFill: PropTypes.string,
  viewBox: PropTypes.string,
  backgroundFill: PropTypes.string,
};

AddButton.defaultProps = {
  width: undefined,
  height: undefined,
  strokeFill: undefined,
  viewBox: undefined,
  backgroundFill: undefined,
};

export default AddButton;
