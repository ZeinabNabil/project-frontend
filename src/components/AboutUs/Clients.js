import React from 'react';
import style from '../../css/AboutUs/Aboutus.module.css';

const Clients = ({ imgSrc, name }) => {
  return (
    <div className={style.Clients}>
      <div className={style.img_client}>
        <img
          src={imgSrc}
          alt="client img"
          style={{
            height: '150px',
            width: '80%',
          }}
        />
        <p className="text-center">{name}</p>
      </div>
    </div>
  );
};

export default Clients;
