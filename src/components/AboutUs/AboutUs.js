import React, { useEffect } from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';

// style
import style from '../../css/AboutUs/Aboutus.module.css';
import 'swiper/css';
import 'swiper/css/pagination';

// Icons
import { faQuoteLeft, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Images
import founderImg from '../../images/aboutus/founderwomen.jpeg';
import founderImgM from '../../images/aboutus/founderman.jpeg';

import visionImg from '../../images/vision-message/vision.jpg';
import goalImg from '../../images/vision-message/Goal.jpg';

import departmentsIcon from '../../images/Departments.png';

import womanImg from '../../images/woman.png';
import manImg from '../../images/man.png';

// Components
import AboutUsCard from './AboutUsCard';
import CardContent from './CardContent';
import TeamNode from './TeamNode';
import logo1 from '../../images/aboutus/Logo1.png';
import logo2 from '../../images/aboutus/Logo2.png';

import SvgDownWaves from '../SvgDownWaves';
import SvgUpWaves from '../SvgUpWaves';
import Carousel from 'react-bootstrap/Carousel';
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
const AboutUs = () => {
  useEffect(() => {
    Aos.init();
    document.title = 'ABOUT US';
  }, []);
  const { t } = useTranslation();
  const detailsAboutInst = t('detailsAboutInst', { returnObjects: true });
  const childNodes = t('employeesName', { returnObjects: true });

  return (
    <div className={style.about_us}>
      {/* Start first section */}
      <div className={style.who_are_we}>
        <h1>{t('whoarewe')}</h1>
        <div className={style.logos}>
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
        </div>
      </div>
      {/* End first section */}
      {/* Start second section */}
      <div className={`${style.section_container} container`}>
        <div className="row">
          <div className="col-lg-2 col-md-6 col-sm-12">
            <div className={style.img_container}>
              <img
                className={`rounded-circle ${style.founder_img_M}`}
                src={founderImgM}
                alt="Founder image"
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12">
            <div className={style.img_container}>
              <img
                className={`rounded-circle ${style.founder_img_F}`}
                src={founderImg}
                alt="Founder image"
              />
            </div>
          </div>
          <div
            className="col-lg-8 col-md-12 col-sm-12"
            data-aos="flip-up"
            data-aos-duration="2000"
          >
            <div className={style.founders_word}>
              <span>
                <FontAwesomeIcon icon={faMicrophone} /> {t('foundersWord')}
              </span>
            </div>
          </div>
          <div
            className="col-lg-12"
            data-aos="flip-up"
            data-aos-duration="2000"
          >
            <p className={style.founder_word_p}>{t('founderWord')}</p>
          </div>
          <div className="col-lg-12">
            <div className={style.end_of_content}>
              <p>
                {t('founderM')} , {t('founder')}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End second section */}
      {/* Start third section */}
      <SvgUpWaves />
      <div className={style.gray_section}>
        <div className={`container`}>
          <div className="row">
            <div
              className="col-lg-9 col-md-12"
              data-aos="fade-in"
              data-aos-duration="2500"
            >
              <AboutUsCard cards={t('aboutuscards', { returnObjects: true })} />
            </div>
            <div className="col-lg-3">
              <div className={style.imgs_container}>
                <div
                  className="row"
                  style={{ height: '100%' }}
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                >
                  <div className={`${style.img_container}`}>
                    <img src={visionImg} alt="photo" />
                  </div>
                  <div
                    className={style.img_container}
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                  >
                    <img src={goalImg} alt="photo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SvgDownWaves />
      {/* End third section */}
      {/* Start fourth section */}
      <div className={`${style.section_container} container`}>
        <div className={style.section_title}>
          <h2>{t('detailsaboutinstitute')}</h2>
        </div>
        <div className="row">
          {detailsAboutInst.map((detail, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-duration="2000"
            >
              <div className={style.section_content}>
                <span>{detail.number}</span>
                <span>{detail.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End fourth section */}
      {/* Start fifth section */}
      <SvgUpWaves />
      <div className={style.gray_section}>
        <div className={`container`}>
          <div style={{ height: '100%' }}>
            <div className={`${style.card} card`}>
              <div
                className={`${style.card_body} card-body`}
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <div className="row">
                  {t('aboutusgoal', { returnObjects: true }).map(
                    (goal, index) => (
                      <div
                        className={`col-lg-${goal.colLg} col-md-12`}
                        key={index}
                      >
                        <CardContent card={goal} col={true} />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SvgDownWaves />
      {/* End fifth section */}
      {/* Start sixth section */}
      <div className={`${style.section_container} container`}>
        <div className={style.section_title}>
          <h2>{t('team')}</h2>
        </div>
        {/* Start team tree */}
        <div className={style.team}>
          <Tree
            lineWidth={'2px'}
            lineColor={'#494b51'}
            lineBorderRadius={'10px'}
            label={
              <TeamNode
                icon={founderImgM}
                header=""
                subHeader={t('founderM')}
                parent={true}
              />
            }
          >
            <TreeNode
              label={
                <TeamNode
                  icon={founderImg}
                  header=""
                  subHeader={t('founder')}
                  parent={true}
                />
              }
            >
              <TreeNode
                label={
                  <TeamNode
                    icon={departmentsIcon}
                    header="Assistants"
                    parent={true}
                  />
                }
              >
                {childNodes.map((node, index) => (
                  <TreeNode
                    key={index}
                    label={<TeamNode header={node} parent={false} />}
                  ></TreeNode>
                ))}
              </TreeNode>
            </TreeNode>
          </Tree>
        </div>
        {/* End team tree */}
      </div>
      {/* End sixth section */}
      {/* Start seventh section */}
      <SvgUpWaves />
      {/* End seventh section */}
    </div>
  );
};

export default AboutUs;
