import React, { useEffect, useState } from 'react';
import style from '../../css/ContactUs/Contactus.module.css';
import {
  faClock,
  faMailBulk,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { Accordion, Form } from 'react-bootstrap';
import Cards from '../Landingpage/Cards';
import LandingPicArea from '../Layout/LandingPicArea';
import InquiryForm from './InquiryForm';
import { useTranslation } from 'react-i18next';
const Contactus = (props) => {
  useEffect(() => {
    document.title = 'CONTACT US';
  }, []);
  const { t, i18n } = useTranslation();
  return (
    <div style={{ backgroundColor: 'rgba(128, 128, 128, 0.092)' }}>
      <LandingPicArea header={t('contact_header')} text={t('contact_text')} />
      {/* ----------------------------Start Cards Section------------------------------- */}
      <div className={style.contactcards}>
        <section className={style.cardsSection}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  {/* <-------------------------------start calling card-----------------------------*/}
                  <Cards
                    icon={faClock}
                    title={t('contact_workhours_header')}
                    text={t('contact_workhours_body')}
                    aos={{
                      aos: 'fade-right',
                      offset: '300',
                      easing: 'ease-in-sine',
                      duration: '800',
                    }}
                  />
                  <Cards
                    icon={faMailBulk}
                    title={t('contact_email_header')}
                    text={t('contact_email_body')}
                    aos={{
                      aos: 'fade-down',
                      offset: '300',
                      easing: 'ease-in-sine',
                      duration: '1000',
                      delay: '300',
                    }}
                  />
                  <Cards
                    icon={faPhone}
                    title={t('contact_call_header')}
                    text={t('phoneNumber1') + '/' + t('phoneNumber2')}
                    aos={{
                      aos: 'fade-left',
                      offset: '300',
                      easing: 'ease-in-sine',
                      duration: '1000',
                      delay: '600',
                    }}
                  />
                  {/* <-------------------------------end calling card-----------------------------*/}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* -------------------------------------------End Cards section--------------------------------------------  */}
      {/* -----------------------------------start questions & inquiries section------------------------------- */}
      <div className={style.qusestion_inquiry}>
        <div className="row" style={{ margin: '0' }}>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={style.questions}>
              <div className={style.title}>{t('titleInquires')}</div>
              <Accordion className={style.accordian}>
                {t('commonsQuestions', { returnObjects: true }).map(
                  (question, index) => (
                    <Accordion.Item
                      key={index}
                      eventKey={index}
                      className={style.accordianitem}
                    >
                      <Accordion.Header>
                        <div className={style.accordianHeader}>
                          {question.question}
                        </div>
                      </Accordion.Header>
                      <Accordion.Body className={style.accordian_body}>
                        {question.answer}
                      </Accordion.Body>
                    </Accordion.Item>
                  )
                )}
              </Accordion>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={style.inquiries}>
              <div className={style.title}>{t('inquiries_title')}</div>
              <div className={style.formContainer}>
                <InquiryForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------end questions sections---------------------- */}
    </div>
  );
};

export default Contactus;
