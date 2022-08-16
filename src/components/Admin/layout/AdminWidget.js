import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import style from '../../../css/Admin/Dashboard.module.css';
import profilePic from '../../../images/profile-circle.png';
import { connect } from 'react-redux';
import { getLastFiveUsers } from '../../../actions/user.action';
const AdminWidget = (props) => {
  const widgets = [
    {
      imgSrc: profilePic,
      username: 'Anna Keller',
      title: 'Software Engineering',
    },
    {
      imgSrc: profilePic,
      username: 'Anna Keller',
      title: 'Software Engineering',
    },
    {
      imgSrc: profilePic,
      username: 'Anna Keller',
      title: 'Software Engineering',
    },
    {
      imgSrc: profilePic,
      username: 'Anna Keller',
      title: 'Software Engineering',
    },
    {
      imgSrc: profilePic,
      username: 'Anna Keller',
      title: 'Software Engineering',
    },
  ];
  const tableData = [
    {
      imgSrc: profilePic,
      name: 'Susan Carol',
      date: '2 Jun 2021',
      amount: '$122.00',
      status: 'Approved',
    },
    {
      imgSrc: profilePic,
      name: 'Susan Carol',
      date: '2 Jun 2021',
      amount: '$122.00',
      status: 'Declined',
    },
    {
      imgSrc: profilePic,
      name: 'Susan Carol',
      date: '2 Jun 2021',
      amount: '$122.00',
      status: 'Pending',
    },
    {
      imgSrc: profilePic,
      name: 'Susan Carol',
      date: '2 Jun 2021',
      amount: '$122.00',
      status: 'Approved',
    },
    {
      imgSrc: profilePic,
      name: 'Susan Carol',
      date: '2 Jun 2021',
      amount: '$122.00',
      status: 'Approved',
    },
  ];
  const { lastFiveUsers, loading } = props.user;
  var renderContent;
  if (lastFiveUsers === null || loading) {
    renderContent = 'Loading';
  } else {
    renderContent = lastFiveUsers.lastFiveUsers.map((widget, index) => {
      return (
        <li className={style.widget_list_item} key={index}>
          <div className={style.widget_list_item_img}>
            <img src={profilePic} alt="profile picture" />
          </div>
          <div className={style.widget_list_item_user}>
            <span className={style.widget_list_item_username}>
              {widget.name}
            </span>
            <span className={style.widget_list_item_title}>{widget.email}</span>
          </div>
          <button className={style.widget_button}>
            <FontAwesomeIcon icon={faEye} /> Display
          </button>
        </li>
      );
    });
  }
  useEffect(() => {
    props.getLastFiveUsers();
  }, []);
  return (
    <div className="col-lg-12">
      <div className="row">
        <div className="col-lg-4 .col-md-12">
          <div className={style.widget}>
            <span className={style.widget_title}>New Join Members</span>
            <ul className={style.widget_list}>{renderContent}</ul>
          </div>
        </div>
        <div className="col-lg-8 .col-md-12">
          <div className={`${style.widget} ${style.widget_right}`}>
            <span className={style.widget_title}>Latest Transaction</span>
            <table className={`${style.widget_table} table`}>
              <thead>
                <tr>
                  <th scope="col">Customer</th>
                  <th scope="col">Date</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((data) => {
                  return (
                    <tr>
                      <td className={style.widget_table_user}>
                        <img src={data.imgSrc} alt="profile picture" />
                        <span className={style.widget_table_name}>
                          {data.name}
                        </span>
                      </td>
                      <td className={style.widget_table_date}>{data.date}</td>
                      <td className={style.widget_table_amount}>
                        {data.amount}
                      </td>
                      <td className={style.widget_table_status}>
                        <span>{data.status}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, { getLastFiveUsers })(AdminWidget);
