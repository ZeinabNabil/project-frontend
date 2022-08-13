import React from "react";
import style from "../../css/Authentication/Authentication.module.css";
import { Outlet } from "react-router-dom";
import authImage from "../../images/login-register1.png";

const MainAuthPage = () => {
  return (
    <div className={style.main_auth_page}>
      <div className={style.auth_container}>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={style.form_container}>
              {/* <Login /> */}
              {/* <Register /> */}
              <Outlet />
              {/* <div className="row">
                <div className="col-lg-12">
                  <div className={style.form_header}>
                    <h3>Login</h3>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className={style.form_content}>
                    <form>
                      <FormComponent
                        isHasIcon="no"
                        icon={faEnvelope}
                        name="Email"
                        type="text"
                        placeholder="Enter your Email"
                      />
                      <FormComponent
                        isHasIcon="no"
                        icon={faEnvelope}
                        name="Password"
                        type="password"
                        placeholder="Enter your Password"
                      />
                    </form>
                  </div>
                </div>
              </div> */}
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
  );
};

export default MainAuthPage;
