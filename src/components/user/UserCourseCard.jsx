import React from 'react';
import style from '../../css/user/UserProfile.module.css';
import { Link } from 'react-router-dom';

const UserCourseCard = ({ course, onCancelClick }) => {
  return course !== null ? (
    <div className={style.profile_course}>
      <div className={style.card}>
        <Link to={`/readmore/${course._id}`}>
          <div className={style.cardimg}>
            <img src={`/course/image/${course._id}`} />
          </div>
          <div className={style.card_body}>
            <h3 className={style.cardTitle}>{course.name}</h3>
            <p className={style.cardtext}>{course.description}</p>
          </div>
        </Link>
        <div className={style.cancel}>
          <button
            className="btn btn-danger"
            onClick={() => onCancelClick(course._id)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
};

export default UserCourseCard;
