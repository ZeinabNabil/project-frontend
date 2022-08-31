import React, { useEffect, useState } from 'react';
import style from '../../css/Authentication/Authentication.module.css';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import authImage from '../../images/auth/login-register1.png';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import Loading from './../../Loading';
toast.configure();
const MainAuthPage = (props) => {
  const [load, setload] = useState(false);
  useEffect(() => {
    setload(true);
    setTimeout(() => {
      setload(false);
    }, 1500);
  }, []);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { isAuthenticated } = props.user;
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, []);
  return (
    <>
      {' '}
      {!load ? (
        <div className={style.main_auth_page}>
          <div className={style.auth_container}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className={style.form_container}>
                  <span
                    className={style.return}
                    style={
                      i18n.resolvedLanguage === 'ar'
                        ? { left: '0' }
                        : { right: '0' }
                    }
                  >
                    <Link to="/">X</Link>
                  </span>
                  <Outlet />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className={style.img_container}>
                  <img src={authImage} alt="main" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading loading={load} />
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps)(MainAuthPage);
