import React from 'react';
import { Link } from 'react-router-dom';
// CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../../css/Layout/Navbar.module.css';
import {
  faRightToBracket,
  faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';
// Redux
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/user.action';
// Components
import Topbar from './Topbar';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = (props) => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  const { isAuthenticated, currentUser } = props.user;
  const navItems = t('navbarItems', { returnObjects: true });

  const onLogoutClick = () => {
    props.logoutUser(navigate, t('logoutMessage'));
  };
  const guest = () => {
    return (
      <div className={style.navbtns}>
        <span>
          <Link to="/auth/register" className={style.join_login}>
            {t('join_btn')}
            <FontAwesomeIcon className={style.icon} icon={faUserGraduate} />
          </Link>
        </span>
        <span>
          <Link to="/auth/login" className={style.join_login}>
            {t('login_btn')}
            <FontAwesomeIcon className={style.icon} icon={faRightToBracket} />
          </Link>
        </span>
      </div>
    );
  };
  const user = () => {
    return (
      <>
        <li className="nav-item">
          <Link
            className={`nav-link active ${style.nav_link}`}
            aria-current="page"
            to="/profile"
          >
            {t('profile')}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link active ${style.nav_link}`}
            aria-current="page"
            to="/"
            onClick={onLogoutClick}
          >
            {t('logout')}
          </Link>
        </li>
      </>
    );
  };
  const admin = () => {
    return (
      <>
        <li className="nav-item">
          <Link
            className={`nav-link active ${style.nav_link}`}
            aria-current="page"
            to="/dashboard/home"
          >
            {t('dashboardItem')}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link active ${style.nav_link}`}
            aria-current="page"
            to="/"
            onClick={onLogoutClick}
          >
            {t('logout')}
          </Link>
        </li>
      </>
    );
  };
  const renderItems = () => {
    if (currentUser.role == 0) {
      return user();
    }
    if (currentUser.role != 0) {
      return admin();
    }
    return null;
  };
  return (
    <div className={style.header}>
      {/* ----------------------start topbar----------------- */}
      <Topbar />
      {/* -----------------------end topbar--------------------- */}
      {/* -------------------------start navbar--------------------- */}
      <div className={`${style.nav} `}>
        <nav className={`navbar navbar-expand-lg ${style.navbar}`}>
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
              <ul className={`navbar-nav ${style.navbar_nav}`}>
                {navItems.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <Link
                      className={`nav-link active ${style.nav_link}`}
                      aria-current="page"
                      to={item.link}
                    >
                      {item.name.toUpperCase()}
                    </Link>
                  </li>
                ))}
                {isAuthenticated ? renderItems() : null}
                <li className="nav-item dropdown">
                  <a
                    className={`nav-link dropdown-toggle ${style.langs_dropdown}`}
                    role="button"
                    id="languages"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {t('langs')}
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="langs">
                    <li
                      className={`nav-link ${style.lang}`}
                      onClick={() => {
                        i18n.changeLanguage('ar');
                        navigate('/');
                      }}
                    >
                      {t('Arabic')}
                    </li>
                    <li
                      className={`nav-link active ${style.lang}`}
                      onClick={() => {
                        i18n.changeLanguage('en');
                        navigate('/');
                      }}
                    >
                      {t('English')}
                    </li>
                  </ul>
                </li>
                <li className="nav-item">{!isAuthenticated ? guest() : ''} </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* -------------------------End navbar--------------------- */}
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, { logoutUser })(Navbar);
