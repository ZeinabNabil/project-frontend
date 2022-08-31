import React, { useEffect, useState } from 'react';
import AdminHome from './AdminHome';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import Loading from '../../../Loading';
import { connect } from 'react-redux';

const Dashboard = (props) => {
  const [load, setload] = useState(false);
  useEffect(() => {
    setload(true);
    setTimeout(() => {
      setload(false);
    }, 1500);
  }, []);
  const navigate = useNavigate();
  const { currentUser, isAuthenticated } = props.user;
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth/login');
    }
    if (currentUser !== null && currentUser.role == 0) {
      navigate('/notAuth');
    }

    document.title = 'Admin | Dashboard';
  }, []);
  return (
    <div>
      {!load ? (
        <>
          <AdminNavbar />
          <div className="row">
            <div className="col-lg-2">
              <AdminSidebar />
            </div>
            <div className="col-lg-10">
              <Outlet />
            </div>
          </div>
        </>
      ) : (
        <Loading loading={load} />
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps)(Dashboard);
