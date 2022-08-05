import React from "react";
import style from "../../css/Authentication/Authentication.module.css";

const MainButton = ({ buttonName }) => {
  return (
    <div className="col-lg-12">
      <div className={style.main_button}>
        <button className="btn btn-primary" type="submit">
          {buttonName}
        </button>
      </div>
    </div>
  );
};

export default MainButton;
