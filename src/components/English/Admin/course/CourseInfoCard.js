import React from 'react';

// CSS
import style from '../../../css/Admin/View.module.css';

const CourseInfoCard = ({ cardTitle, cardText, id }) => {
  return (
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className={`${style.course_info_card} card`}>
          <div className="card-body" style={{ textAlign: 'center' }}>
            <img
              src={`/course/image/${id}`}
              className="img-fluid"
              alt="Responsive image"
            />
          </div>
        </div>
      </div>
      <div className="col-lg-9 col-md-6 col-sm-12">
        <div className={`${style.course_info_card} card`}>
          <div className="card-body">
            <h5 className={`${style.card_title} card-title`}>{cardTitle}</h5>
            <p className={`${style.course_card_text} card-text`}>{cardText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfoCard;
