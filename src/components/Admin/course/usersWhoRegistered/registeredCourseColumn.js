import React from 'react';
import { Link } from 'react-router-dom';

// Icons
import { faEdit, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// CSS
import moment from 'moment';
function daysBetween(date1String, date2String) {
  var d1 = new Date(date1String);
  var d2 = new Date(date2String);
  return (d2 - d1) / (1000 * 3600 * 24);
}
const registeredCourseColumn = () => [
  {
    name: 'User Name',
    selector: (row) => row.userId.name,
    sortable: true,
    wrap: true,
  },
  {
    name: 'User Email',
    selector: (row) => row.userId.email,
    sortable: true,
    wrap: true,
  },
  {
    name: 'User Phone',
    selector: (row) => row.userId.phone,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Registered Date',
    selector: (row) => moment(row.date).format('ll'),
    sortable: true,
    wrap: true,
  },
];

export default registeredCourseColumn;
