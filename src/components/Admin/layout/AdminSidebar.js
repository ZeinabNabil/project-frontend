import {
  faArrowTrendUp,
  faChalkboardUser,
  faChartLine,
  faComment,
  faEnvelope,
  faHouse,
  faLanguage,
  faMessage,
  faQuestionCircle,
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
        {
          itemName: 'Inquiries',
          itemIcon: faQuestionCircle,
          link: './inquiries/view',
        },
      ],
    },
  ];
  const RenderedMenu = menus.map((menu, index) => {
    const renderedItems = menu.items.map((item, index) => {
      return (
        <Link to={item.link} key={index}>
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
      <div key={index}>
        <h3 className={style.sidebar_title}>{menu.header}</h3>
        <ul className={style.sidebar_list}>{renderedItems}</ul>
      </div>
    );
  });
  return (
    <div className={style.sidebar} style={{ direction: 'ltr' }}>
      <div className={style.sidebar_container}>
        <div className={style.sidebar_menu}>{RenderedMenu}</div>
      </div>
    </div>
  );
};

export default AdminSidebar;
