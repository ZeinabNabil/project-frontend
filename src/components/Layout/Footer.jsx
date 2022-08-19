import React from 'react';
import style from '../../css/Layout/Footer.module.css';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelopeOpenText,
  faLocationArrow,
  faMobileScreenButton,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png';

const Footer = () => {
  return (
    // --------------------start footer------------------
    <div className={style.footer}>
    <div className={style.footerelements}>
    <div className="row">
      <div className="col-lg-6 col-md-9 col-sm-9">
        <div className={style.footer_left}>
        <div className={style.footer_content}>
          &copy; 2022 جميع حقوق النشر محفوظة لمعهد اينوفيشن
        </div>
      </div>
      </div>
      <div className="col-lg-6 col-md-3 col-sm-3">
      <div className={style.footer_right}>
        <div className={style.footer_content}
        >تواصل معنا :
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

 {/*<div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className={style.lastelement}>
              <div className={style.info}>
                <div className={style.title}>Contact Information</div>
                <div className={style.phone}>
                  <p>(+971) 58 674 7427</p>
                  <FontAwesomeIcon
                    className={style.icon}
                    icon={faMobileScreenButton}
                  />
                </div>
                <div className={style.mail}>
                  <p>info@innovation.ae</p>
                  <FontAwesomeIcon
                    className={style.icon}
                    icon={faEnvelopeOpenText}
                  />
                </div>
                <div className={style.address}>
                  <p>
                    Dubai, Deira, Wasel Business Center, 7th floor, office 701
                  </p>
                  <FontAwesomeIcon
                    className={style.icon}
                    style={{ left: '-5px' }}
                    icon={faLocationArrow}
                  />
                </div>
              </div>
              <div className={style.logo}>
                <img src={logo} />
                <div className={style.icons}>
                  <a href="#">
                    <FontAwesomeIcon
                      className={style.icon}
                      icon={faFacebookF}
                      style={{ paddingLeft: '15px', paddingRight: '15px' }}
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      className={style.icon}
                      icon={faInstagram}
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      className={style.icon}
                      icon={faLinkedinIn}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}