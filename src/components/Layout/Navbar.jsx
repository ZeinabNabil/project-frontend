import React from 'react';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../../css/Layout/Navbar.module.css';
import logo from '../../images/logo.png';
import {
  faEnvelopeOpenText,
  faLocationArrow,
  faMobileScreenButton,
  faRightToBracket,
  faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className={style.header}>
      {/* ----------------------start topbar----------------- */}
      <div className={style.topbar}>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className={style.contactInfo}>
            <div className={style.socialLinks}>
              <a href="#">
                <FontAwesomeIcon
                  className={style.icon}
                  icon={faFacebookF}
                  style={{ paddingLeft: '10px', paddingRight: '10px' }}
                />
              </a>
              <a href="#">
                <FontAwesomeIcon className={style.icon} icon={faInstagram} />
              </a>
              <a href="#">
                <FontAwesomeIcon className={style.icon} icon={faLinkedinIn} />
              </a>
            </div>
            <div className={style.address}>
              <p>Dubai, Deira, Wasel Business Center, 7th floor, office 701</p>
              <FontAwesomeIcon className={style.icon} icon={faLocationArrow} />
            </div>
            <div className={style.mail}>
              <p>info@innovation.ae</p>
              <FontAwesomeIcon
                className={style.icon}
                icon={faEnvelopeOpenText}
              />
            </div>
            <div className={style.phone}>
              <p>(+971) 58 674 7427</p>
              <FontAwesomeIcon
                className={style.icon}
                icon={faMobileScreenButton}
              />
            </div>
            <div className={style.sitelogo}>
              <img src={logo} />
            </div>
          </div>
        </div>
      </div>
      {/* -----------------------end topbar--------------------- */}
      <div className={style.nav}>
        <div className="col-lg-12 col-md-6 col-sm-12">
          <nav className="navbar navbar-expand-lg " style={{width: "75%", margin:"auto"}} >
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <div className={style.navbtns}>
                        <Link to="/auth/register" className={style.join_login}>
                          Join us
                          <FontAwesomeIcon
                            className={style.icon}
                            icon={faUserGraduate}
                          />
                        </Link>
                        <Link to="/auth/login" className={style.join_login}>
                          Log in
                          <FontAwesomeIcon
                            className={style.icon}
                            icon={faRightToBracket}
                          />
                        </Link>
                  </div>
                <ul className="navbar-nav" style={{display:"flex" , flexWrap:"wrap" , justifyContent:"center"}}>
                  <li className="nav-item">
                    <Link to="/"
                      className="nav-link active"
                      style={{ color: 'white', fontWeight: 'bold' }}
                      aria-current="page"
                      href="#"
                    
                    >
                      MAIN
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      style={{ color: 'white', fontWeight: 'bold' }}
                      href="#"
                    >
                      WHO ARE WHE
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      style={{ color: 'white', fontWeight: 'bold' }}
                      href="#"
                    >
                      CONNECT WITH US
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      style={{ color: 'white', fontWeight: 'bold' }}
                      href="#"
                    >
                      IELTS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      style={{ color: 'white', fontWeight: 'bold' }}
                      href="#"
                    >
                      EMSAT
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      style={{ color: 'white', fontWeight: 'bold' }}
                      href="#"
                    >
                      ICDL
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      style={{ color: 'white', fontWeight: 'bold' }}
                      href="#"
                    >
                      MANAGEMENT COURSES
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      style={{ color: 'white', fontWeight: 'bold' }}
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      COMPUTER COURSES
                    </a>

                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      style={{ color: 'white', fontWeight: 'bold' }}
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      LANGUAGE COURSES
                    </a>

                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
