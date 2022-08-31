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
const usersCourseColumns = () => [
  {
    name: 'Course Name',
    selector: (row) => row.name,
    sortable: true,
    wrap: true,
  },
  {
    name: 'CourseDescription',
    selector: (row) => row.description,
    sortable: true,
    wrap: true,
  },
];

export default usersCourseColumns;
