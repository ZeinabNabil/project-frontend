import React, { useEffect, useState } from 'react';

// Redux
import { connect } from 'react-redux';
import { getUsers, deleteUser } from '../../../actions/user.action';
//CSS
import style from '../../../css/Admin/View.module.css';
// Components
import columns from './UsersColumns';
import Table from './../../Table';
import { confirm } from '../Confirmation';

const ViewUsers = (props) => {
  useEffect(() => {
    props.getUsers();
  }, []);
  var role = 1;
  const { currentUser } = props.user;
  if (currentUser !== null) {
    role = currentUser.role;
  }
  console.log(role);
  const handleOnClick = async (id) => {
    if (await confirm(`هل انت متأكد انك تريد حذف هذا المستخدم `)) {
      props.deleteUser(id);
      window.location.reload();
    } else {
      console.log('Not ');
    }
  };
  var renderContent;
  const { users, loading } = props.user;
  if (users === null || loading) {
    renderContent = 'Loading';
  } else {
    renderContent = (
      <Table
        btnName="اضافة مستخدم جديد"
        btnLink="user/add"
        columns={columns(handleOnClick, role)}
        data={users.users}
      />
    );
  }
  return <div className={style.viewcourses}>{renderContent}</div>;
};

const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, { getUsers, deleteUser })(ViewUsers);
