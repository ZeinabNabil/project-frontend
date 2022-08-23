import React from 'react';
import style from '../../../css/Admin/Adduser.module.css';
import { useTranslation } from 'react-i18next';
const Select = ({ labelName, name, value, onChange, items }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={style.select}>
      <label className={style.formlabel} style={{ color: 'white' }}>
        {labelName}
      </label>
      <select
        value={value}
        onChange={onChange}
        className="form-select"
        name={name}
        required
      >
        <option>{t('choose')}</option>
        {items.map((item) => (
          <option value={item.value}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
