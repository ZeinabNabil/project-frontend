import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotAuthorized = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="text-center">You are not authorized</h2>
      <p className="text-center">
        Please, Go Back,{' '}
        <Link
          to="#"
          onClick={() => {
            navigate(-2);
          }}
        >
          Click here
        </Link>
      </p>
    </div>
  );
};

export default NotAuthorized;
