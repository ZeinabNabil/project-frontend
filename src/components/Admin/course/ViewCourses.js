import React, { useEffect, useState } from 'react';
// Redux
import { connect } from 'react-redux';
import { getAllCourses, deleteCourse } from '../../../actions/course.action';
//CSS
import style from '../../../css/Admin/View.module.css';
// Components
import columns from './CoursesColumn';
import Table from '../../Table';
import Loading from '../../../Loading';
import { confirm } from '../Confirmation';

const ViewCourses = (props) => {
  useEffect(() => {
    props.getAllCourses();
  }, []);
  var renderContent;

  const handleOnClick = async (id, courseName) => {
    console.log('hoge!');
    if (await confirm(`Are you sure you want to delete`)) {
      props.deleteCourse(id);
      window.location.reload();
    } else {
      console.log('Not ');
    }
  };
  const { courses, loading } = props.course;
  console.log(courses, loading);
  if (courses === null || loading) {
    renderContent = <Loading loading={true} />;
  } else {
    renderContent = (
      <Table
        btnName="Add new course"
        btnLink="course/add"
        columns={columns(handleOnClick)}
        data={courses.courses}
      />
    );
  }
  return <div className={style.viewcourses}>{renderContent}</div>;
};

const mapStateToProps = (state) => ({
  course: state.course,
});
export default connect(mapStateToProps, { getAllCourses, deleteCourse })(
  ViewCourses
);
