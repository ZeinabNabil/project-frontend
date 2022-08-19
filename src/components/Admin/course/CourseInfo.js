import React, { useEffect } from 'react';
import style from '../../../css/Admin/View.module.css';
import CourseInfoCard from './CourseInfoCard';
import { connect } from 'react-redux';
import { getCourseById } from '../../../actions/course.action';
import { useParams, Link } from 'react-router-dom';

import BackToList from '../BackToList';
import moment from 'moment';

const CourseInfo = (props) => {
  const { id } = useParams();
  const { course, loading } = props.course;
  console.log(course, loading);
  useEffect(() => {
    props.getCourseById(id);
  }, []);
  var about;
  if (course === null || loading) {
    about = 'Loading';
  } else {
    about = course.about.map((item, index) => {
      return (
        <>
          <ul class="list-group" key={index}>
            <li class="list-group-item" style={{ border: 'none' }}>
              {item}
            </li>
          </ul>
        </>
      );
    });
  }

  return (
    <div className={style.course_info}>
      <div className={style.card_container}>
        <div className="row">
          <div class={style.course_name}>
            <h1>
              {course === null ? 'Loading' : course.name}
              <span>
                {course === null ? 'Loading' : course.description} <br />
                {course === null
                  ? 'loading'
                  : `تم اضـــافة الدورة ${moment(course.date).format('l')}`}
              </span>
            </h1>
          </div>
        </div>
        <CourseInfoCard
          cardTitle="معلومات عن الدورة"
          cardText={about}
          id={id}
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  course: state.course,
});
export default connect(mapStateToProps, { getCourseById })(CourseInfo);
