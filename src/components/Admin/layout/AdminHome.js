import React from "react";
import style from "../../../css/Admin/Dashboard.module.css";
import AdminChart from "./AdminChart";
import AdminWidget from "./AdminWidget";

const AdminHome = () => {
  return (
    <div className={style.home}>
      <div className="row">
        <div className="col-lg-12">
          <div className={style.feature}>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className={style.feature_item}>
                  <div className={style.feature_title}>Number of users</div>
                  <div className={style.feature_container}>
                    <div className={style.feature_count}>20</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className={style.feature_item}>
                  <div className={style.feature_title}>Number of users</div>
                  <div className={style.feature_container}>
                    <div className={style.feature_count}>20</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className={style.feature_item}>
                  <div className={style.feature_title}>Number of users</div>
                  <div className={style.feature_container}>
                    <div className={style.feature_count}>20</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className={style.feature_item}>
                  <div className={style.feature_title}>Number of users</div>
                  <div className={style.feature_container}>
                    <div className={style.feature_count}>20</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AdminChart />
        <AdminWidget />
      </div>
    </div>
  );
};

export default AdminHome;
