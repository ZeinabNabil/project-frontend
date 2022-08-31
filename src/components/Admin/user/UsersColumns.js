import React from 'react';
import { Link } from 'react-router-dom';
// Icons
import { faEdit, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// CSS
import style from '../../../css/Admin/View.module.css';

const UsersColumns = (onDeletClick, role, ColumnsName) => [
  {
    name: ColumnsName.name,
    selector: (row) => row.name,
    sortable: true,
    wrap: true,
  },
  {
    name: ColumnsName.email,
    selector: (row) => row.email,
    sortable: true,
    wrap: true,
  },
  {
    name: ColumnsName.phone,
    selector: (row) => row.phone,
    sortable: true,
    wrap: true,
  },
  {
    name: ColumnsName.role,
    selector: (row) => {
      if (row.role == 0) {
        return ColumnsName.user;
      }
      if (row.role == 1) {
        return ColumnsName.roles[0].name;
      }
      if (row.role == 2) {
        return ColumnsName.roles[1].name;
      }
      if (row.role == 3) {
        return ColumnsName.roles[2].name;
      }
    },
    sortable: true,
    wrap: true,
  },
  {
    name: 'courses',
    button: true,
    ignoreRowClick: true,
    allowOverflow: true,
    cell: (row) => {
      return row.role != 0 ? (
        '-'
      ) : (
        <div className={style.edit_delete_btns}>
          <div className={style.edit_btn}>
            <Link
              to={`/dashboard/courses/user/${row._id}`}
              className={style.View_more_btn}
            >
              {ColumnsName.courses}
            </Link>
          </div>
        </div>
      );
    },
  },
  {
    name: ColumnsName.action,
    button: true,
    ignoreRowClick: true,
    allowOverflow: true,
    cell: (row) => {
      if (role == 1) {
        return (
          <div className={style.edit_delete_btns}>
            <div className={style.edit_btn}>
              <Link to={`/dashboard/user/update/${row._id}`}>
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
      } else {
        return ColumnsName.notAuth;
      }
    },
  },
];

export default UsersColumns;
