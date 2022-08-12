import React, { useEffect } from 'react';
import style from '../../../css/Admin/Dashboard.module.css';
import AdminChart from './AdminChart';
import AdminWidget from './AdminWidget';
import { connect } from 'react-redux';
import {
  numberOfUsers,
  numberOfUsersWhoseRegisterCourses,
} from './../../../actions/user.action';
import {
  numberOfCourses,
  numberOfRegisteredCourses,
} from './../../../actions/course.action';

const AdminHome = (props) => {
  useEffect(() => {
    props.numberOfUsers();
    props.numberOfCourses();
    props.numberOfRegisteredCourses();
    props.numberOfUsersWhoseRegisterCourses();
  }, []);
  const { numberOfUsers, loading, numberOfUsersWholeRegisteredCourses } =
    props.user;
  const { numberOfCourses, numberOfRegisteredCourses } = props.course;
  var renderNumberOfUsers;
  var renderNumberOfCourses;
  var renderNumberOfRegisteredCourses;
  var renderNumberOfUsersWholeRegisteredCourses;
  if (numberOfUsers === null || loading) {
    renderNumberOfUsers = 'Loading';
    renderNumberOfUsersWholeRegisteredCourses = 'Loading';
  } else {
    renderNumberOfUsers = numberOfUsers;
    renderNumberOfUsersWholeRegisteredCourses =
      numberOfUsersWholeRegisteredCourses;
  }
  if (numberOfCourses === null || props.course.loading) {
    renderNumberOfCourses = 'Loading';
    renderNumberOfRegisteredCourses = 'Loading';
  } else {
    renderNumberOfCourses = numberOfCourses;
    renderNumberOfRegisteredCourses = numberOfRegisteredCourses;
  }
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
                    <div className={style.feature_count}>
                      {renderNumberOfUsers}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className={style.feature_item}>
                  <div className={style.feature_title}>Number of Courses</div>
                  <div className={style.feature_container}>
                    <div className={style.feature_count}>
                      {renderNumberOfCourses}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className={style.feature_item}>
                  <div className={style.feature_title}>Registered courses</div>
                  <div className={style.feature_container}>
                    <div className={style.feature_count}>
                      {renderNumberOfRegisteredCourses}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className={style.feature_item}>
                  <div className={style.feature_title}>Whose Assigned</div>
                  <div className={style.feature_container}>
                    <div className={style.feature_count}>
                      {renderNumberOfRegisteredCourses}
                    </div>
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
const mapStateToProps = (state) => ({
  user: state.user,
  course: state.course,
});
export default connect(mapStateToProps, {
  numberOfUsers,
  numberOfCourses,
  numberOfRegisteredCourses,
  numberOfUsersWhoseRegisterCourses,
  numberOfUsersWhoseRegisterCourses,
})(AdminHome);
