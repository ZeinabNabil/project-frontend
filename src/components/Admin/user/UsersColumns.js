import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

// Icons
import { faEdit, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// CSS
import style from '../../../css/Admin/View.module.css';

const UsersColumns = [
  {
    name: 'Name',
    selector: (row) => row.name,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Email',
    selector: (row) => row.email,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Phone',
    selector: (row) => row.phone,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Role',
    selector: (row) => {
      if (row.role == 0) {
        return 'User';
      }
      return 'Admin';
    },
    sortable: true,
    wrap: true,
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

export default UsersColumns;
