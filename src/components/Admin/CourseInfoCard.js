import React from 'react';

// CSS
import style from '../../css/Admin/ViewCourses.module.css';

const CourseInfoCard = ({ cardTitle, cardText }) => {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
      <div className={`${style.course_info_card} card`}>
        <div className="card-body">
          <h5 className={`${style.card_title} card-title`}>{cardTitle}</h5>
          <p className={`${style.course_card_text} card-text`}>{cardText}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseInfoCard;
