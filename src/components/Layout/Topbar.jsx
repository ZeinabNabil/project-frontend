import React from 'react';
// CSS
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelopeOpenText,
  faLocationArrow,
  faMobileScreenButton,
} from '@fortawesome/free-solid-svg-icons';
import style from '../../css/Layout/Navbar.module.css';
import logo from '../../images/logo.png';
import TopbarContent from './TopbarContent';
import Social from './Social';

const Topbar = () => {
  return (
    <div className={style.topbar}>
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className={style.contactInfo}>
          <div className={style.socialLinks}>
            <Social to="#" className={style.icon} icon={faFacebook} />
            <Social to="#" className={style.icon} icon={faInstagram} />
            <Social to="#" className={style.icon} icon={faLinkedinIn} />
          </div>
          <TopbarContent
            className={style.address}
            text="Dubai, Deira, Wasel Business Center, 7th floor, office 701"
            icon={faLocationArrow}
          />
          <TopbarContent
            className={style.mail}
            text="info@innovationinstituteuae.com"
            icon={faEnvelopeOpenText}
          />
          <TopbarContent
            className={style.phone}
            text="(+971) 58 674 7427"
            icon={faMobileScreenButton}
          />
          <div className={style.sitelogo}>
            <img src={logo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
