import React from 'react';
import Landing from './components/Landingpage/Landing';
import style from './css/wave.module.css';
const Wave = () => {
  return (
    <div className={style.section}>
      <div className={`${style.wave}  ${style.wave1}`}></div>
      <div className={`${style.wave}  ${style.wave2}`}></div>
      <div className={`${style.wave}  ${style.wave3}`}></div>
      <div className={`${style.wave}  ${style.wave4}`}></div>
    </div>
  );
};

export default Wave;
