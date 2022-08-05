import React from 'react';
import style from '../../css/Authentication/Authentication.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
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
        {isHasIcon === 'yes' ? (
          <div className={`${style.input_icon} input-group-prepend`}>
            <span className="input-group-text" id="basic-addon1">
              <FontAwesomeIcon icon={icon} className={style.highlight} />
            </span>
          </div>
        ) : null}
        <input
          name={name}
          type={type}
          className={classnames('form-control', {
            'is-invalid': err,
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
