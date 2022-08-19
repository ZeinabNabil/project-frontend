import React from 'react';
import style from '../../css/Layout/LandingPicArea.module.css';

const LandingPicArea = ({ header, text }) => {
  return (
    <div className={style.landingArea}>
      <div className={style.landing_header}>
        <div className="container">
          <div className="row">
            <div className=" col-lg-12 col-md-12 col-sm-12">
              <h1>{header}</h1>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPicArea;
