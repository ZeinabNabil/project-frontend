 import React from "react";
  import style from "../../css/Layout/Footer.module.css"
  import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faTwitter,
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {
    faEnvelopeOpenText,
    faLocationArrow,
    faMobileScreenButton,
  } from "@fortawesome/free-solid-svg-icons";
  import logo from "../../images/logo.png"
  
  const Footer = () => {
    return (
        // --------------------start footer-------------------
        <div className={style.footer}>
            <div  className={style.footerelements}>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className={style.title}>
                            Weekly Offers
                        </div>
                        <form>
                            <div class="mb-3">
                                <input type="text" class="form-control"  placeholder="Full name"/>
                            </div>
                            <div class="mb-3">
                                <input type="Email" class="form-control"  placeholder="Email"/>
                            </div>
                            <div class="mb-3">
                                <input type="text" class="form-control"  placeholder="Mobile number"/>
                            </div>
                            <button type="submit" class="btn btn-primary">REGISTER FOR OFFERS</button>
                        </form>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className={style.title}>
                            Main Links
                        </div>
                        <div className={style.links}>
                            <a href="#">
                            Main  
                            </a>
                            <a href="#">
                            About the institute 
                            </a>
                            <a href="#">
                            Connect with us
                            </a>
                            <a href="#">
                            IELTS preperation course
                            </a>
                            <a href="#">
                            EMSAt preparatory course
                            </a>
                            <a href="#">
                            ICDL preparatory course
                            </a>
                            <a href="#">
                            Language courses
                            </a>
                            <a href="#">
                            Management professional courses
                            </a>
                            <a href="#">
                            Computer courses
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <div className={style.lastelement}>
                            <div className={style.info}>
                                <div className={style.title}>
                                    Contact Information
                                </div>
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
                                        style={{left:"-5px"}}
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
                                        style={{paddingLeft:"15px" , paddingRight:"15px"}}
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
            </div>
        </div>
    // -------------------------end footer-----------------
    );
  };
  
  export default Footer;
  