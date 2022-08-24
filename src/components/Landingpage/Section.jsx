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
  const onRegisterClick = (courseId, code) => {
    var success = t('RegisterSuccessfully');
    registerCourse(courseId, code, success, navigate);
  };
  const renderCourses = () => {
    if (courses.length === 0) {
      return;
    } else {
      return (
        <div className={style.Section}>
          <h1 className={style.sectiontitle}>
            {title}
            {/* <FontAwesomeIcon className={style.icon} icon={faGripLines} /> */}
            <span className={style.svgUnderline}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
              >
                <path
                  d="M5,125.4c30.5-3.8,137.9-7.6,177.3-7.6c117.2,0,252.2,4.7,312.7,7.6"
                  className={style.lineup}
                ></path>
                <path
                  d="M26.9,143.8c55.1-6.1,126-6.3,162.2-6.1c46.5,0.2,203.9,3.2,268.9,6.4"
                  className={style.linedown}
                ></path>
              </svg>
            </span>
          </h1>
          <div className={`container ${style.cardcontainer}`}>
            <div
              className="row"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              {courses.map((course) => (
                <div key={course._id} className="col-lg-4 col-md-6 col-sm-12">
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
