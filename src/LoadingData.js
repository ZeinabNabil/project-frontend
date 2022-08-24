import React from 'react';
import RiseLoader from 'react-spinners/RiseLoader';

export default function LoadingData(props) {
  return (
    <div className="">
      <RiseLoader color={'#facc5a'} loading={props.loading} size={16} />
    </div>
  );
}
