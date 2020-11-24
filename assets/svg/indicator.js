/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';

const Indicator = ({
  width,
  height,
  backgroundFill,
  iconColour,
  viewBox,
  active,
}) => {
  const svgVariant = {
    notActive: { stroke: '#828282', transition: { duration: 0.7 } },
    active: { stroke: '#5154e1', transition: { duration: 0.7 } },
  };

  return (
    <motion.svg
      width={width || '48'}
      height={height || '42'}
      viewBox={viewBox || '0 0 48 42'}
      fill={backgroundFill || 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        cx="23.5"
        cy="14.5"
        r="13"
        stroke={iconColour || '#828282'}
        strokeWidth={active ? '2' : '1'}
        variants={svgVariant}
        animate={active ? 'active' : 'notActive'}
      />
      <motion.line
        x1="1.5"
        y1="38.5"
        x2="46.5"
        y2="38.5"
        r="14"
        stroke={iconColour || '#828282'}
        strokeWidth="3"
        strokeLinecap="round"
        variants={svgVariant}
        animate={active ? 'active' : 'notActive'}
      />
    </motion.svg>
  );
};

export default Indicator;
