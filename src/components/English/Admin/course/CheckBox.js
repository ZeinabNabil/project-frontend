import React from 'react';
import style from '../../../css/Admin/Addcourse.module.css';
const CheckBox = ({ labelName, onChange, checked }) => {
  return (
    <div className={style.checkbox}>
      <div class="form-check">
        <input
          onChange={onChange}
          checked={checked}
          class="form-check-input"
          type="checkbox"
          value=""
          id="checkbox"
        />
        <label class="form-check-label" for="checkbox">
          {labelName}
        </label>
      </div>
    </div>
  );
};

export default CheckBox;
