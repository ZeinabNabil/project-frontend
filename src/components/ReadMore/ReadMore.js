import React, { useEffect, useState } from 'react';
import style from '../../css/ReadMore/Readmore.module.css';
import AOS from 'aos';
// Icons
import {
  faCalendarDays,
  faChalkboardUser,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

// Components
import ReadMoreBox from './ReadMoreBox';
import ReadMoreCard from './ReadMoreCard';
// Redux
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCourseById } from './../../actions/course.action';
import SvgDownWaves from '../SvgDownWaves';
import { useTranslation } from 'react-i18next';
import SvgUpWaves from './../SvgUpWaves';
const ReadMore = (props) => {
  const { t } = useTranslation();
  const { id } = useParams();
  useEffect(() => {
    props.getCourseById(id);
  }, []);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    AOS.init();
  }, []);

  var attends, classes, duration, hours, courseId, name, about;

  const { course, loading } = props.course;
  console.log(course);
  var renderCourseInfo;
  if (course === null || loading) {
    renderCourseInfo = 'Loading';
  } else {
    attends = course.attends;
    classes = course.classes;
    duration = course.duration;
    hours = course.hours + ' ' + t('numberOfHourse');
    courseId = course._id;
    name = course.name;
    about = course.about;
  }
  return (
    <div className={style.read_more}>
      <div className="row" style={{ marginRight: '0' }}>
        {/* Start First section */}
        <div className="col-lg-12" style={{ paddingRight: '0' }}>
          <div className={style.read_more_first_section}>
            {/*  Start read more area */}
            <div className={style.read_more_area}>
              <div className={style.read_more_content}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className={style.read_more_btns}>
                      <button type="button" className="btn btn-primary">
                        {name}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End read more area */}
            {/* Start read more cards */}
            <div className={style.read_more_cards_container}>
              <div className={style.read_more_cards}>
                <div className="row">
                  <ReadMoreCard
                    cardIcon={faChalkboardUser}
                    cardTilte={t('classes')}
                    cardSubtitle={classes}
                  />
                  <ReadMoreCard
                    cardIcon={faCalendarDays}
                    cardTilte={t('duration')}
                    cardSubtitle={duration}
                  />
                  <ReadMoreCard
                    cardIcon={faClock}
                    cardTilte={t('hours')}
                    cardSubtitle={hours}
                  />
                </div>
              </div>
            </div>
            {/* End read more cards */}
          </div>
        </div>
        {/* End First section */}
        {/* Start Second section */}
        <div className="col-lg-12" style={{ paddingRight: '0' }}>
          <div className={style.read_more_second_section}>
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-6 col-md-12"
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="800"
                >
                  <div className={style.box_container}>
                    <div className={`${style.box} card`}>
                      <div className={`${style.box_body} card-body`}>
                        <div className="row">
                          <div className="col-lg-12">
                            <img
                              src={`/course/image/${courseId}`}
                              alt="first-photo"
                            />
                          </div>
                          <div className="col-lg-6">
                            <img
                              src={`/course/image/${courseId}`}
                              alt="second-photo"
                            />
                          </div>
                          <div className="col-lg-6">
                            <img
                              src={`/course/image/${courseId}`}
                              alt="third-photo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ReadMoreBox
                  boxHeader={t('seeMoreAbout') + name}
                  boxContent={about}
                />
              </div>
            </div>
          </div>
        </div>
        <SvgUpWaves />

        {/* End Second section */}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  course: state.course,
});
export default connect(mapStateToProps, { getCourseById })(ReadMore);
