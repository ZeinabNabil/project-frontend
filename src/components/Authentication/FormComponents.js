import React from "react";
import style from "../../css/Authentication/Authentication.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormComponent = ({
  isHasIcon,
  icon,
  name,
  type,
  id,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <div className="col-lg-12">
      <div className={`${style.input_div} input-group mb-3`}>
        {isHasIcon === "yes" ? (
          <div className={`${style.input_icon} input-group-prepend`}>
            <span className="input-group-text" id="basic-addon1">
              <FontAwesomeIcon icon={icon} className={style.highlight} />
            </span>
          </div>
        ) : null}
        <input
          name={name}
          type={type}
          className="form-control"
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default FormComponent;
