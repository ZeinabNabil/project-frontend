import { faEdit, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import style from "../css/Admin.module.css";

const CourseColumn = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
    wrap: true,
  },
  {
    name: "Category",
    selector: (row) => row.category,
    sortable: true,
    wrap: true,
  },
  {
    name: "Description",
    selector: (row) => row.description,
    sortable: true,
    wrap: true,
  },
  {
    name: "Attends",
    selector: (row) => row.attends,
    sortable: true,
    wrap: true,
  },
  {
    name: "Classes",
    selector: (row) => row.classes,
    wrap: true,
  },
  {
    name: "Image",
    cell: (row) => {
      return (
        <div>
          <img src={row.image} className={style.course_img} />
        </div>
      );
    },
  },
  {
    name: "What is",
    selector: (row) => row.whatIs,
    grow: 2,
    wrap: true,
  },
  {
    name: "Types",
    selector: (row) => row.types,
    wrap: true,
  },
  {
    name: "Whatwillstudentslearn",
    selector: (row) => row.whatwillstudentslearn,
    grow: 2,
    wrap: true,
  },
  {
    name: "Action",
    button: true,
    ignoreRowClick: true,
    allowOverflow: true,
    cell: (row) => {
      return (
        <div className={style.edit_delete_btns}>
          <div className={style.edit_btn}>
            <button type="button" className="btn">
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </div>
          <div className={style.delete_btn}>
            <button type="button" className="btn">
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      );
    },
  },
];

export default CourseColumn;
