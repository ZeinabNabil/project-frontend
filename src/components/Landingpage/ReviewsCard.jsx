import React from 'react';
import '../../css/App.css';
import style from '../../css/Landing/Landing.module.css';

const ReviewsCard = (props) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className={style.teamitem}>
        <div className={style.teamcontent}>
          <p className={style.text}>{props.text}</p>
          {/* <img src={props.img} className={style.userimg}></img> */}
          <div className={style.teaminfo}>
            <h3 className={style.username}>{props.username}</h3>
            <span>{props.role}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
