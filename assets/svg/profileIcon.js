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
      width={width ? width : '50'}
      height={height ? height : '50'}
      viewBox={viewBox ? viewBox : '0 0 50 50'}
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
          r="24"
          stroke={borderStroke ? borderStroke : 'black'}
          strokeWidth="3"
          fill={backgroundFill}
        />
        <circle
          cx="25"
          cy="48"
          r="18"
          stroke={borderStroke ? borderStroke : 'black'}
          strokeWidth="3"
        />
        <circle
          cx="24.5"
          cy="17.5"
          r="7.5"
          stroke={borderStroke ? borderStroke : 'black'}
          strokeWidth="3"
        />
      </g>
    </svg>
  );
};

export default ProfileIcon;
