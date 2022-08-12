import React from 'react';
import style from '../../css/course/CourseCard.module.css';
const CourseCard = (props) => {
  return (
    <div className={style.course_card}>
      <div className={style.course_image}>
        <img
          src="https://www.idp.com/medias/Accounting-370x278.jpg?context=bWFzdGVyfHJvb3R8NDczMzZ8aW1hZ2UvanBlZ3xoODQvaGNjLzk5MDc5NDA3MjA2NzAuanBnfGI4OWZkMTU5YmE4OTc4ZWZiOTE0NWY2NDQxZmQ0YzcxNmJjNTMxZDc3OWE3ZGQyNjNlYmZiZjg3ODZhNzVkMTA"
          alt="Coursename"
        />
      </div>
      <div className={style.course_info}>
        <h3>Course Name</h3>
        <span>Course Description</span>
      </div>
      <div className={style.course_btns}>
        <div className={style.read_mode}>
          <button className="btn btn-primary">Read More</button>
        </div>
        <div className={style.register}>
          <button className="btn btn-primary">Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
