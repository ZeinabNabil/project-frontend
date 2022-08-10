import React from 'react';
import CoursesCard from './Coursescard';
import style from '../../css/Layout/Landing.module.css';
import { faGripLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Section = ({ title, courses }) => {
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
                    title={course.name}
                    text={course.description}
                    id={course._id}
                  />
                </div>
              ))}
            </div>
            ;
          </div>
        </div>
      );
    }
  };
  return renderCourses();
};

export default Section;
