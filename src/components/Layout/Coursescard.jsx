import React from "react";
import style from "../../css/Layout/Landing.module.css";


const CoursesCard = (props) => {
  return (
    <div className={style.card}>
      {/* <img src={props.img} /> */}
      <div class={style.card_body}>
        <h5 class={style.cardtitle}>{props.title}</h5>
        <p class={style.text}>{props.text}</p>
        <div className={style.cardbtns}>
          <a href="#" class="btn btn-primary 1">
            Read More
          </a>
          <a href="#" class="btn btn-primary 2">
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
