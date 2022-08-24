import React from 'react';
import style from '../../css/Layout/Footer.module.css';
import logo from '../../images/logo.png';

import {
  faInstagram,
  faTwitter,
  faFacebook,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    // --------------------start footer------------------
    // <div className={style.footer}>
    //   <div className={style.footerelements}>
    //     <div className="row">
    //       <div className="col-lg-6 col-md-9 col-sm-9">
    //         <div className={style.footer_left}>
    //           <div className={style.footer_content}>
    //             &copy; {t('footer_copyrights')}
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-lg-6 col-md-3 col-sm-3">
    //         <div className={style.footer_right}>
    //           <div className={style.footer_content}>
    //             {t('footer_contact')}
    //             <div className={style.social}>
    //               <a href="#">
    //                 <FontAwesomeIcon
    //                   className={style.icon}
    //                   icon={faFacebookF}
    //                 />
    //               </a>
    //               <a href="#">
    //                 <FontAwesomeIcon
    //                   className={style.icon}
    //                   icon={faInstagram}
    //                 />
    //               </a>
    //               <a href="#">
    //                 <FontAwesomeIcon
    //                   className={style.icon}
    //                   icon={faLinkedinIn}
    //                 />
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className={style.footer}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className={style.main_links}>
              <h3 className="text-center">{t('mainLinks')}</h3>
              <ul>
                {t('navbarItems', { returnObjects: true }).map((item) => (
                  <li>
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h3 className="text-center">{t('contactUs')}</h3>
            <div className={style.social}>
              <span>
                <Link to="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
              </span>
              <span>
                <Link to="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </span>
              <span>
                <Link to="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </span>
              <span>
                <Link to="#">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </Link>
              </span>
            </div>
            <p>{t('socialContactus')}</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className={style.logo}>
              <img src={logo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
