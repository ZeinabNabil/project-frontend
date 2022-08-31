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
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faFileSignature,
} from '@fortawesome/free-solid-svg-icons';
function daysBetween(date1String, date2String) {
  var d1 = new Date(date1String);
  var d2 = new Date(date2String);
  return (d2 - d1) / (1000 * 3600 * 24);
}
const CoursesCard = ({
  courseObject,
  onClick,
  user,
  getRegisteredCourses,
  course,
  registeredCourses = null,
}) => {
  const { t, i18n } = useTranslation();
  const { isAuthenticated, currentUser } = user;
  useEffect(() => {
    Aos.init();
  }, []);

  const Regbtn = () => {
    if (isAuthenticated) {
      return (
        <Link
          to="./"
          onClick={() => onClick(courseObject._id, courseObject.courseCode)}
          className="btn"
        >
          <FontAwesomeIcon icon={faFileSignature} /> {t('RegisterNow')}
        </Link>
      );
    } else {
      return (
        <Link
          to="/auth/login"
          onClick={() => onClick(courseObject._id)}
          className="btn"
        >
          {t('loginForRegistereCourse')}
        </Link>
      );
    }
  };
  var search;
  if (registeredCourses !== null) {
    search = registeredCourses.courses.find(
      (item) => item.courseCode == courseObject.courseCode
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
            {courseObject.price != 0 ? (
              <div className="col-lg-6">
                <span
                  className={`${style.price} ${
                    courseObject.isHasOffer ? style.line_through : ''
                  }`}
                >
                  {t('price')} {courseObject.price}
                </span>
              </div>
            ) : (
              ''
            )}
            {!courseObject.isHasOffer ? (
              ''
            ) : (
              <div className="col-lg-6">
                <span className={style.offer}>
                  {t('price')} {courseObject.offer}
                  <p className={style.endoffer}>
                    end after{' '}
                    {daysBetween(
                      moment().format('l'),
                      moment(courseObject.endOfferDate).format('l')
                    )}{' '}
                    days
                  </p>
                </span>
              </div>
            )}
          </div>
        </div>

        <div className={style.cardbtns}>
          <Link className="btn" to={`/readmore/${courseObject._id}`}>
            <FontAwesomeIcon icon={faMagnifyingGlass} /> {t('SeeMore')}
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
})(CoursesCard);
