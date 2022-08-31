import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import style from '../../css/Authentication/Authentication.module.css';
import { Link } from 'react-router-dom';
import FormComponent from './FormComponents';
import MainButton from './MainButton';
import { loginUser } from '../../actions/user.action';
import AOS from 'aos';
import 'aos/dist/aos.css';
import store from '../../store';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Login = (props) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    AOS.init();
  }, []);

  const onInputChange = (evt) => {
    const value = evt.target.value;
    setForm({
      ...form,
      [evt.target.name]: value,
    });
  };
  const onFormSubmit = async (evt) => {
    evt.preventDefault();
    const userData = {
      email: form.email,
      password: form.password,
    };
    props.loginUser(userData, navigate, t('loginMessageSuccess'));
  };
  useEffect(() => {
    store.dispatch({
      type: 'GET_ERRORS',
      payload: {},
    });
  }, []);
  const { errors } = props.error;

  return (
    <div className="row" data-aos="fade-right" data-aos-duration="1000">
      {/* Start the header of the form */}
      <div className="col-lg-12">
        <div className={style.form_header}>
          <h3>{t('login')}</h3>
        </div>
      </div>
      {/* End the header of the form */}

      {/* Start login form */}
      <div className="col-lg-12">
        <div className={style.form_content}>
          <form onSubmit={onFormSubmit}>
            <div className="row">
              <FormComponent
                value={form.email}
                isHasIcon="yes"
                icon={faEnvelope}
                name="email"
                type="text"
                placeholder={t('UserEmailPlaceholder')}
                onChange={onInputChange}
                err={errors ? errors.email : ''}
              />
              <FormComponent
                value={form.password}
                isHasIcon="yes"
                icon={faLock}
                name="password"
                type="password"
                placeholder={t('UserPasswordPlaceholder')}
                onChange={onInputChange}
                err={errors ? errors.password : ''}
              />
              {/* <div className="col-lg-12">
                <div className={style.important_link}>
                  <Link to="/">Sign in Now!</Link>
                </div>
              </div> */}
              <MainButton buttonName={t('login')} />
              <div className="col-lg-12">
                <div className={style.register_link}>
                  {t('donthaveaccount')}
                  <span className={style.important_link}>
                    <Link to="/auth/register">{t('registeraccount')}</Link>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* End login form */}
    </div>
  );
};
const mapStateToProps = (state) => ({
  error: state.error,
});
export default connect(mapStateToProps, { loginUser })(Login);
