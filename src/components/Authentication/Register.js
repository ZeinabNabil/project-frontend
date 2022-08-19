import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import FormComponent from "./FormComponents";
import {
  faUser,
  faPhone,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import MainButton from "./MainButton";
import style from "../../css/Authentication/Authentication.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { createUser } from "../../actions/user.action";
import store from "../../store";
import { useNavigate } from "react-router-dom";
const Register = (props) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
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
      name: form.name,
      email: form.email,
      password: form.password,
      phone: form.phone,
      confirmPassword: form.confirmPassword,
    };
    const result = await props.createUser(userData);
    if (result) {
      setTimeout(() => {
        navigate("/auth/login");
      }, 800);
    }
  };
  useEffect(() => {
    store.dispatch({
      type: "GET_ERRORS",
      payload: {},
    });
  }, []);
  const { errors } = props.error;
  return (
    <div className="row" data-aos="fade-right" data-aos-duration="1000">
      <div className="col-lg-12">
        <div className={style.form_header}>
          <h3>انشاء حساب جديد</h3>
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
                placeholder="قم بكتابة اسمك هنا"
                err={errors ? errors.name : ""}
              />
              <FormComponent
                value={form.email}
                onChange={onInputChange}
                isHasIcon="yes"
                icon={faEnvelope}
                name="email"
                type="email"
                placeholder="قم بكتابة البريد الالكتروني هنا"
                err={errors ? errors.email : ""}
              />
              <FormComponent
                value={form.password}
                onChange={onInputChange}
                isHasIcon="yes"
                icon={faLock}
                name="password"
                type="password"
                placeholder="ادخل كلمة السر الخاصة بك"
                err={errors ? errors.password : ""}
              />
              <FormComponent
                value={form.confirmPassword}
                onChange={onInputChange}
                isHasIcon="yes"
                icon={faLock}
                name="confirmPassword"
                type="password"
                placeholder="قم بكتابة كلمة السر مرة اخرى"
                err={errors ? errors.confirmPassword : ""}
              />
              <FormComponent
                value={form.phone}
                onChange={onInputChange}
                isHasIcon="yes"
                icon={faPhone}
                name="phone"
                type="text"
                placeholder="رقم الهاتف الخاص بك"
                err={errors ? errors.phone : ""}
              />
              <MainButton buttonName="إنشاء حساب" />
              <div className="col-lg-12">
                <div className={style.register_link}>
                  لديك حساب بالفعل؟
                  <span className={style.important_link}>
                    <Link to="/auth/login">قم بتسجيل الدخول!</Link>
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
