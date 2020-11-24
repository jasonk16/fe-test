/* eslint-disable react/prop-types */
import React from 'react';

const ProfileIcon = ({
  width,
  height,
  backgroundFill,
  borderStroke,
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
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="50"
        height="50"
      >
        <circle cx="25" cy="25" r="25" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0)">
        <circle
          cx="25"
          cy="25"
          r="23.5"
          stroke={borderStroke || 'black'}
          strokeWidth="3"
          fill={backgroundFill}
        />
        <circle
          cx="25"
          cy="49"
          r="18.5"
          stroke={borderStroke || 'black'}
          strokeWidth="3"
        />
        <circle
          cx="24.5"
          cy="18.5"
          r="7"
          stroke={borderStroke || 'black'}
          strokeWidth="3"
        />
      </g>
    </svg>
  );
};

export default ProfileIcon;
