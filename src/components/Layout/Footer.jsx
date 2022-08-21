import React from 'react';
import style from '../../css/Layout/Footer.module.css';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    // --------------------start footer------------------
    <div className={style.footer}>
    <div className={style.footerelements}>
    <div className="row">
      <div className="col-lg-6 col-md-9 col-sm-9">
        <div className={style.footer_left}>
        <div className={style.footer_content}>
          &copy; {t('footer_copyrights')}
        </div>
      </div>
      </div>
      <div className="col-lg-6 col-md-3 col-sm-3">
      <div className={style.footer_right}>
        <div className={style.footer_content}
        >{t('footer_contact')}
          <div className={style.social}>
          <a href="#">
            <FontAwesomeIcon className={style.icon} icon={faFacebookF} />
          </a>
          <a href="#">
            <FontAwesomeIcon className={style.icon} icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon className={style.icon} icon={faLinkedinIn} />
          </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  </div>
    
  );
};

export default Footer;

 