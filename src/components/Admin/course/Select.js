import React from 'react';
import style from '../../../css/Admin/Addcourse.module.css';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
const Select = ({ labelName, name, value, err, onChange, list }) => {
  const { t } = useTranslation();
  return (
    <div className={style.select}>
      <label className={style.formlabel} style={{ color: 'white' }}>
        {labelName}
      </label>
      <select
        value={value}
        onChange={onChange}
        className={classnames('form-select', {
          'is-invalid': err,
        })}
        name={name}
      >
        <option>{t('choose')}</option>
        {list.map((item) => (
          <option value={item.toLowerCase()}>{item}</option>
        ))}
      </select>
      {err && (
        <div className={`invalid-feedback ${style.error_text}`}>{err}</div>
      )}
    </div>
  );
};

export default Select;
