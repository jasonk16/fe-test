import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../assets/loading.json';

const LoadingAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <div className="d-flex flex-column m-3 pt-5 text-center">
        <Lottie options={defaultOptions} height={300} width={300} />
        <h2 className="pt-5">Fetching your accounts...</h2>
      </div>
    </>
  );
};

export default LoadingAnimation;
