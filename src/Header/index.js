import React from 'react';

import ProfileIcon from '../../assets/svg/profileIcon';
import './header.scss';

const Header = () => {
  return (
    <div className="d-flex justify-content-end mt-4 header">
      <ProfileIcon width="40" height="40" backgroundFill="#ffffff" />
    </div>
  );
};

export default Header;
