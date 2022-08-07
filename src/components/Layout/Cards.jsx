import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import style from "../../css/Layout/Landing.module.css";

const Cards = (props) => {
  return (
    <div>
      <div className={style.cardicon}>
        <FontAwesomeIcon
          icon={props.icon}
          style={{ fontSize: "50px", color: "#3C99DC" }}
        />
      </div>
      <h5 className={style.title}>{props.title}</h5>
      <p>{props.text}</p>
    </div>
  );
};

export default Cards;
