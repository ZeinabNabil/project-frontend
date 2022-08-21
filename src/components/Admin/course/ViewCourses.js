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
import { useTranslation } from 'react-i18next';
const ViewCourses = (props) => {
  const { t } = useTranslation();
  const columnsName = {
    col_course_name: t('col_course_name'),
    col_course_category: t('col_course_category'),
    col_course_attends: t('col_course_attends'),
    col_course_hours: t('col_course_hours'),
    col_course_classes: t('col_course_classes'),
    col_course_duration: t('col_course_duration'),
    col_course_price: t('col_course_price'),
    col_course_offer: t('col_course_offer'),
    col_course_offerDuration: t('col_course_offerDuration'),
    col_course_addedBy: t('col_course_addedBy'),
    col_course_seeMore: t('col_course_seeMore'),
    col_course_action: t('col_course_action'),
  };
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
