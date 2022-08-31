import React, { useEffect, useState } from 'react';
import style from '../../css/Landing/Landing.module.css';
import Cards from './Cards';
import {
  faFileLines,
  faLightbulb,
  faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';
import Section from './Section';
import ReviewsCard from './ReviewsCard';
import { Accordion } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  getAllCourses,
  getRegisteredCourses,
} from '../../actions/course.action';
import LandingPicArea from '../Layout/LandingPicArea';
import aos from 'aos';
import SvgDownWaves from '../SvgDownWaves';
import SvgUpWaves from './../SvgUpWaves';
import { useTranslation } from 'react-i18next';
import LoadingData from '../../LoadingData';
import { showReviews } from '../../actions/review.action';
const Landing = (props) => {
  const { t, i18n } = useTranslation();
  const { currentUser } = props.user;
  useEffect(() => {
    aos.init();
    props.getAllCourses(i18n.resolvedLanguage);
  }, [i18n.resolvedLanguage]);
  useEffect(() => {
    props.showReviews();
    document.title = 'Innovation Language Institute';
  }, []);
  var reviewsArr = [];
  const { reviews } = props.review;
  if (reviews !== null) {
    reviewsArr = [...reviews.reviews];
  }
  const { registeredCourses } = props.course;

  useEffect(() => {
    if (currentUser !== null) {
      props.getRegisteredCourses(currentUser._id, i18n.resolvedLanguage);
    }
  }, []);
  var renderContent;
  const { courses, loading } = props.course;
  if (courses === null || loading) {
    renderContent = (
      <h3 className="text-center">
        <LoadingData />
        Loading..
      </h3>
    );
  } else {
    const computer = courses.courses.filter((course) => {
      return course.category === t('catComp');
    });
    const language = courses.courses.filter((course) => {
      return course.category === t('catLang');
    });
    const emsat = courses.courses.filter((course) => {
      return course.category === 'emsat';
    });
    const icdl = courses.courses.filter((course) => {
      return course.category === 'icdl';
    });
    const ielts = courses.courses.filter((course) => {
      return course.category === 'ielts';
    });
    renderContent = (
      <>
        <Section
          title={t('categories', { returnObjects: true })[0].toUpperCase()}
          courses={computer}
          registeredCourses={
            registeredCourses !== null ? registeredCourses : null
          }
        />
        <Section
          title={t('categories', { returnObjects: true })[1].toUpperCase()}
          courses={language}
          registeredCourses={
            registeredCourses !== null ? registeredCourses : null
          }
        />
        <Section
          title={t('categories', { returnObjects: true })[2].toUpperCase()}
          courses={emsat}
          registeredCourses={
            registeredCourses !== null ? registeredCourses : null
          }
        />
        <Section
          title={t('categories', { returnObjects: true })[3].toUpperCase()}
          courses={ielts}
          registeredCourses={
            registeredCourses !== null ? registeredCourses : null
          }
        />
        <Section
          title={t('categories', { returnObjects: true })[4].toUpperCase()}
          courses={icdl}
          registeredCourses={
            registeredCourses !== null ? registeredCourses : null
          }
        />
      </>
    );
  }
  return (
    <div>
      {/* ------------------------------Start landing area---------------------------- */}
      <LandingPicArea header={t('instituteName')} text={t('instituteDesc')} />

      {/* ----------------------------Start Cards Section------------------------------- */}
      <section className={style.cardsSection}>
        <div className="container" style={{ width: '100%' }}>
          <div className="row">
            {/* <-------------------------------start calling card-----------------------------*/}
            <Cards
              icon={faUserGraduate}
              title={t('Specializedlec_Title')}
              text={t('Specializedlec_body')}
            />
            <Cards
              icon={faFileLines}
              title={t('placementtests_Title')}
              text={t('placementtests_body')}
            />
            <Cards
              icon={faLightbulb}
              title={t('Interactivecourses_Title')}
              text={t('Interactivecourses_body')}
            />
          </div>
          {/* <-------------------------------end calling card-----------------------------*/}
        </div>
      </section>
      {/* -------------------------------------------End Cards section--------------------------------------------  */}
      {/* --------------------------start similar sections (calling array of sections)---------------------------  */}
      <div className={style.viewcourses}>{renderContent}</div>
      <SvgDownWaves />
      {/*------------------------------end similar sections---------------------------------------*/}
      <div className={style.features_clients_container}>
        {/* ---------------------------------Start featuer section----------------------  */}
        <div className={style.features}>
          <div className={style.title}>{t('features_Title')}</div>
          <div className={style.featureselements}>
            <section>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 section-accordian ">
                    <div className={style.vms}>
                      <Accordion className={style.accordian}>
                        <Accordion.Item
                          eventKey="0"
                          className={style.accordianitem}
                        >
                          <Accordion.Header>
                            <div className={style.accordianHeader}>
                              {t('accordion_vision_header')}
                            </div>
                          </Accordion.Header>
                          <Accordion.Body className={style.accordian_body}>
                            {t('accordion_vision_body')}
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item
                          eventKey="1"
                          className={style.accordianitem}
                        >
                          <Accordion.Header>
                            <div className={style.accordianHeader}>
                              {t('accordion_message_header')}
                            </div>
                          </Accordion.Header>
                          <Accordion.Body className={style.accordian_body}>
                            <ul>
                              {t('messageInstitute', {
                                returnObjects: true,
                              }).map((message, index) => {
                                return <li key={index}>{message}</li>;
                              })}
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item
                          eventKey="2"
                          className={style.accordianitem}
                        >
                          <Accordion.Header>
                            <div className={style.accordianHeader}>
                              {t('accordion_goals_header')}
                            </div>
                          </Accordion.Header>
                          <Accordion.Body className={style.accordian_body}>
                            <ul>
                              {t('goalStratgic', { returnObjects: true }).map(
                                (goal, index) => {
                                  return <li key={index}>{goal}</li>;
                                }
                              )}
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* ---------------------------start reviews section---------------------  */}
      <SvgUpWaves />
      <div className={style.reviews}>
        <div className={style.title}>{t('reviews_Title')}</div>
        <div className={style.reviewscards}>
          <div className="row">
            {reviewsArr.map((review) => {
              if (review.show === true) {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-12" key={review._id}>
                    <ReviewsCard review={review} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      {/* End reviews section  */}
    </div>
    // ----------------------End landing area---------------------------
  );
};
const mapStateToProps = (state) => ({
  course: state.course,
  user: state.user,
  review: state.review,
});
export default connect(mapStateToProps, {
  getAllCourses,
  getRegisteredCourses,
  showReviews,
})(Landing);
