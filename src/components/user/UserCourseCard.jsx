import React from 'react';
import style from '../../css/user/UserProfile.module.css';

const UserCourseCard = ({ course }) => {
  console.log(course);
  return course !== null ? (
    <div className={style.profile_course}>
      <div className={style.card}>
        <div className={style.cardimg}>
          <img src={`/course/image/${course._id}`} />
        </div>
        <div className={style.card_body}>
          <h3 className={style.cardTitle}>{course.name}</h3>
          <p className={style.cardtext}>{course.description}</p>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
};

export default UserCourseCard;
