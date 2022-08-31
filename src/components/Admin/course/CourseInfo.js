import React, { useEffect, useState } from 'react';
import style from '../../../css/Admin/View.module.css';
import CourseInfoCard from './CourseInfoCard';
import { connect } from 'react-redux';
import { getCourseById } from '../../../actions/course.action';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import LoadingData from './../../../LoadingData';
const CourseInfo = (props) => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { course, loading } = props.course;
  const [load, setLoad] = useState(false);
  useEffect(() => {
    props.getCourseById(id);
    setLoad(true);
  }, [id]);
  var about;
  var renderContent;
  if (course === null || loading) {
    renderContent = (
      <div style={{ marginTop: '80px', width: '100%' }}>
        <h3 className="text-center">
          <LoadingData load={load} />
          {t('loading')}
        </h3>
      </div>
    );
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
    renderContent = (
      <div className={style.card_container}>
        <div className="row">
          <div class={style.course_name}>
            <h1>
              {course === null ? 'Loading' : course.name}
              <span>
                {course === null ? 'Loading' : course.description} <br />
                {course === null
                  ? 'loading'
                  : `${t('date')} ${moment(course.date).format('l')}`}
              </span>
            </h1>
          </div>
        </div>
        <CourseInfoCard cardTitle={t('aboutCourse')} cardText={about} id={id} />
      </div>
    );
  }

  return <div className={style.course_info}>{renderContent}</div>;
};
const mapStateToProps = (state) => ({
  course: state.course,
});
export default connect(mapStateToProps, { getCourseById })(CourseInfo);
