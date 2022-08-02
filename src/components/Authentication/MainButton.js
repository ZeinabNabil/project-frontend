import React from "react";
import style from "../../css/Authentication/Authentication.module.css";

const MainButton = ({ buttonName }) => {
  return (
    <div className={style.main_button}>
      <button className="btn btn-primary" type="submit">
        {buttonName}
      </button>
    </div>
  );
};

export default MainButton;
