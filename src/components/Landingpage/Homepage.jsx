import React, { useEffect } from 'react';
import Landing from './Landing';
import style from '../../css/Landing/Landing.module.css';
import Login from './../Authentication/Login';

const Homepage = () => {
  useEffect(() => {}, []);
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
