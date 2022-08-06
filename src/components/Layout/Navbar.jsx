import React from "react";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from "../../css/Layout/Navbar.module.css";
import logo from "../../images/logo.png";
import {
  faEnvelopeOpenText,
  faLocationArrow,
  faMobileScreenButton,
  faRightToBracket,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  return (
    
  <div className={style.header}>
    {/* ----------------------start topbar----------------- */}
    <div className={style.topbar}>
    <div className="col-lg-12 col-md-6 col-sm-12">
        <div className={style.contactInfo}>
            <div className={style.socialLinks}>
                <a href="#">
                  <FontAwesomeIcon
                    className={style.icon}
                    icon={faFacebookF}
                    style={{paddingLeft:"10px" , paddingRight:"10px"}}
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
            <div className={style.address}>
                <p>
                  Dubai, Deira, Wasel Business Center, 7th floor, office 701
                </p>
                <FontAwesomeIcon
                  className={style.icon}
                  icon={faLocationArrow}
                />
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
          <nav class="navbar navbar-expand-lg " style={{zIndex: "1"}}>
              <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul class="navbar-nav">
                    <div className={style.navbtns}>
                    <button className={style.joinbutton}>
                      Join us
                      <FontAwesomeIcon className={style.icon} icon={faUserGraduate}/>
                    </button>
                    <button className={style.loginbutton}>
                    Log in
                      <FontAwesomeIcon className={style.icon} icon={faRightToBracket}/>
                    </button>
                    </div>
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        style={{ color: "white", fontWeight: "bold" }}
                        aria-current="page"
                        href="#"
                      >
                        MAIN
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        style={{ color: "white", fontWeight: "bold" }}
                        href="#"
                      >
                        WHO ARE WHE
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        style={{ color: "white", fontWeight: "bold" }}
                        href="#"
                      >
                        CONNECT WITH US
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        style={{ color: "white", fontWeight: "bold" }}
                        href="#"
                      >
                        IELTS
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        style={{ color: "white", fontWeight: "bold" }}
                        href="#"
                      >
                        EMSAT
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        style={{ color: "white", fontWeight: "bold" }}
                        href="#"
                      >
                        ICDL
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        style={{ color: "white", fontWeight: "bold" }}
                        href="#"
                      >
                        MANAGEMENT COURSES
                      </a>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        style={{ color: "white", fontWeight: "bold" }}
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        COMPUTER COURSES
                      </a>

                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        style={{ color: "white", fontWeight: "bold" }}
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        LANGUAGE COURSES
                      </a>

                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
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


 