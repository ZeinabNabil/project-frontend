import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import FormComponent from './FormComponents';
import {
  faUser,
  faPhone,
  faEnvelope,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import MainButton from './MainButton';
import style from '../../css/Authentication/Authentication.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createUser } from '../../actions/user.action';
const Register = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState(undefined);
  useEffect(() => {
    setError(props.error.errors);
  }, [props.error]);
  const onInputChange = (evt) => {
    const value = evt.target.value;
    setForm({
      ...form,
      [evt.target.name]: value,
    });
  };
  const onFormSubmit = (evt) => {
    evt.preventDefault();
    const userData = {
      name: form.name,
      email: form.email,
      password: form.password,
      phone: form.phone,
      confirmPassword: form.confirmPassword,
    };
    props.createUser(userData);
  };

  return (
    <div className="row" data-aos="fade-right" data-aos-duration="1000">
      <div className="col-lg-12">
        <div className={style.form_header}>
          <h3>Register</h3>
        </div>
      </div>
      <div className="col-lg-12">
        <div className={style.form_content}>
          <form onSubmit={onFormSubmit}>
            <div className="row">
              <FormComponent
                value={form.name}
                onChange={onInputChange}
                isHasIcon="yes"
                icon={faUser}
                name="name"
                type="text"
                placeholder="Enter your name"
                err={error ? error.name : ''}
              />
              <FormComponent
                value={form.email}
                onChange={onInputChange}
                isHasIcon="yes"
                icon={faEnvelope}
                name="email"
                type="email"
                placeholder="Enter your Email"
                err={error ? error.email : ''}
              />
              <FormComponent
                value={form.password}
                onChange={onInputChange}
                isHasIcon="yes"
                icon={faLock}
                name="password"
                type="password"
                placeholder="Enter your Password"
                err={error ? error.password : ''}
              />
              <FormComponent
                value={form.confirmPassword}
                onChange={onInputChange}
                isHasIcon="yes"
                icon={faLock}
                name="confirmPassword"
                type="password"
                placeholder="Confirm your Password"
                err={error ? error.confirmPassword : ''}
              />
              <FormComponent
                value={form.phone}
                onChange={onInputChange}
                isHasIcon="yes"
                icon={faPhone}
                name="phone"
                type="text"
                placeholder="Enter your phone"
                err={error ? error.phone : ''}
              />
              <MainButton buttonName="Submit" />
              <div className="col-lg-12">
                <div className={style.register_link}>
                  Already have an account?
                  <span className={style.important_link}>
                    <Link to="/auth/login">Sign in Now!</Link>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  error: state.error,
});
export default connect(mapStateToProps, { createUser })(Register);
