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
  var role = -1;
  const { currentUser } = props.user;
  if (currentUser !== null) {
    role = currentUser.role;
  }
  const handleOnClick = async (id, courseName) => {
    if (await confirm(`هل انت متأكد انك تريد حذف هذه الدورة`)) {
      props.deleteCourse(id);
      window.location.reload();
    } else {
      console.log('Not ');
    }
  };
  const { courses, loading } = props.course;
  if (courses === null || loading) {
    renderContent = <Loading loading={true} />;
  } else {
    renderContent = (
      <Table
        btnName="اضافة دورة جديدة"
        btnLink="course/add"
        columns={columns(handleOnClick, role)}
        data={courses.courses}
      />
    );
  }
  return <div className={style.viewcourses}>{renderContent}</div>;
};

const mapStateToProps = (state) => ({
  course: state.course,
  user: state.user,
});
export default connect(mapStateToProps, { getAllCourses, deleteCourse })(
  ViewCourses
);
