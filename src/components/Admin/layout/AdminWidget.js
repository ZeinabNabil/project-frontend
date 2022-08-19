import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import style from '../../../css/Admin/Dashboard.module.css';
import profilePic from '../../../images/profile-circle.png';
import { connect } from 'react-redux';
import { getLastFiveUsers } from '../../../actions/user.action';
import { lastFiveRegisteredCourses } from '../../../actions/course.action';
import moment from 'moment';
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
  const { lastFiveRegisteredCourses } = props.course;
  console.log(lastFiveRegisteredCourses);
  var renderContentUser;
  var renderContentRegCourses;
  if (lastFiveRegisteredCourses === null || props.course.loading) {
    renderContentRegCourses = 'Loading';
  } else {
    renderContentRegCourses =
      lastFiveRegisteredCourses.lastFiveRegisteredCourses.map((data) => {
        return (
          <tr>
            <td className={style.widget_table_user}>
              <img src={profilePic} alt="pp" />
              <span className={style.widget_table_name}>
                {data.userId.name}
              </span>
            </td>
            <td className={style.widget_table_date}>{data.userId.email}</td>
            <td className={style.widget_table_amount}>{data.courseId.name}</td>
            <td className={style.widget_table_status}>
              <span>{moment(data.date).format('MMM Do YY')}</span>
            </td>
          </tr>
        );
      });
  }
  if (lastFiveUsers === null || loading) {
    renderContentUser = 'Loading';
  } else {
    renderContentUser = lastFiveUsers.lastFiveUsers.map((widget, index) => {
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
        </li>
      );
    });
  }
  useEffect(() => {
    props.getLastFiveUsers();
    props.lastFiveRegisteredCourses();
  }, []);
  return (
    <div className="col-lg-12">
      <div className="row">
        <div className="col-lg-4 .col-md-12">
          <div className={style.widget}>
            <span className={style.widget_title}>New Join Members</span>
            <ul className={style.widget_list}>{renderContentUser}</ul>
          </div>
        </div>
        <div className="col-lg-8 .col-md-12">
          <div className={`${style.widget} ${style.widget_right}`}>
            <span className={style.widget_title}>
              Latest Registered Courses
            </span>
            <table className={`${style.widget_table} table`}>
              <thead>
                <tr>
                  <th scope="col">Student</th>
                  <th scope="col">Email</th>
                  <th scope="col">Course Name</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>{renderContentRegCourses}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.user,
  course: state.course,
});
export default connect(mapStateToProps, {
  getLastFiveUsers,
  lastFiveRegisteredCourses,
})(AdminWidget);
