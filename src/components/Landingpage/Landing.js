import React, { useEffect } from 'react';
import style from '../../css/Landing/Landing.module.css';
import Cards from './Cards';
import {
  faFileLines,
  faLightbulb,
  faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';
import Section from './Section';
import logo from '../../images/logo.png';
import ReviewsCard from './ReviewsCard';
import { Accordion } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getAllCourses } from '../../actions/course.action';
import LandingPicArea from '../Layout/LandingPicArea';
import aos from 'aos';
import SvgDownWaves from '../SvgDownWaves';
import SvgUpWaves from './../SvgUpWaves';
import { useTranslation } from 'react-i18next';
import LoadingData from '../../LoadingData';
const Landing = (props) => {
  const { t, i18n } = useTranslation();
  console.log(i18n);
  useEffect(() => {
    aos.init();
    props.getAllCourses();
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
    console.log(t('categories', { returnObjects: true })[0]);
    const computer = courses.courses.filter((course) => {
      return course.category === 'computer courses';
    });
    const language = courses.courses.filter((course) => {
      return course.category === 'language courses';
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
        />
        <Section
          title={t('categories', { returnObjects: true })[1].toUpperCase()}
          courses={language}
        />
        <Section
          title={t('categories', { returnObjects: true })[2].toUpperCase()}
          courses={emsat}
        />
        <Section
          title={t('categories', { returnObjects: true })[3].toUpperCase()}
          courses={ielts}
        />
        <Section
          title={t('categories', { returnObjects: true })[4].toUpperCase()}
          courses={icdl}
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
                  <div
                    className="col-lg-6 col-md-12 col-sm-12 section-accordian "
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
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
                            {t('messageInstitute', { returnObjects: true }).map(
                              (message) => {
                                return <li>{message}</li>;
                              }
                            )}
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
                              (goal) => {
                                return <li>{goal}</li>;
                              }
                            )}
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className="col-lg-5 col-md-12 col-sm-12 align-self-center">
                    <div className={style.logo}>
                      <img src={logo} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* --------------------------start client section-----------------------  */}
        <div className={style.clients}>
          <div className={style.clientelement}>
            <section>
              <div className="container">
                <div className="row">
                  <div className="col-lg-9 col-md-12 col-sm-12 section-pics">
                    <div
                      className={style.clientlogos}
                      style={{ borderRight: ' solid 2px #DDDDDD' }}
                    >
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className={style.imgs}>
                          <img src={logo} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-12 col-sm-12 align-self-center">
                    <div className={style.ourclients}>
                      <h2>{t('clients')}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* --------------------------End client section-----------------------  */}
      </div>
      {/* ---------------------------start reviews section---------------------  */}
      <SvgUpWaves />
      <div className={style.reviews}>
        <div className={style.title}>{t('reviews_Title')}</div>
        <div className={style.reviewscards}>
          <div className="row">
            <ReviewsCard
              text={t('review_body')}
              img={logo}
              username={t('review_username')}
              role={t('review_role')}
            />
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
});
export default connect(mapStateToProps, { getAllCourses })(Landing);
