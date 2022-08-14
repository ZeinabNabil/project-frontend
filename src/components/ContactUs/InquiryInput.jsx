import React from 'react';
import classnames from 'classnames';
import style from '../../css/ContactUs/Contactus.module.css';

const InquriyInput = ({
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
    <div className={style.input}>
      <div className="col-lg-12 col-md-12 col-sm-12">
        <label className={style.formlabel} style={{padding:"4px" , color:"black" , fontWeight:"bold"}}>{labelName}</label>
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

export default InquriyInput;
