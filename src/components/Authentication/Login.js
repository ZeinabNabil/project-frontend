import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import style from "../../css/Authentication/Authentication.module.css";
import { Link } from "react-router-dom";
import FormComponent from "./FormComponents";
import MainButton from "./MainButton";
import AOS from "aos";
import "aos/dist/aos.css";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
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
          <h3>Login</h3>
        </div>
      </div>
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
                placeholder="Enter your Email"
                onChange={onInputChange}
              />
              <FormComponent
                value={form.password}
                isHasIcon="yes"
                icon={faLock}
                name="password"
                type="password"
                placeholder="Enter your Password"
                onChange={onInputChange}
              />
              <div className="col-lg-12">
                <div className={style.important_link}>
                  <a href="#">Forget Password?</a>
                </div>
              </div>
              <MainButton buttonName="Submit" />
              <div className="col-lg-12">
                <div className={style.register_link}>
                  Don't have an account?
                  <span className={style.important_link}>
                    <Link to="/auth/register">Sign up Now!</Link>
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

export default Login;
