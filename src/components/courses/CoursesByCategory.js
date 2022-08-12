import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCoursesByCategory } from './../../actions/course.action';
import CourseCard from './CourseCard';
const CoursesByCategory = (props) => {
  const { category } = useParams();
  console.log(category);
  useEffect(() => {
    props.getCoursesByCategory(category);
  }, [category]);
  return (
    <div className="container">
      <div className="text-center">
        <h2>{category.toUpperCase()} COURSES</h2>
      </div>
      <div
        className="row"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <div className="col-lg-4">
          <CourseCard />
        </div>
        <div className="col-lg-4">
          <CourseCard />
        </div>
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
