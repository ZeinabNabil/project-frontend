import React, { useState } from "react";
import style from "../../css/Layout/ReadMore/Readmore.module.css";

// Images
import firstPhoto from "../../images/IELTS.jpg";
import secondPhoto from "../../images/IELTS.jpg";
import thirdPhoto from "../../images/IELTS.jpg";

// Icons
import { faSlideshare } from "@fortawesome/free-brands-svg-icons";
import {
  faBookOpen,
  faCalendarDays,
  faChalkboardUser,
  faClock,
  faCrown,
  faPhone,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import ReadMoreBox from "./ReadMoreBox";
import ReadMoreCard from "./ReadMoreCard";
import CourseTypeCard from "././CourseTypeCard";
import Input from "../Admin/Input";

const ReadMore = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });
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
  const features = [
    "Training with certified trainers (the best English language training experts) with a high degree of competence from the best universities and organizations have already been able to help many people to obtain the required scores in the IELTS test.",
    "A test to assess your current level to determine which level is right for you.",
    "Practice and develop the four English skills: listening, speaking, reading and writing.",
    "The flexibility that our institute offers you, as the trainee can choose to attend the course within the institute’s halls or via the Internet from his home or workplace through communication programs such as Zoom.",
    "Familiarize yourself with all the components of the exam and the different types of questions by training on the IELTS exam model and strategies, and obtaining support and advice, which will help you develop the skills and methods of correct answering to the exam.",
    "Suitable prices for all classes in the United Arab Emirates.",
  ];
  return (
    <div className={style.read_more}>
      <div className="row" style={{ marginRight: "0" }}>
        {/* Start First section */}
        <div className="col-lg-12" style={{ paddingRight: "0" }}>
          <div className={style.read_more_first_section}>
            {/*  Start read more area */}
            <div className={style.read_more_area}>
              <div className={style.read_more_content}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className={style.read_more_btns}>
                      <button type="button" className="btn btn-primary">
                        IELTS preparation course
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
                    cardSubtitle="institute’s halls or online through communication programs such as Zoom and others"
                  />
                  <ReadMoreCard
                    cardIcon={faChalkboardUser}
                    cardTilte="Classes"
                    cardSubtitle="12 shares"
                  />
                  <ReadMoreCard
                    cardIcon={faCalendarDays}
                    cardTilte="Duration of the course"
                    cardSubtitle="month | Two weeks for intensive IELTS"
                  />
                  <ReadMoreCard
                    cardIcon={faClock}
                    cardTilte="The number of hours"
                    cardSubtitle="24 hours of learning"
                  />
                </div>
              </div>
            </div>
            {/* End read more cards */}
          </div>
        </div>
        {/* End First section */}
        {/* Start Second section */}
        <div className="col-lg-12" style={{ paddingRight: "0" }}>
          <div className={style.read_more_second_section}>
            <div className="container">
              <div className="row">
                <ReadMoreBox
                  boxHeader="What is the IELTS test?"
                  boxContent={`It is the
                  International English Language Testing System, which is categorized to measure your proficiency and communicative ability in the English language, and proves that you have a certain level of English, whether for work or study purposes.
                  It is an English language test that assesses all four language skills: listening, reading, speaking and writing.
                  We at Ivan Ilç Institute offer academic IELTS if you want to obtain higher education, professional registration, immigration or study abroad, and we also offer IELTS general to help you improve your English in professional life.`}
                />
                <div className="col-lg-6 col-md-12">
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
                <ReadMoreBox
                  boxHeader="Features of the IELTS preparation course"
                  boxContent={features}
                />
                <ReadMoreBox
                  boxHeader="Features of the IELTS preparation course"
                  boxContent={features}
                />
                {/* <div className="col-lg-12">
                  <div className={style.box}>
                    <div className="row">
                      <div className="col-lg-6 col-md-12">
                        <div className={style.box_header}>
                          <h5>Features of the IELTS preparation course</h5>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className={style.box_header}>
                          <h5>important information</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* End Second section */}
        {/* Start Third section */}
        <div className="col-lg-12" style={{ paddingRight: "0" }}>
          {/* Start course type */}
          <div className={style.read_more_third_section}>
            <div className="container">
              <div className={style.read_more_header}>
                <h5>Course types</h5>
              </div>
              <div className="row">
                <CourseTypeCard
                  typeIcon={faCrown}
                  typeTitle="VIP1"
                  typeText="The course includes only one trainee with the lecturer"
                />
                <CourseTypeCard
                  typeIcon={faCrown}
                  typeTitle="VIP2"
                  typeText="The course includes only trainees with the lecturer"
                />
                <CourseTypeCard
                  typeIcon={faUserGroup}
                  typeTitle="Group"
                  typeText="The course includes a group of trainees with the lecturer"
                />
              </div>
            </div>
          </div>
          {/* End course type */}
        </div>
        {/* End Third section */}
        {/* Start Forth section */}
        <div className="col-lg-12" style={{ paddingRight: "0" }}>
          {/* Start Register form */}
          <div className={style.read_more_fourth_section}>
            <div className="container">
              <div className={style.register_now}>
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
          </div>
          {/* End Register form */}
        </div>
        {/* End Forth section */}
      </div>
    </div>
  );
};

export default ReadMore;
