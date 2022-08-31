import React from 'react';
import style from '../../css/Layout/Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TopbarContent = ({ text, className, icon }) => {
  return (
    <div className={className}>
      <span>
        <FontAwesomeIcon className={style.icon} icon={icon} />
        {text}
      </span>
    </div>
  );
};

export default TopbarContent;
