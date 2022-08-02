import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import style from "../../css/Authentication/Authentication.module.css";
import { Link } from "react-router-dom";
import FormComponent from "./FormComponents";
import MainButton from "./MainButton";
import AOS from "aos";
import "aos/dist/aos.css";

const Login = () => {
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
          <form>
            <FormComponent
              isHasIcon="yes"
              icon={faEnvelope}
              name="Email"
              type="text"
              placeholder="Enter your Email"
            />
            <FormComponent
              isHasIcon="yes"
              icon={faLock}
              name="Password"
              type="password"
              placeholder="Enter your Password"
            />
            <div className={style.important_link}>
              <a href="#">Forget Password?</a>
            </div>
            <MainButton buttonName="Submit" />
            <div className={style.register_link}>
              Don't Have an account?{" "}
              <span className={style.important_link}>
                <Link to="/auth/register">Signup Now!</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
