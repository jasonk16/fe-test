import React from 'react';
import PropTypes from 'prop-types';

const ProfileIcon = ({
  width,
  height,
  backgroundFill,
  strokeFill,
  viewBox,
}) => {
  return (
    <svg
      width={width || '50'}
      height={height || '50'}
      viewBox={viewBox || '0 0 50 50'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="25"
        cy="25"
        r="23.5"
        fill={backgroundFill || 'white'}
        stroke={strokeFill || 'black'}
        strokeWidth="3"
      />
      <circle
        cx="24.5"
        cy="18.5"
        r="7"
        stroke={strokeFill || 'black'}
        strokeWidth="3"
      />
      <path
        d="M9.5 41.9999C16.5 24.9999 36 28.5 40.5 41.9999"
        stroke={strokeFill || 'black'}
        strokeWidth="3"
      />
    </svg>
  );
};

ProfileIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  strokeFill: PropTypes.string,
  viewBox: PropTypes.string,
  backgroundFill: PropTypes.string,
};

ProfileIcon.defaultProps = {
  width: undefined,
  height: undefined,
  strokeFill: undefined,
  viewBox: undefined,
  backgroundFill: undefined,
};

export default ProfileIcon;
