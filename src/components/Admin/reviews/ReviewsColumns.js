import React from 'react';
// CSS
import style from '../../../css/Admin/View.module.css';
import moment from 'moment';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const reviewColumns = (onPostClick, onDeleteClick) => [
  {
    name: 'Review',
    selector: (row) => row.review,
    sortable: true,
    wrap: true,
  },
  {
    name: 'User name',
    selector: (row) => row.userId.name,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Date',
    selector: (row) => moment(row.createdAt).format('ll'),
    sortable: true,
    wrap: true,
  },
  {
    name: 'status',
    selector: (row) => row.show.toString(),
    sortable: true,
    wrap: true,
  },
  {
    name: 'Delete Or Post',
    sortable: true,
    wrap: true,
    cell: (row) => {
      return (
        <div className={style.edit_delete_btns}>
          <div className={style.edit_btn}>
            <button
              type="button"
              className="btn"
              onClick={() => onPostClick(row._id)}
            >
              POST
            </button>
          </div>
          <div
            className={style.delete_btn}
            onClick={() => onDeleteClick(row._id)}
          >
            <button type="button" className="btn">
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      );
    },
  },
];

export default reviewColumns;
