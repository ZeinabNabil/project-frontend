import React, { useEffect } from 'react';
import style from '../../css/Landing/Landing.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux/es/exports';
import {
  registerCourse,
  getRegisteredCourses,
} from '../../actions/course.action';
import Aos from 'aos';
import { useTranslation } from 'react-i18next';
const CoursesCard = ({
  courseObject,
  onClick,
  user,
  getRegisteredCourses,
  course,
}) => {
  const { t, i18n } = useTranslation();
  const { isAuthenticated, currentUser } = user;

  useEffect(() => {
    Aos.init();
    if (currentUser !== null) {
      getRegisteredCourses(currentUser._id);
    }
  }, []);
  const { registeredCourses } = course;

  const Regbtn = () => {
    if (isAuthenticated) {
      return (
        <Link
          to="./"
          onClick={() => onClick(courseObject._id)}
          className="btn btn-primary 2"
        >
          {t('RegisterNow')}
        </Link>
      );
    } else {
      return (
        <Link
          to="/auth/login"
          onClick={() => onClick(courseObject._id)}
          className="btn btn-primary 2"
        >
          {t('loginForRegistereCourse')}
        </Link>
      );
    }
  };
  var search;
  if (registeredCourses !== null) {
    search = registeredCourses.courses.find(
      (item) => item.courseId._id == courseObject._id
    );
  }
  const alreadyRegistered = () => {
    if (search) {
      return t('alreadyRegistered');
    } else {
      return Regbtn();
    }
  };
  return (
    <div
      className={style.card}
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="3000"
    >
      <div className={style.image}>
        <img src={`/course/image/${courseObject._id}`} />
      </div>
      <div className={style.card_body}>
        <h5 className={style.cardtitle}>{courseObject.name}</h5>
        <span className={style.text}>{courseObject.description}</span>
        <div className={style.price_offer}>
          <div className="row">
            <div className="col-lg-6">
              <span
                className={`${style.price} ${
                  courseObject.isHasOffer ? style.line_through : ''
                }`}
              >
                {t('price')} {courseObject.price}
              </span>
            </div>
            {!courseObject.isHasOffer ? (
              ''
            ) : (
              <div className="col-lg-6">
                <span className={style.offer}>
                  {t('offerPrice')} {courseObject.offer}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className={style.cardbtns}>
          <Link
            className="btn btn-primary"
            to={`/readmore/${courseObject._id}`}
          >
            {t('SeeMore')}
          </Link>
          {alreadyRegistered()}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.user,
  course: state.course,
});
export default connect(mapStateToProps, {
  registerCourse,
  getRegisteredCourses,
})(CoursesCard);
