import React from "react";
import style from "../../css/Admin/ViewCourses.module.css";
import CourseInfoCard from "./CourseInfoCard";

const CourseInfo = () => {
  return (
    <div className={style.course_info}>
      <div className={style.card_container}>
        <div className="row">
          <CourseInfoCard cardTitle="Important Information" />
          <CourseInfoCard cardTitle="What Is" />
          <CourseInfoCard cardTitle="Features" />
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
