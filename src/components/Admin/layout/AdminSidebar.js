import {
  faChalkboardUser,
  faHouse,
  faQuestionCircle,
  faUser,
  faFaceSmileBeam,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import style from '../../../css/Admin/Dashboard.module.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const AdminSidebar = () => {
  const { t } = useTranslation();
  const menus = [
    {
      header: t('dashboardItem'),
      items: [
        { itemName: t('homeDashboard'), itemIcon: faHouse, link: './home' },
        {
          itemName: t('profileDashboard'),
          itemIcon: faUser,
          link: './profile',
        },
      ],
    },
    {
      header: t('QuickMenus'),
      items: [
        { itemName: t('qMenusUsers'), itemIcon: faUsers, link: './users/view' },
        {
          itemName: t('qMenusCourses'),
          itemIcon: faChalkboardUser,
          link: './courses/view',
        },
      ],
    },
    {
      header: t('Notifications'),
      items: [
        {
          itemName: t('notifyInq'),
          itemIcon: faQuestionCircle,
          link: './inquiries/view',
        },
        {
          itemName: t('notifyReview'),
          itemIcon: faFaceSmileBeam,
          link: './reviews/view',
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
    <div className={style.sidebar}>
      <div className={style.sidebar_container}>
        <div className={style.sidebar_menu}>{RenderedMenu}</div>
      </div>
    </div>
  );
};

export default AdminSidebar;
