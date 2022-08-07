import React from 'react';
import classnames from 'classnames';
import style from '../../css/Admin/AddCourse.module.css';

const Input = ({
  labelName,
  type,
  placeholder,
  name,
  value,
  err,
  onChange,
  rows,
}) => {
  return (
    <div className={style.input_course}>
      <div className="col-lg-12 col-md-12 col-sm-12">
        <label className={style.formlabel}>{labelName}</label>
      </div>
      <input
        value={value}
        onChange={onChange}
        name={name}
        className={classnames('form-control', {
          'is-invalid': err,
        })}
        type={type}
        rows={rows}
        placeholder={placeholder}
      />
      {err && (
        <div className={`invalid-feedback ${style.error_text}`}>{err}</div>
      )}
    </div>
  );
};

export default Input;
