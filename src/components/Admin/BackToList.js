import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
export default function BackToList() {
  return (
    <div className="backbtn">
      <Link to="/admin/viewcourse">
        <FontAwesomeIcon icon={faCircleArrowLeft} /> Back To List
      </Link>
    </div>
  );
}
