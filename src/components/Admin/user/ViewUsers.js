import React, { useEffect, useState } from 'react';

// Redux
import { connect } from 'react-redux';
import { getUsers } from '../../../actions/user.action';
//CSS
import style from '../../../css/Admin/View.module.css';
// Components
import columns from './UsersColumns';
import Table from './../../Table';

const ViewUsers = (props) => {
  useEffect(() => {
    props.getUsers();
  }, []);
  var renderContent;
  const { users, loading } = props.user;
  if (users === null || loading) {
    renderContent = 'Loading';
  } else {
    renderContent = (
      <Table
        btnName="Add new user"
        btnLink="user/add"
        columns={columns}
        data={users.users}
      />
    );
  }
  return <div className={style.viewcourses}>{renderContent}</div>;
};

const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, { getUsers })(ViewUsers);
