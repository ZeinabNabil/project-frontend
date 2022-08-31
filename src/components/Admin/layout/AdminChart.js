import React, { useEffect } from 'react';
import style from '../../../css/Admin/Dashboard.module.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { groupUserByDate } from '../../../actions/user.action';
import { connect } from 'react-redux';
const AdminChart = (props) => {
  useEffect(() => {
    props.groupUserByDate();
  }, []);
  const { analysis } = props.user;
  var renderContent;
  if (analysis === null) {
    renderContent = 'Loafin';
  } else {
    var arr = [];
    analysis.analysis.map((users) => {
      arr.push({
        name: users._id.month,
        month: users.count,
      });
    });

    renderContent = (
      <div className={style.home_chart}>
        <h3>User Analytics</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={arr}>
            <XAxis dataKey="name" stroke="#3c99dc" />
            <YAxis dataKey="month" stroke="#3c99dc" />
            <Line type="monotone" dataKey="month" stroke="#3280b8" />
            <Tooltip />
            <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }

  const data = [
    {
      name: 'Jan',
      'Active User': 4000,
    },
    {
      name: 'Feb',
      'Active User': 3000,
    },
    {
      name: 'Mar',
      'Active User': 0,
    },
    {
      name: 'Apr',
      'Active User': 2780,
    },
    {
      name: 'May',
      'Active User': 1890,
    },
    {
      name: 'Jun',
      'Active User': 2390,
    },
    {
      name: 'Jul',
      'Active User': 3490,
    },
    {
      name: 'Aug',
      'Active User': 2100,
    },
    {
      name: 'Sep',
      'Active User': 4500,
    },
    {
      name: 'Oct',
      'Active User': 1500,
    },
    {
      name: 'Nov',
      'Active User': 5000,
    },
    {
      name: 'Dec',
      'Active User': 3490,
    },
  ];
  return <div className="col-lg-12">{renderContent}</div>;
};

const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, { groupUserByDate })(AdminChart);
