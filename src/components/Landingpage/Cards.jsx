import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import style from "../../css/Landing/Cards.module.css";

const Cards = ({icon,title,text}) => {
  return (
      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
      <div className={`card ${style.card}`}>
      <div className={style.cardicon}>
        <FontAwesomeIcon
          icon={icon}
          style={{ fontSize: "50px", color: "#3C99DC" }}
        />
      </div>
      <div className="card-body">
      <h5 className={style.title}>{title}</h5>
      <p>{text}</p>
      </div>
    </div>
</div>
  );
};

export default Cards;
