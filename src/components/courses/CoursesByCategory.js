import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCoursesByCategory } from './../../actions/course.action';
import CourseCard from './CourseCard';
import style from '../../css/course/CourseCard.module.css';
const CoursesByCategory = (props) => {
  const { category } = useParams();
  const { coursesByCategory, loading } = props.course;
  var renderContent;
  console.log(coursesByCategory, loading);
  if (coursesByCategory === null || loading) {
    renderContent = 'Loading';
  } else {
    if (coursesByCategory.length === 0) {
      renderContent = 'There is no courses yet';
    } else
      renderContent = coursesByCategory.map((course) => (
        <div className="col-lg-4 col-md-6">
          <CourseCard course={course} />
        </div>
      ));
  }
  useEffect(() => {
    props.getCoursesByCategory(category);
  }, [category]);

  return (
    <div className="container">
      <div className={style.category_name}>
        <span>{category.toUpperCase()} COURSES</span>
      </div>
      <div
        className="row"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        {renderContent}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  course: state.course,
});
export default connect(mapStateToProps, { getCoursesByCategory })(
  CoursesByCategory
);
