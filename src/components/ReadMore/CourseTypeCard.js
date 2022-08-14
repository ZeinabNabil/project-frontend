import React from "react";
import style from "../../css/Layout/ReadMore/Readmore.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CourseTypeCard = ({ typeIcon, typeTitle, typeText }) => {
  return (
    <div className="col-lg-4">
      <div className={style.course_type_box}>
        <div className={`${style.face} ${style.front} ${style.card} card`}>
          {/*  />
        <div>Vip 1</div> */}
          <div className={`${style.card_body} card-body`}>
            <FontAwesomeIcon icon={typeIcon} />
            <h5 className="card-title">{typeTitle}</h5>
          </div>
        </div>
        <div className={`${style.face} ${style.back} ${style.card} card`}>
          <div className={`${style.card_body} card-body`}>
            <p>{typeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTypeCard;
