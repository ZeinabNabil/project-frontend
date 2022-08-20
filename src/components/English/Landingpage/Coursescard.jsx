import React, { useEffect } from 'react';
import style from '../../css/Landing/Landing.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux/es/exports';
import { registerCourse } from '../../actions/course.action';
import Aos from 'aos';
const CoursesCard = ({ course, registerCourse }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className={style.card}
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="3000"
    >
      <div className={style.image}>
        <img src={`/course/image/${course._id}`} />
      </div>
      <div className={style.card_body}>
        <h5 className={style.cardtitle}>{course.name}</h5>
        <span className={style.text}>{course.description}</span>
        <div className={style.price_offer}>
          <div className="row">
            <div className="col-lg-6">
              <span
                className={`${style.price} ${
                  course.offer != 0 ? style.line_through : ''
                }`}
              >
                سعر الدورة {course.price}
              </span>
            </div>
            {!course.isHasOffer ? (
              ''
            ) : (
              <div className="col-lg-6">
                <span className={style.offer}> بعد التخفيض {course.offer}</span>
              </div>
            )}
          </div>
        </div>
        <div className={style.cardbtns}>
          <Link className="btn btn-primary" to={`/readmore/${course._id}`}>
            اقرأ اكثر عن الدورة
          </Link>
          <Link
            to="./"
            onClick={() => registerCourse(course._id)}
            className="btn btn-primary 2"
          >
            تسجيل الان
          </Link>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { registerCourse })(CoursesCard);
