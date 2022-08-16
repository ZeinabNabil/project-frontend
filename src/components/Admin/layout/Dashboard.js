import React from 'react';
import AdminHome from './AdminHome';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
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
  );
};

export default Dashboard;
