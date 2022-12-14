import React from 'react';
import classnames from 'classnames';
import style from '../../css/user/UserProfile.module.css';

const Input = ({
  labelName,
  type,
  placeholder,
  name,
  value,
  edit,
  err,
  onChange,
  rows,
}) => {
  return (
    <div className={style.inputcontainer}>
      <div className="col-lg-12 col-md-12 col-sm-12">
        <label
          className={style.formlabel}
          style={{ padding: '4px', color: '#3c99dc', fontWeight: 'bold' }}
        >
          {labelName}
        </label>
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
        disabled={edit === false ? true : ''}
        placeholder={placeholder}
      />
      {err && (
        <div className={`invalid-feedback ${style.error_text}`}>{err}</div>
      )}
    </div>
  );
};

export default Input;
