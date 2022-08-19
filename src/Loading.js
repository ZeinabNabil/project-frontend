import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

export default function Loading(props) {
  return (
    <div className="loadingPage">
      <ScaleLoader color={'#facc5a'} loading={props.loading} size={250} />
    </div>
  );
}
