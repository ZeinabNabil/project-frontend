import React from 'react';
import RiseLoader from 'react-spinners/RiseLoader';

export default function LoadingData(props) {
  return (
    <div className="loadingData">
      <RiseLoader color={'#facc5a'} loading={props.loading} size={16} />
    </div>
  );
}
