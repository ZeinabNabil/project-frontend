import React from 'react';
import CoursesCard from './Coursescard';
import style from '../../css/Landing/Landing.module.css';
import { faGripLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { registerCourse } from './../../actions/course.action';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
const Section = ({ title, courses, registerCourse }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const onRegisterClick = (courseId) => {
    var success = t('RegisterSuccessfully');
    registerCourse(courseId, success, navigate);
  };
  const renderCourses = () => {
    if (courses.length === 0) {
      return;
    } else {
      return (
        <div className={style.Section}>
          <h1 className={style.sectiontitle}>
            {title}
            <FontAwesomeIcon className={style.icon} icon={faGripLines} />
          </h1>
          <div className={`container ${style.cardcontainer}`}>
            <div
              className="row"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              {courses.map((course) => (
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <CoursesCard
                    courseObject={course}
                    onClick={onRegisterClick}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
  };
  return renderCourses();
};

export default connect(null, { registerCourse })(Section);
