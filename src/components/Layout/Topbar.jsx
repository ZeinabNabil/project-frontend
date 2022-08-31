import React from 'react';

// CSS
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faSnapchat,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelopeOpenText,
  faMobileScreenButton,
} from '@fortawesome/free-solid-svg-icons';
import style from '../../css/Layout/Navbar.module.css';

// Images
import logo from '../../images/logo/logo.png';

//Componenrs
import TopbarContent from './TopbarContent';
import Social from './Social';
import { useTranslation } from 'react-i18next';
const Topbar = () => {
  const { t } = useTranslation();
  return (
    <div className={style.topbar}>
      <div className={style.contactInfo}>
        <div className="row">
          <div className="col-lg-2 col-md-12 col-sm-12">
            <div className={style.socialLinks}>
              <Social
                to="//www.facebook.com/innovation.languages"
                className={style.icon}
                icon={faFacebook}
              />
              <Social
                to="//www.instagram.com/innovation.languages.institute/"
                className={style.icon}
                icon={faInstagram}
              />
              <Social
                to="//www.linkedin.com/in/innovation-languagues-b93a97249/"
                className={style.icon}
                icon={faLinkedinIn}
              />
              <Social
                to="//twitter.com/languagues"
                className={style.icon}
                icon={faTwitter}
              />
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className={style.topbarContent}>
              <TopbarContent
                className={style.mail}
                text="info@innovationinstituteuae.com"
                icon={faEnvelopeOpenText}
              />
              <TopbarContent
                className={style.snapm}
                text="innovationlang"
                icon={faSnapchat}
              />
              <TopbarContent
                className={style.phone}
                text={t('phoneNumber1')}
                icon={faMobileScreenButton}
              />
              <TopbarContent
                className={style.phone}
                text={t('phoneNumber2')}
                icon={faMobileScreenButton}
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-sm-12">
            <div className={style.sitelogo}>
              <img src={logo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
