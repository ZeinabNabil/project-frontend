import React from "react";
import style from "../../css/Admin/ViewCourses.module.css";
import CourseInfoCard from "./CourseInfoCard";

const CourseInfo = () => {
  return (
    <div className={style.course_info}>
      <div className={style.card_container}>
        <div className="row">
          <CourseInfoCard
            cardTitle="Important Information"
            cardText="Some quick example text to build on the card title and make up the
            bulk of the card's content."
          />
          <CourseInfoCard
            cardTitle="What Is"
            cardText="Some quick example text to build on the card title and make up the
            bulk of the card's content."
          />
          <CourseInfoCard
            cardTitle="Features"
            cardText="Some quick example text to build on the card title and make up the
            bulk of the card's content."
          />
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
