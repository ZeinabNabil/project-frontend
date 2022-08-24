import React from "react";
import style from "../../css/AboutUs/Aboutus.module.css";
import { Carousel } from "@trendyol-js/react-carousel";

const Clients = ({ imgSrc }) => {
  return (
    <div className={style.Clients}>
      <div className={style.img_client}>
        <img src={imgSrc} alt="client img" />
      </div>
    </div>
  );
};

export default Clients;
