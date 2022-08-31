import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Social = ({ to, className, icon }) => {
  return (
    <Link to={to} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        className={className}
        icon={icon}
        style={{ paddingLeft: '10px', paddingRight: '10px' }}
      />
    </Link>
  );
};

export default Social;
