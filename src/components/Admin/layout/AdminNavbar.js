import {
  faBell,
  faBible,
  faHouseChimney,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import style from "../../../css/Admin/Dashboard.module.css";

const AdminNavbar = () => {
  return (
    <div className={style.navbar}>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className={style.top_left}>Admin Dashboard</div>
        </div>
        <div className="col-lg-8 col-md-6 col-sm-6">
          <div className={style.top_right}>
            <div className={style.navbar_icons}>
              <FontAwesomeIcon icon={faHouseChimney} />
            </div>
            <div className={style.navbar_icons}>
              <FontAwesomeIcon icon={faBell} />
              <span>2</span>
            </div>
            <div className={style.navbar_icons}>
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
