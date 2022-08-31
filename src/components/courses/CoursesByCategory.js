import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getCoursesByCategory,
  getRegisteredCourses,
} from './../../actions/course.action';
import style from '../../css/course/CourseCard.module.css';
import Section from '../Landingpage/Section';
import LoadingData from './../../LoadingData';
import { useTranslation } from 'react-i18next';
const CoursesByCategory = (props) => {
  const { i18n, t } = useTranslation();
  const { category } = useParams();
  const { coursesByCategory, loading } = props.course;
  const { currentUser } = props.user;
  const { registeredCourses } = props.course;
  useEffect(() => {
    props.getCoursesByCategory(category, i18n.resolvedLanguage);
    document.title = category.toUpperCase(); // TITLE
  }, [category]);
  useEffect(() => {
    if (currentUser !== null) {
      props.getRegisteredCourses(currentUser._id, i18n.resolvedLanguage);
    }
  }, []);

  var renderContent = [];
  if (coursesByCategory === null || loading) {
    renderContent = (
      <h3
        className="text-center"
        style={{ marginBottom: '40rem', marginTop: '180px' }}
      >
        <LoadingData />
        {t('loading')}
      </h3>
    );
  } else {
    if (coursesByCategory.length === 0) {
      renderContent = (
        <h3
          className="text-center"
          style={{ marginBottom: '40rem', marginTop: '180px' }}
        >
          'There is no courses yet'
        </h3>
      );
    } else
      renderContent = (
        <Section
          title={category.toUpperCase()}
          courses={coursesByCategory}
          registeredCourses={
            registeredCourses !== null ? registeredCourses : null
          }
        />
      );
  }
  return <div className={style.coursesByCategory}>{renderContent}</div>;
};
const mapStateToProps = (state) => ({
  course: state.course,
  user: state.user,
});
export default connect(mapStateToProps, {
  getCoursesByCategory,
  getRegisteredCourses,
})(CoursesByCategory);
