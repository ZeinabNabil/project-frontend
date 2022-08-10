import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import style from '../css/Admin/View.module.css';

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <input
      className={style.filter_input}
      id="search"
      type="text"
      placeholder="Filter table data..."
      value={filterText}
      onChange={onFilter}
    />
    <div className={style.filter_button}>
      <button type="button" className="btn" onClick={onClear}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
    {/* <ClearButton onClick={onClear}>X</ClearButton> */}
  </>
);

export default FilterComponent;
