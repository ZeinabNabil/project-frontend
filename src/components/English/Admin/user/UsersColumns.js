import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

// Icons
import { faEdit, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// CSS
import style from '../../../css/Admin/View.module.css';

const UsersColumns = (onDeletClick, role) => [
  {
    name: 'الاسم',
    selector: (row) => row.name,
    sortable: true,
    wrap: true,
  },
  {
    name: 'البريد الالكتروني',
    selector: (row) => row.email,
    sortable: true,
    wrap: true,
  },
  {
    name: 'رقم الهاتف',
    selector: (row) => row.phone,
    sortable: true,
    wrap: true,
  },
  {
    name: 'دور',
    selector: (row) => {
      if (row.role == 0) {
        return 'طالب';
      }
      if (row.role == 1) {
        return 'المشرف';
      }
      if (row.role == 2) {
        return 'مساعد';
      }
      if (row.role == 3) {
        return 'وسيط';
      }
    },
    sortable: true,
    wrap: true,
  },
  {
    name: 'فعل',
    button: true,
    ignoreRowClick: true,
    allowOverflow: true,
    cell: (row) => {
      console.log('he', role);
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
        return 'غير مصرح';
      }
    },
  },
];

export default UsersColumns;
