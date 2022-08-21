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
const CourseColumn = (onDeletClick, role) => [
  {
    name: 'اسم الدورة',
    selector: (row) => row.name,
    sortable: true,
    wrap: true,
  },

  {
    name: 'نوع الدورة',
    selector: (row) => row.category.toUpperCase(),
    sortable: true,
    wrap: true,
  },
  {
    name: 'عدد المسجلين',
    selector: (row) => row.attends,
    sortable: true,
    wrap: true,
  },
  {
    name: 'الساعات',
    selector: (row) => `${row.hours} ساعــة`,
    sortable: true,
    wrap: true,
  },
  {
    name: 'الحصص',
    selector: (row) => `${row.classes} حـــصة`,
    wrap: true,
  },
  {
    name: 'المدة',
    selector: (row) => row.duration,
    wrap: true,
  },
  {
    name: 'السعر',
    selector: (row) => row.price,
    sortable: true,
    wrap: true,
  },
  {
    name: 'التخفيض',
    selector: (row) => (row.isHasOffer ? row.offer : 'لا يوجد'),
    sortable: true,
    wrap: true,
  },
  {
    name: 'مدة التخفيض',
    selector: (row) =>
      row.isHasOffer
        ? `باقي ${daysBetween(
            moment().format('l'),
            moment(row.endOfferDate).format('l')
          )} ايام`
        : 'لا يوجد',

    sortable: true,
    wrap: true,
  },
  {
    name: 'تم الاضافة بواسطة',
    selector: (row) => row.userId.name,
    wrap: true,
  },
  {
    name: 'تفاصيل اكــثر',
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
              رؤيـــة المزيــد
            </Link>
          </div>
        </div>
      );
    },
  },

  {
    name: 'فعل',
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
