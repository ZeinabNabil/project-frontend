import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

// Icons
import { faEdit, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// CSS
import style from "../../css/Admin/ViewCourses.module.css";

const CourseColumn = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
    wrap: true,
  },
  {
    name: "Desecription",
    selector: (row) => row.description,
    sortable: true,
    wrap: true,
  },
  {
    name: "Category",
    selector: (row) => row.category.toUpperCase(),
    sortable: true,
    wrap: true,
  },
  {
    name: "Course Hours",
    selector: (row) => `${row.numbersOfHours} Hours`,
    sortable: true,
    wrap: true,
  },
  {
    name: "Classes",
    selector: (row) => `${row.classes} Classes`,
    wrap: true,
  },
  {
    name: "duration",
    selector: (row) => row.duration,
    wrap: true,
  },
  // {
  //   name: 'Image',
  //   cell: (row) => {
  //     return (
  //       <div>
  //         <img src={row.image} className={style.course_img} />
  //       </div>
  //     );
  //   },
  // },

  {
    name: "Types",
    selector: (row) => row.typesOfCourse.map((type) => <span>{type}, </span>),
    wrap: true,
  },
  {
    name: "What is",
    selector: (row) => row.whatis,
    grow: 2,
    wrap: true,
  },
  {
    name: "What will students learn",
    selector: (row) =>
      row.whatWillStudentsLearn.map((feature) => (
        <ul class="list-group list-group-flush">
          <li class="list-group-item" style={{ background: "none" }}>
            {feature}
          </li>
        </ul>
      )),
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
  {
    name: "Action",
    button: true,
    ignoreRowClick: true,
    allowOverflow: true,
    cell: (row) => {
      return (
        <div className={style.edit_delete_btns}>
          <div className={style.edit_btn}>
            <Link to="/admin/courseinfo" className={style.View_more_btn}>
              View more
            </Link>
          </div>
        </div>
      );
    },
  },
];

export default CourseColumn;
