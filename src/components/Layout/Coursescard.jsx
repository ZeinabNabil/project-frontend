import React from 'react';
import style from '../../css/Layout/Landing.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux/es/exports';
import { registerCourse } from '../../actions/course.action';
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
          <Link className="btn btn-primary" to={`/readmore/${props.id}`}>
            Read More
          </Link>
          <Link
            to="./"
            onClick={() => props.registerCourse(props.id)}
            className="btn btn-primary 2"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { registerCourse })(CoursesCard);
