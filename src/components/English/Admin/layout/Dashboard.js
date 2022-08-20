import React, { useEffect, useState } from 'react';
import AdminHome from './AdminHome';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';
import { Outlet } from 'react-router-dom';
import Loading from '../../../Loading';

const Dashboard = () => {
  const [load, setload] = useState(false);
  useEffect(() => {
    setload(true);
    setTimeout(() => {
      setload(false);
    }, 1500);
  }, []);
  return (
    <>
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
    </>
  );
};

export default Dashboard;
