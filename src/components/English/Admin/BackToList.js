import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const BackToList = (props) => {
  return (
    <div className="backbtn">
      <Link to={props.linkTo}>
        <FontAwesomeIcon icon={faCircleArrowLeft} /> Back To List
      </Link>
    </div>
  );
};

export default BackToList;
