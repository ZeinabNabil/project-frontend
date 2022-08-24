import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCoursesByCategory } from './../../actions/course.action';
import CourseCard from './CourseCard';
import style from '../../css/course/CourseCard.module.css';
import Section from '../Landingpage/Section';
import LoadingData from './../../LoadingData';
const CoursesByCategory = (props) => {
  const { category } = useParams();
  const { coursesByCategory, loading } = props.course;
  var renderContent = [];
  console.log(coursesByCategory, loading);
  if (coursesByCategory === null || loading) {
    renderContent = (
      <h3 className="text-center">
        <LoadingData />
      </h3>
    );
  } else {
    if (coursesByCategory.length === 0) {
      renderContent = 'There is no courses yet';
    } else
      renderContent = <Section title={category} courses={coursesByCategory} />;
  }
  useEffect(() => {
    props.getCoursesByCategory(category);
  }, [category]);

  return <div className={style.coursesByCategory}>{renderContent}</div>;
};
const mapStateToProps = (state) => ({
  course: state.course,
});
export default connect(mapStateToProps, { getCoursesByCategory })(
  CoursesByCategory
);
