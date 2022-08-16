import React, { useEffect, useState } from 'react';
// Redux
import { connect } from 'react-redux';
import { getAllCourses } from '../../../actions/course.action';
//CSS
import style from '../../../css/Admin/View.module.css';
// Components
import columns from './CoursesColumn';
import Table from '../../Table';

const ViewCourses = (props) => {
  useEffect(() => {
    props.getAllCourses();
  }, []);
  var renderContent;
  const { courses, loading } = props.course;
  console.log(courses, loading);
  if (courses === null || loading) {
    renderContent = 'Loading';
  } else {
    renderContent = (
      <Table
        btnName="Add new course"
        btnLink="course/add"
        columns={columns}
        data={courses.courses}
      />
    );
  }
  return <div className={style.viewcourses}>{renderContent}</div>;
};

const mapStateToProps = (state) => ({
  course: state.course,
});
export default connect(mapStateToProps, { getAllCourses })(ViewCourses);
