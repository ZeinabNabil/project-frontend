import React from 'react';
import style from '../../css/Layout/Landing.module.css';

const CoursesCard = (props) => {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <img src={`/course/image/${props.id}`} />
      </div>
      <div className={style.card_body}>
        <h5 className={style.cardtitle}>{props.title}</h5>
        <span className={style.text}>{props.text}</span>
        <div className={style.cardbtns}>
          <a href="#" className="btn btn-primary 1">
            Read More
          </a>
          <a href="#" className="btn btn-primary 2">
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
