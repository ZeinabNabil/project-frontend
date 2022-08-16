import {
  faArrowTrendUp,
  faChalkboardUser,
  faChartLine,
  faComment,
  faEnvelope,
  faHouse,
  faMessage,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import style from '../../../css/Admin/Dashboard.module.css';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  const menus = [
    {
      header: 'Dashboard',
      items: [{ itemName: 'Home', itemIcon: faHouse, link: './home' }],
    },
    {
      header: 'Quich Menus',
      items: [
        { itemName: 'Users', itemIcon: faUser, link: './users/view' },
        {
          itemName: 'Courses',
          itemIcon: faChalkboardUser,
          link: './courses/view',
        },
      ],
    },
    {
      header: 'Notifications',
      items: [
        { itemName: 'Feedback', itemIcon: faComment, link: '#' },
        { itemName: 'Messages', itemIcon: faMessage, link: '#' },
      ],
    },
  ];
  const RenderedMenu = menus.map((menu) => {
    const renderedItems = menu.items.map((item) => {
      return (
        <Link to={item.link}>
          <li className={style.sidebar_list_item}>
            <div className={style.sidebar_icons}>
              <FontAwesomeIcon icon={item.itemIcon} />
            </div>
            {item.itemName}
          </li>
        </Link>
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
