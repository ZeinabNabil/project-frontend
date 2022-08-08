import React from 'react';
import Landing from './Landing';
import style from '../../css/Layout/Landing.module.css';

const Homepage = () => {
  return (
    <div
      className={style.Homepage}
      style={{ backgroundColor: 'rgba(128, 128, 128, 0.092)' }}
    >
      <Landing />
    </div>
  );
};

export default Homepage;
