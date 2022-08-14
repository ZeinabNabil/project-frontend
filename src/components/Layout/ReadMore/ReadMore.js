import React, { useEffect, useState } from 'react';
import style from '../../../css/Layout/ReadMore/Readmore.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

// Images
import firstPhoto from '../../../images/IELTS.jpg';
import secondPhoto from '../../../images/IELTS.jpg';
import thirdPhoto from '../../../images/IELTS.jpg';

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
import Input from '../../Admin/Input';
// Redux
import { useParams } from 'react-router-dom';
import { getCourseById } from '../../../actions/course.action';
import { connect } from 'react-redux';
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
  var features,
    whatIs,
    attends,
    classes,
    duration,
    numbersOfHours,
    typesOfCourse,
    courseId,
    name;

  const { course, loading } = props.course;
  console.log(course);
  var renderCourseInfo;
  if (course === null || loading) {
    renderCourseInfo = 'Loading';
  } else {
    features = course.whatWillStudentsLearn;
    whatIs = course.whatis;
    attends = course.attends;
    classes = course.classes + ' Shares';
    duration = course.duration;
    numbersOfHours = course.numbersOfHours + 'Hours';
    typesOfCourse = course.typesOfCourse;
    courseId = course._id;
    name = course.name;
    console.log(course.typesOfCourse);
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
                        {name} Course
                      </button>
                      <button type="button" className="btn btn-primary">
                        To register now and get offers, click here
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
                    cardIcon={faSlideshare}
                    cardTilte="Attendees"
                    cardSubtitle={attends}
                  />
                  <ReadMoreCard
                    cardIcon={faChalkboardUser}
                    cardTilte="Classes"
                    cardSubtitle={classes}
                  />
                  <ReadMoreCard
                    cardIcon={faCalendarDays}
                    cardTilte="Duration of the course"
                    cardSubtitle={duration}
                  />
                  <ReadMoreCard
                    cardIcon={faClock}
                    cardTilte="The number of hours"
                    cardSubtitle={numbersOfHours}
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
                <ReadMoreBox
                  boxHeader="What is the IELTS test?"
                  boxContent={whatIs}
                />
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
                            <img src={firstPhoto} alt="first-photo" />
                          </div>
                          <div className="col-lg-6">
                            <img src={secondPhoto} alt="second-photo" />
                          </div>
                          <div className="col-lg-6">
                            <img src={thirdPhoto} alt="third-photo" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ReadMoreBox
                  boxHeader="Features of the IELTS preparation course"
                  boxContent={features}
                />
                <ReadMoreBox
                  boxHeader="Features of the IELTS preparation course"
                  boxContent={features}
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Second section */}
        {/* Start Third section */}
        <div className="col-lg-12" style={{ paddingRight: '0' }}>
          {/* Start course type */}
          <div className={style.read_more_third_section}>
            <div className="container">
              <div className={style.read_more_header}>
                <h5>Course types</h5>
              </div>
              <div className="row">
                {!course
                  ? 'Loading'
                  : typesOfCourse.sort().map((type) => {
                      return (
                        <CourseTypeCard
                          typeIcon={faCrown}
                          typeTitle={type}
                          typeText={
                            type === 'VIP1'
                              ? 'The course includes only one trainee with the lecturer'
                              : type === 'VIP2'
                              ? 'The course includes only trainees with the lecturer'
                              : 'The course includes a group of trainees with the lecturer'
                          }
                        />
                      );
                    })}
              </div>
            </div>
          </div>
          {/* End course type */}
        </div>
        {/* End Third section */}
        {/* Start Forth section */}
        <div className="col-lg-12" style={{ paddingRight: '0' }}>
          {/* Start Register form */}
          {/* <div className={style.read_more_fourth_section}>
            <div className="container">
              <div
                className={style.register_now}
                data-aos="zoom-in-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800"
              >
                <div className={style.read_more_header}>
                  <h5>Register with us now</h5>
                </div>
                <p>
                  Register with us now and get the latest offers and discounts
                  available in our cradle. After entering your information and
                  registering successfully, one of our educational consultants
                  will contact you to help you complete the registration process
                  and to answer all your inquiries.
                </p>
                <div className={style.register_form_container}>
                  <div className={style.register_form}>
                    <div className={style.register_form_style}>
                      <FontAwesomeIcon icon={faPhone} />
                      <FontAwesomeIcon icon={faBookOpen} />
                    </div>
                    <form onSubmit={onFormSubmit}>
                      <Input
                        labelName="Name"
                        type="text"
                        placeholder="Full name"
                        name="name"
                        value={form.name}
                        onChange={onInputChange}
                      />
                      <Input
                        labelName="Mobile Number"
                        type="text"
                        placeholder="Phone number"
                        name="phone"
                        value={form.phone}
                        onChange={onInputChange}
                      />
                      <Input
                        labelName="Email"
                        type="email"
                        placeholder="Email (e-mail)"
                        name="email"
                        value={form.email}
                        onChange={onInputChange}
                      />
                      <div className={style.register_btn}>
                        <button type="button" className="btn btn-primary">
                          Choise of courses
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* End Register form */}
        </div>
        {/* End Forth section */}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  course: state.course,
});
export default connect(mapStateToProps, { getCourseById })(ReadMore);
