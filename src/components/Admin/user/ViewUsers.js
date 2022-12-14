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
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
const ViewUsers = (props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isAuthenticated } = props.user;

  const ColumnsName = {
    name: t('UserName'),
    email: t('UserEmail'),
    phone: t('UserPhone'),
    role: t('UserRole'),
    roles: t('UserRoles', { returnObjects: true }),
    user: t('user'),
    action: t('action'),
    notAuth: t('notAuth'),
    courses: t('courses'),
  };
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth/login');
    }
    if (currentUser.role == 0) {
      navigate('/notAuth');
    }
  }, []);
  useEffect(() => {
    props.getUsers();
  }, []);
  var role = 1;
  const { currentUser } = props.user;
  if (currentUser !== null) {
    role = currentUser.role;
  }
  const handleOnClick = async (id) => {
    if (await confirm(`هل انت متأكد انك تريد حذف هذا المستخدم `)) {
      props.deleteUser(id);
      window.location.reload();
    } else {
    }
  };
  var renderContent;
  const { users, loading } = props.user;
  if (users === null || loading) {
    renderContent = 'Loading';
  } else {
    renderContent = (
      <Table
        btnName={t('addNewUser')}
        btnLink="user/add"
        columns={columns(handleOnClick, role, ColumnsName)}
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
