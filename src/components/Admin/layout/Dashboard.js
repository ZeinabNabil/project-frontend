import React from "react";
import AdminHome from "./AdminHome";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

const Dashboard = () => {
  return (
    <>
      <AdminNavbar />
      <div className="row">
        <div className="col-lg-2">
          <AdminSidebar />
        </div>
        <div className="col-lg-10">
          <AdminHome />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
