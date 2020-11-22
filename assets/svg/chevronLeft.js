import React from 'react';

const ProfileIcon = ({
  width,
  height,
  borderStroke,
  viewBox,
}) => {
  return (
    <svg
      width={width ? width : '21'}
      height={height ? height : '36'}
      viewBox={viewBox ? viewBox : '0 0 21 36'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.1487 3.14856L3.00017 18"
        stroke={borderStroke ? borderStroke : '#ffffff'}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M3.00017 18L18.1487 32.8514"
        stroke={borderStroke ? borderStroke : '#ffffff'}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ProfileIcon;
