import React from "react";
import style from "../../css/Authentication/Authentication.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
const FormComponent = ({
  isHasIcon,
  icon,
  name,
  type,
  id,
  placeholder,
  onChange,
  value,
  err,
}) => {
  return (
    <div className="col-lg-12">
      <div className={`${style.input_div} input-group mb-3`}>
        {/* Checking if the input has an icon or not */}
        {isHasIcon === "yes" ? (
          <span>
            <FontAwesomeIcon icon={icon} className={style.highlight} />
          </span>
        ) : null}

        {/* input of the form */}
        <input
          name={name}
          type={type}
          className={classnames("form-control", {
            "is-invalid": err,
          })}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {err && <div className="invalid-feedback">{err}</div>}
      </div>
    </div>
  );
};

export default FormComponent;
