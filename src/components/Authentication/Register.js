import {
  faUser,
  faPhone,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import style from "../../css/Authentication/Authentication.module.css";
import FormComponent from "./FormComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainButton from "./MainButton";
import AOS from "aos";
import "aos/dist/aos.css";

const Register = () => {
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
          <form>
            <FormComponent
              isHasIcon="yes"
              icon={faUser}
              name="Name"
              type="text"
              placeholder="Enter your name"
            />
            <FormComponent
              isHasIcon="yes"
              icon={faPhone}
              name="Phone"
              type="text"
              placeholder="Enter your phone"
            />
            <FormComponent
              isHasIcon="yes"
              icon={faEnvelope}
              name="Email"
              type="email"
              placeholder="Enter your Email"
            />
            <FormComponent
              isHasIcon="yes"
              icon={faLock}
              name="Password"
              type="password"
              placeholder="Enter your Password"
            />
            <MainButton buttonName="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
