import React from 'react';
import style from '../../css/course/CourseCard.module.css';
import { Link } from 'react-router-dom';
const CourseCard = ({ course }) => {
  return (
    <div className={style.course_card}>
      <div className={style.course_image}>
        <img src={`/course/image/${course._id}`} alt="Coursename" />
      </div>
      <div className={style.course_info}>
        <h3>{course.name.toUpperCase()}</h3>
        <span>{course.description.toUpperCase()}</span>
      </div>
      <div className={style.course_btns}>
        <div className={style.read_mode}>
          <Link className="btn btn-primary" to={`/readmore/${course._id}`}>
            Read More
          </Link>
        </div>
        <div className={style.register}>
          <button className="btn btn-primary">Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
