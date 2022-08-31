import React from 'react';
import '../../css/App.css';
import style from '../../css/Landing/Landing.module.css';

const ReviewsCard = ({ review, key }) => {
  return (
    <div className={style.teamitem}>
      <div className={style.teamcontent}>
        <p className={style.text}>{review.review}</p>
        <div className={style.teaminfo}>
          <h3 className={style.username}>{review.userId.name}</h3>
          <span>{review.trainee}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
