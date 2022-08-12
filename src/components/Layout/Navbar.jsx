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
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/user.action';

const Navbar = (props) => {
  const { isAuthenticated, currentUser } = props.user;
  const navItems = [
    { name: 'main', link: '/' },
    { name: 'Who are we', link: '/aboutus' },
    { name: 'contact with us', link: '/contact' },
    { name: 'IELTS', link: '/ielts', cat: true },
    { name: 'EMSAT', link: '/emsat', cat: true },
    { name: 'ICDL', link: '/icdl', cat: true },
    { name: 'Management Courses', link: '/management', cat: true },
    { name: 'Computer Courses', link: '/computer', cat: true },
    { name: 'Language Courses', link: '/language', cat: true },
  ];
  const onLogoutClick = () => {
    props.logoutUser();
  };
  const guest = () => {
    return (
      <div className={style.navbtns}>
        <Link to="/auth/register" className={style.join_login}>
          Join us
          <FontAwesomeIcon className={style.icon} icon={faUserGraduate} />
        </Link>
        <Link to="/auth/login" className={style.join_login}>
          Log in
          <FontAwesomeIcon className={style.icon} icon={faRightToBracket} />
        </Link>
      </div>
    );
  };
  const user = () => {
    return (
      <>
        <li className="nav-item">
          <Link
            className="nav-link active"
            style={{ color: 'white', fontWeight: 'bold' }}
            aria-current="page"
            to="/profile"
          >
            PROFILE
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link active"
            style={{ color: 'white', fontWeight: 'bold' }}
            aria-current="page"
            to="/"
            onClick={onLogoutClick}
          >
            LOGOUT
          </Link>
        </li>
      </>
    );
  };
  const renderItems = () => {
    if (currentUser.role == 0) {
      return user();
    }

    return null;
  };
  return (
    <div className={style.header}>
      {/* ----------------------start topbar----------------- */}
      <div className={style.topbar}>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className={style.contactInfo}>
            <div className={style.socialLinks}>
              <Link to="#">
                <FontAwesomeIcon
                  className={style.icon}
                  icon={faFacebookF}
                  style={{ paddingLeft: '10px', paddingRight: '10px' }}
                />
              </Link>
              <Link to="#">
                <FontAwesomeIcon className={style.icon} icon={faInstagram} />
              </Link>
              <Link to="#">
                <FontAwesomeIcon className={style.icon} icon={faLinkedinIn} />
              </Link>
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
      {/* -------------------------start navbar--------------------- */}
      <div className={style.nav}>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <nav
            className="navbar navbar-expand-lg "
            style={{ width: '75%', margin: 'auto' }}
          >
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
                {!isAuthenticated ? guest() : ''}
                <ul
                  className="navbar-nav"
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                  }}
                >
                  {navItems.map((item, index) => (
                    <li className="nav-item" key={index}>
                      {item.cat ? (
                        <Link
                          className="nav-link active"
                          style={{ color: 'white', fontWeight: 'bold' }}
                          aria-current="page"
                          to={`/courses${item.link}`}
                        >
                          {item.name.toUpperCase()}
                        </Link>
                      ) : (
                        <Link
                          className="nav-link active"
                          style={{ color: 'white', fontWeight: 'bold' }}
                          aria-current="page"
                          to={item.link}
                        >
                          {item.name.toUpperCase()}
                        </Link>
                      )}
                    </li>
                  ))}
                  {isAuthenticated ? renderItems() : null}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    // ---------------------end navbar-----------------s
  );
};
const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, { logoutUser })(Navbar);
