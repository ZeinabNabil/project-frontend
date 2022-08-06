import React from "react";
// import classnames from "classnames";
import style from "../../css/Admin/AddCourse.module.css";



const Input = ({
  labelName,
  type,
  placeholder,
  name,
  value,
  err,
  onChange,
  rows,
  file,
  noteFile,
  multiple,
}) => {
  return (
    <div>
    <div className="col-lg-12 col-md-12 col-sm-12">
      <label className={style.formlabel}>{labelName}</label>
    </div>
    {/* <div className="col-lg-6 col-sm-12"> */}
      <input
        value={value}
        onChange={onChange}
        name={name}
        class="form-control"
        type={type}
        rows={rows}
        placeholder={placeholder}
        multiple={multiple}
      />
      {file === "yes" ? (
        <div id="textExample1" className="form-text">
          {noteFile}
        </div>
      ) : null}
      {err && <div className="invalid-feedback">{err}</div>}
    </div>
//   </div>
    
  );
};

export default Input;
