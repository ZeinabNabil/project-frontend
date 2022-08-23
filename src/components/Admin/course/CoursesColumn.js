import React from 'react';
import { Link } from 'react-router-dom';

// Icons
import { faEdit, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// CSS
import style from '../../../css/Admin/View.module.css';
import moment from 'moment';
function daysBetween(date1String, date2String) {
  var d1 = new Date(date1String);
  var d2 = new Date(date2String);
  return (d2 - d1) / (1000 * 3600 * 24);
}
const CourseColumn = (onDeletClick, role, columnsName) => [
  {
    name: columnsName.col_course_name,
    selector: (row) => row.name,
    sortable: true,
    wrap: true,
  },

  {
    name: columnsName.col_course_category,
    selector: (row) => row.category.toUpperCase(),
    sortable: true,
    wrap: true,
  },
  {
    name: columnsName.col_course_attends,
    selector: (row) => row.attends,
    sortable: true,
    wrap: true,
  },
  {
    name: columnsName.col_course_hours,
    selector: (row) => `${row.hours} ${columnsName.numberOfHourse}`,
    sortable: true,
    wrap: true,
  },
  {
    name: columnsName.col_course_classes,
    selector: (row) => `${row.classes}`,
    wrap: true,
  },
  {
    name: columnsName.col_course_duration,
    selector: (row) => row.duration,
    wrap: true,
  },
  {
    name: columnsName.col_course_price,
    selector: (row) => row.price,
    sortable: true,
    wrap: true,
  },
  {
    name: columnsName.col_course_offer,
    selector: (row) => (row.isHasOffer ? row.offer : columnsName.empty),
    sortable: true,
    wrap: true,
  },
  {
    name: columnsName.col_course_offerDuration,
    selector: (row) =>
      row.isHasOffer
        ? `باقي ${daysBetween(
            moment().format('l'),
            moment(row.endOfferDate).format('l')
          )} ايام`
        : columnsName.empty,

    sortable: true,
    wrap: true,
  },
  {
    name: columnsName.col_course_addedBy,
    selector: (row) => row.userId.name,
    wrap: true,
  },
  {
    name: columnsName.col_course_seeMore,
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
              {columnsName.col_course_SeeMore_Button}
            </Link>
          </div>
        </div>
      );
    },
  },

  {
    name: columnsName.col_course_action,
    button: true,
    ignoreRowClick: true,
    allowOverflow: true,
    cell: (row) => {
      if (role == 1) {
        return (
          <div className={style.edit_delete_btns}>
            <div className={style.edit_btn}>
              <Link to={`/dashboard/course/update/${row._id}`}>
                <button type="button" className="btn">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </Link>
            </div>
            <div
              className={style.delete_btn}
              onClick={() => onDeletClick(row._id, row.name)}
            >
              <button type="button" className="btn">
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          </div>
        );
      } else if (role === 2) {
        // assistant cant delete
        return (
          <div className={style.edit_delete_btns}>
            <div className={style.edit_btn}>
              <Link to={`/dashboard/course/update/${row._id}`}>
                <button type="button" className="btn">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </Link>
            </div>
          </div>
        );
      }

      return `غير مصرح`;
    },
  },
];

export default CourseColumn;
