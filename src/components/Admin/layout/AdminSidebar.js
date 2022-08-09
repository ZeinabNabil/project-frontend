import {
  faArrowTrendUp,
  faChalkboardUser,
  faChartLine,
  faComment,
  faEnvelope,
  faHouse,
  faMessage,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import style from "../../../css/Admin/Dashboard.module.css";

const AdminSidebar = () => {
  const menus = [
    {
      header: "Dashboard",
      items: [
        { itemName: "Home", itemIcon: faHouse },
        { itemName: "Analytics", itemIcon: faChartLine },
        { itemName: "Sales", itemIcon: faArrowTrendUp },
      ],
    },
    {
      header: "Quich Menus",
      items: [
        { itemName: "Users", itemIcon: faUser },
        { itemName: "Courses", itemIcon: faChalkboardUser },
        { itemName: "Sales", itemIcon: faArrowTrendUp },
      ],
    },
    {
      header: "Notifications",
      items: [
        { itemName: "Mail", itemIcon: faEnvelope },
        { itemName: "Feedback", itemIcon: faComment },
        { itemName: "Messages", itemIcon: faMessage },
      ],
    },
  ];
  const RenderedMenu = menus.map((menu) => {
    const renderedItems = menu.items.map((item) => {
      return (
        <li className={style.sidebar_list_item}>
          <div className={style.sidebar_icons}>
            <FontAwesomeIcon icon={item.itemIcon} />
          </div>
          {item.itemName}
        </li>
      );
    });
    return (
      <>
        <h3 className={style.sidebar_title}>{menu.header}</h3>
        <ul className={style.sidebar_list}>{renderedItems}</ul>
      </>
    );
  });
  return (
    <div className={style.sidebar}>
      <div className={style.sidebar_container}>
        <div className={style.sidebar_menu}>{RenderedMenu}</div>
      </div>
    </div>
  );
};

export default AdminSidebar;
