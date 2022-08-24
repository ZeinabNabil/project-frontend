import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import style from '../../../css/Admin/Dashboard.module.css';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../actions/user.action';
import { useTranslation } from 'react-i18next';
const AdminNavbar = (props) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { currentUser, loading } = props.user;
  var role;
  if (currentUser === null || loading) {
    role = 'Loading';
  } else {
    if (currentUser.role == 1) {
      role = t('WelcomeAdmin');
    } else if (currentUser.role == 2) {
      role = t('WelcomeAssistant');
    } else if (currentUser.role == 3) {
      role = t('WelcomeModerator');
    }
  }
  const onLogoutClick = () => {
    props.logoutUser(navigate);
  };
  return (
    <div className={style.navbar}>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className={style.top_left}>Admin Dashboard</div>
        </div>
        <div className="col-lg-8 col-md-6 col-sm-6">
          <div className={style.top_right}>
            <div className={style.lang}>
              <ul className="navbar-nav">
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
                      onClick={() => i18n.changeLanguage('ar')}
                    >
                      {t('Arabic')}
                    </li>
                    <li
                      className={`nav-link active ${style.lang}`}
                      onClick={() => i18n.changeLanguage('en')}
                    >
                      {t('English')}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className={style.navbar_icons}>{role}</div>
            <Link to="#" onClick={onLogoutClick}>
              <div className={style.navbar_icons}>
                {t('logout')} <FontAwesomeIcon icon={faSignOut} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, { logoutUser })(AdminNavbar);
