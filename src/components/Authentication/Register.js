import {
  faUser,
  faPhone,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import style from "../../css/Authentication/Authentication.module.css";
import FormComponent from "./FormComponents";
import { Link } from "react-router-dom";
import MainButton from "./MainButton";
import AOS from "aos";
import "aos/dist/aos.css";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onInputChange = (evt) => {
    const value = evt.target.value;
    setForm({
      ...form,
      [evt.target.name]: value,
    });
  };
  const onFormSubmit = async (evt) => {
    evt.preventDefault();
  };
  useEffect(() => {
    AOS.init();
  }, []);

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
              />
              <FormComponent
                value={form.email}
                onChange={onInputChange}
                isHasIcon="yes"
                icon={faEnvelope}
                name="email"
                type="email"
                placeholder="Enter your Email"
              />
              <FormComponent
                value={form.password}
                onInputChange={onInputChange}
                isHasIcon="yes"
                icon={faLock}
                name="password"
                type="password"
                placeholder="Enter your Password"
              />
              <FormComponent
                value={form.confirmPassword}
                onInputChange={onInputChange}
                isHasIcon="yes"
                icon={faLock}
                name="confirmPassword"
                type="password"
                placeholder="Confirm your Password"
              />
              <FormComponent
                value={form.phone}
                onChange={onInputChange}
                isHasIcon="yes"
                icon={faPhone}
                name="phone"
                type="text"
                placeholder="Enter your phone"
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

export default Register;
