import React from 'react';
import style from '../../css/Layout/Footer.module.css';
import logo from '../../images/logo/logo.png';
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faLinkedinIn,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={style.footer}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className={style.main_links}>
              <h3 className="text-center">{t('mainLinks')}</h3>
              <ul>
                {t('navbarItems', { returnObjects: true }).map(
                  (item, index) => (
                    <li key={index}>
                      <Link to={item.link}>{item.name}</Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h3 className="text-center">{t('contactUs')}</h3>
            <div className={style.social}>
              <span>
                <Link to="//www.facebook.com/innovation.languages">
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
              </span>
              <span>
                <Link to="//www.instagram.com/innovation.languages.institute/">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </span>
              <span>
                <Link to="//twitter.com/languagues">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </span>
              <span>
                <Link to="//www.linkedin.com/in/innovation-languagues-b93a97249/">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
              </span>
            </div>
            <span className={style.whatsapp}>
              <FontAwesomeIcon icon={faWhatsapp} /> {t('phoneNumber1')}
            </span>
            <span className={style.whatsapp}>
              <FontAwesomeIcon icon={faWhatsapp} /> {t('phoneNumber2')}
            </span>
            <p>{t('socialContactus')}</p>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className={style.logo}>
              <img src={logo} />
            </div>
          </div>
          <hr />
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={style.copyRights}>
              &copy; {t('footer_copyrights')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
