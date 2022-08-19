import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

// Icons
import { faEdit, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// CSS
import style from '../../../css/Admin/View.module.css';

const CourseColumn = [
  {
    name: 'Name',
    selector: (row) => row.name,
    sortable: true,
    wrap: true,
  },

  {
    name: 'Category',
    selector: (row) => row.category.toUpperCase(),
    sortable: true,
    wrap: true,
  },
  {
    name: 'Attends',
    selector: (row) => row.attends,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Course Hours',
    selector: (row) => `${row.numbersOfHours} Hours`,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Classes',
    selector: (row) => `${row.classes} Classes`,
    wrap: true,
  },
  {
    name: 'duration',
    selector: (row) => row.duration,
    wrap: true,
  },

  {
    name: 'Types',
    selector: (row) => row.typesOfCourse.map((type) => <span>{type}, </span>),
    wrap: true,
  },
  {
    name: 'Detail',
    button: true,
    ignoreRowClick: true,
    allowOverflow: true,
    cell: (row) => {
      return (
        <div className={style.edit_delete_btns}>
          <div className={style.edit_btn}>
            <Link
              to={`/dashboard/course/view/${row._id}`}
              className={style.View_more_btn}
            >
              View more
            </Link>
          </div>
        </div>
      );
    },
  },
  {
    name: 'Action',
    button: true,
    ignoreRowClick: true,
    allowOverflow: true,
    cell: (row) => {
      return (
        <div className={style.edit_delete_btns}>
          <div className={style.edit_btn}>
            <Link to={`/dashboard/course/update/${row._id}`}>
              <button type="button" className="btn">
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </Link>
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
