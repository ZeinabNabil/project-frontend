import React, { useEffect } from 'react';
import style from '../../../css/Admin/View.module.css';
import CourseInfoCard from './CourseInfoCard';
import { connect } from 'react-redux';
import { getCourseById } from '../../../actions/course.action';
import { useParams, Link } from 'react-router-dom';

import BackToList from '../BackToList';

const CourseInfo = (props) => {
  const { id } = useParams();
  console.log(id);
  const { course, loading } = props.course;
  console.log(course, loading);
  useEffect(() => {
    props.getCourseById(id);
  }, []);
  var whatIsContent;
  var featureContent;
  if (course === null || loading) {
    whatIsContent = 'Loading';
    featureContent = 'Loading';
  } else {
    whatIsContent = course.whatis.split('.').map((what, index) => {
      return (
        <ul class="list-group" key={index}>
          <li class="list-group-item" style={{ border: 'none' }}>
            {what}
          </li>
        </ul>
      );
    });
    featureContent = course.whatWillStudentsLearn.map((feature, index) => (
      <ul class="list-group" key={index}>
        <li class="list-group-item" style={{ border: 'none' }}>
          {feature}
        </li>
      </ul>
    ));
  }

  return (
    <div className={style.course_info}>
      <div className={style.card_container}>
        <div className="row">
          <div class={style.course_name}>
            <h1>
              {course === null ? 'Loading' : course.name}
              <span> {course === null ? 'Loading' : course.description}</span>
            </h1>
          </div>
        </div>
        <div className="row">
          <CourseInfoCard cardTitle="What Is" cardText={whatIsContent} />
          <CourseInfoCard cardTitle="Features" cardText={featureContent} />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  course: state.course,
});
export default connect(mapStateToProps, { getCourseById })(CourseInfo);
