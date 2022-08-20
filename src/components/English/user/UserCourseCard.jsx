import React from 'react';
import style from '../../css/user/UserProfile.module.css';

const UserCourseCard = ({ course }) => {
  console.log(course);
  return course !== null ? (
    <div className={style.profile_course}>
      <div className={style.card}>
        <div className={style.cardimg}>
          <img src={`/course/image/${course.courseId._id}`} />
        </div>
        <div className={style.card_body}>
          <h3 className={style.cardTitle}>{course.courseId.name}</h3>
          <p className={style.cardtext}>{course.courseId.description}</p>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
};

export default UserCourseCard;
