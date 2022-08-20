import React, { useEffect, useState } from 'react';
import style from '../../css/ReadMore/Readmore.module.css';

import AOS from 'aos';

// Images
import firstPhoto from '../../images/IELTS.jpg';
import secondPhoto from '../../images/IELTS.jpg';
import thirdPhoto from '../../images/IELTS.jpg';

// Icons
import { faSlideshare } from '@fortawesome/free-brands-svg-icons';
import {
  faBookOpen,
  faCalendarDays,
  faChalkboardUser,
  faClock,
  faCrown,
  faPhone,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import ReadMoreBox from './ReadMoreBox';
import ReadMoreCard from './ReadMoreCard';
import CourseTypeCard from './CourseTypeCard';
// Redux
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCourseById } from './../../actions/course.action';
import SvgDownWaves from '../SvgDownWaves';
import SvgUpWaves from '../SvgUpWaves';
const ReadMore = (props) => {
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

  const onInputChange = (e) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };

  const onFormSubmit = async (evt) => {
    evt.preventDefault();
    const userData = {
      name: form.name,
      email: form.email,
      password: form.password,
      phone: form.phone,
      confirmPassword: form.confirmPassword,
    };
  };
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
    hours = course.hours + 'ساعات';
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
                      <button type="button" className="btn btn-primary">
                        لتسجيل هذه الدوره اضغط هنا
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
                    cardTilte="عدد الحصص"
                    cardSubtitle={classes}
                  />
                  <ReadMoreCard
                    cardIcon={faCalendarDays}
                    cardTilte="مدة الدورة"
                    cardSubtitle={duration}
                  />
                  <ReadMoreCard
                    cardIcon={faClock}
                    cardTilte="عدد ساعات الدورة"
                    cardSubtitle={hours}
                  />
                </div>
              </div>
            </div>
            {/* End read more cards */}
          </div>
        </div>
        <SvgDownWaves />
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
                  boxHeader={`معلومات عن ${name}`}
                  boxContent={about}
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Second section */}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  course: state.course,
});
export default connect(mapStateToProps, { getCourseById })(ReadMore);
