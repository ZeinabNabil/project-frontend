import React, { useEffect, useState } from 'react';
import style from "../../css/Layout/Contactus.module.css"
import Cards from "./Cards";
import {
  faFileLines,
  faLightbulb,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { Accordion, Form } from "react-bootstrap";
import InquriyInput from './InquiryInput';


const Contactus = (props) =>{
  const [form, setForm] = useState({
    name: '',
    mobilenumber: '',
    email: '',
    inquiries: '',
  });
  const onInputChange = (e) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };
  // const { errors } = props.error;
  

    return <div style={{backgroundColor: "rgba(128, 128, 128, 0.092)"}}>
              {/* --------------------------start help area--------------------------*/}
          <div className={style.helpArea}>
            <div className="col-lg-6 col-md-6 col-sm-6">
        <div className={style.helpInstruction}>
          <div className="container">
            <div className="row">
              <div className=" col-lg-12 col-md-12 col-sm-12">
                <h1>
                Need help?
                </h1>
                <p>
                For more information about our services and the courses we offer, you can contact our educational consultants and get a free consultation, you can also contact us via phone number or email, or you can visit us at any time you want during the business hours shown below
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
          {/* --------------------------end help instruction--------------------------*/}
       {/* ----------------------------Start Cards Section------------------------------- */}
       <div className={style.contactcards}>
       <section className={style.cardsSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {/* <-------------------------------start calling card-----------------------------*/}
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className={style.card}>
                    <Cards
                      icon={faUserGraduate}
                      title="Specialized Lectures"
                      text="In all areas, whether in language education, preparation for the Emsat exam or developing computer skills."
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className={style.card}>
                    <Cards
                      icon={faFileLines}
                      title="Placement Tests"
                      text="To first determine the level of the trainee and then evaluate his progress periodically during the levels of the training course"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className={style.card}>
                    <Cards
                      icon={faLightbulb}
                      title="Interactive Courses"
                      text="It aims to develop the capabilities of the trainees and direct them to the right path"
                    />
                  </div>
                </div>
                {/* <-------------------------------end calling card-----------------------------*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      {/* -------------------------------------------End Cards section--------------------------------------------  */}
      {/* ---------------------------------start visit us section------------------------------- */}
      <div className={style.visitus}>
        visit us
      </div>
      {/* -------------------------------------end visit us section--------------------------- */}
      {/* -----------------------------------start questions & inquiries section------------------------------- */}
        <div className={style.qusestion_inquiry}>
          <div className="row" style={{margin:"0"}}>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className={style.questions}>
                <div className={style.title}>
                  Common questions
                </div>
                <Accordion className={style.accordian}>
                      <Accordion.Item
                        eventKey="0"
                        className={style.accordianitem}
                      >
                        <Accordion.Header>
                          <div className={style.accordianHeader}>Where is the Institute's website in the United Arab Emirates?</div>
                        </Accordion.Header>
                        <Accordion.Body className={style.accordian_body}>
                        The Institute is located in the heart of Dubai, Deira District, Port Saeed Street, Wasel Business Central Building,7th Floor, Office No. 701 Jani Deira City Center.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item
                        eventKey="1"
                        className={style.accordianitem}
                      >
                        <Accordion.Header>
                          <div className={style.accordianHeader}>Is the institute accredited by the United Arab Emirates?</div>
                        </Accordion.Header>
                        <Accordion.Body className={style.accordian_body}>
                        All certificates issued by the institute are accredited by the Knowledge and Human Development Authority in Dubai, and they are recognized by all government and private agencies, institutions, and companies.
                        The institute is also distinguished by local and international accreditations, and holds the ISO certificate for quality (9001:2015).
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item
                        eventKey="2"
                        className={style.accordianitem}
                      >
                        <Accordion.Header>
                          <div className={style.accordianHeader}>What are the services and courses offered by the Ivan Illich Institute ?</div>
                        </Accordion.Header>
                        <Accordion.Body className={style.accordian_body}>
                          <ul>
                          <li>English language courses at all levels.</li>
                         <li> Training courses to teach different languages ​​fluently (Russian - French - German - Hebrew - Turkish and many more).</li>
                          <li>Preparation courses for passing the International English Language Testing System (IELTS).</li>
                         <li> Preparation courses for passing the International Test of English (TOFEL).</li>
                          <li>Training courses to pass the standard ems exam in all required subjects (Arabic language, English language, mathematics, physics, chemistry, science and biology, computer science).</li>
                          <li>Strengthening and qualification courses in the field of computer and design (such as ICDL, programming and web design courses, Adobe programs).</li>
                          <li>Specialized courses in professional and administrative training and development such as (Business Administration, Human Resources, Accounting and Finance, Security and Customs Law, Customer Service and Institutional Excellence, Artificial Intelligence and many more).</li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item
                        eventKey="3"
                        className={style.accordianitem}
                      >
                        <Accordion.Header>
                          <div className={style.accordianHeader}>What are the details and study system at the institute?</div>
                        </Accordion.Header>
                        <Accordion.Body className={style.accordian_body}>
                          <h1>Attendance methods: </h1>
                          <ul>
                          <li>My presence with the lecturer within the halls of the Institute.</li>
                          <li> Remote (online) broadcast live with the lecturer through the Zoom application or other applications.</li>
                          </ul>
                          <h1>Subscription types: </h1>
                          <ul>
                          <li>Private subscription (VIP1): where the trainee takes the course privately, alone with the lecturer.</li>
                          <li>Private subscription (VIP2): where the trainee takes the course privately with only another trainee and the lecturer.</li>
                          <li>Group subscription: where the trainee takes the course collectively with a group of trainees and the lecturer.</li>
                          </ul>
                          <h1>other details: </h1>
                         The Institute provides a flexible schedule and hours for the trainee, morning and evening, in accordance with his special circumstances, in order to achieve the greatest possible benefit from the course. The institute includes a selection of trainers, lecturers and professors, whether Arab or foreign, and the trainee can choose that according to his desire.
                        </Accordion.Body >
                      </Accordion.Item>
                      <Accordion.Item
                        eventKey="4"
                        className={style.accordianitem}
                      >
                        <Accordion.Header>
                          <div className={style.accordianHeader}>How to book and register?</div>
                        </Accordion.Header>
                        <Accordion.Body className={style.accordian_body}>
                         <h1>After communicating with the educational advisor and agreeing on the details of the training course, the steps of the remote registration process are as follows: </h1>
                         <ul>
                            <li>Submit a copy of the personal identity and the full name that will be written in the certificate.</li>
                            <li>Send the trainee's contact information, such as the mobile number and email.</li>
                            <li>A copy of the transfer notice for course costs in case of electronic payment.</li>
                          </ul>
                          <h1>Or the trainee can register, book and pay the fees directly within the institute's headquarters in the reception department.</h1>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item
                        eventKey="5"
                        className={style.accordianitem}
                      >
                        <Accordion.Header>
                          <div className={style.accordianHeader}>
                          How to book IELTS, TOEFL and EMS tests?
                          </div>
                        </Accordion.Header>
                        <Accordion.Body className={style.accordian_body}>
                        You can contact our educational consultants at the institute to help you understand the mechanism of reservation and registration within any emirate in the United Arab Emirates.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item
                        eventKey="6"
                        className={style.accordianitem}
                      >
                        <Accordion.Header>
                          <div className={style.accordianHeader}>
                          What are the costs of training courses?
                          </div>
                        </Accordion.Header>
                        <Accordion.Body className={style.accordian_body}>
                        Prices vary according to the chosen course, number of hours, duration of study, and type of study within a group or privately, as mentioned previously, but in general, our prices are suitable for all groups and enjoy flexibility, and the Institute offers a lot of offers (you can register your information to keep you informed of the latest offers and discounts through Entering your information within the offer form at the footer of the page): We also offer discounts for Fazaa, Homeland Protection and Happiness card holders, and there is a special card for the Ivan Ilyich Institute.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className={style.inquiries}>
                <div className={style.title}>
                  Send us your inquiries
                </div>
                <div className={style.formContainer}>
                  <form style={{width:"60%"}}>
                    <InquriyInput 
                      name="name"
                      onChange={onInputChange}
                      value={form.name}
                      labelName="Full name"
                      type="text"
                      placeholder=""
                      
                    />
                    <InquriyInput 
                      name="mobilenumber"
                      onChange={onInputChange}
                      value={form.mobilenumber}
                      labelName="Mobile Number"
                      type="text"
                      placeholder=""
                    />
                    <InquriyInput 
                      name="email"
                      onChange={onInputChange}
                      value={form.email}
                      labelName="Email"
                      type="email"
                      placeholder=""
                    />
                     <div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <label
                      className={style.formlabel}
                      style={{ color: 'black' , padding:"4px" , fontWeight:"bold" }}
                    >
                     Inquiries
                    </label>
                  </div>
                  <textarea
                    className="form-control"
                    style={{ width: '100%', marginTop: '5px' }}
                    rows={4}
                    onChange={onInputChange}
                    value={form.inquiries}s
                    name="inquiries"
                    type="text"
                    placeholder=""
                  ></textarea>
                </div>
                  <div className={style.sendmsg_btn}>
                    <button className="btn btn-primary">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
      {/* -------------------------------end questions sections---------------------- */}
    </div>
}

export default Contactus;