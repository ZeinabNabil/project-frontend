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
import { useTranslation } from 'react-i18next';
const AdminHome = (props) => {
  const { i18n, t } = useTranslation();
  useEffect(() => {
    props.numberOfUsers();
    props.numberOfCourses(i18n.resolvedLanguage);
    props.numberOfRegisteredCourses();
    props.numberOfUsersWhoseRegisterCourses();
  }, []);
  const { numberOfUsers, loading, numberOfUsersWholeRegisteredCourses } =
    props.user;
  const { numberOfCourses, numberOfRegisteredCourses } = props.course;
  var renderContent;

  if (
    (numberOfUsers === null || loading) &&
    (numberOfCourses === null || props.course.loading)
  ) {
    renderContent = 'Loading';
  } else {
    renderContent = (
      <div className="row">
        <div className="col-lg-12">
          <div className={style.feature}>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className={style.feature_item}>
                  <div className={style.feature_title}>{t('usersNumber')}</div>
                  <div className={style.feature_container}>
                    <div className={style.feature_count}>{numberOfUsers}</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className={style.feature_item}>
                  <div className={style.feature_title}>
                    {t('coursesNumber')}
                  </div>
                  <div className={style.feature_container}>
                    <div className={style.feature_count}>{numberOfCourses}</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className={style.feature_item}>
                  <div className={style.feature_title}>
                    {t('registeredCourses')}
                  </div>
                  <div className={style.feature_container}>
                    <div className={style.feature_count}>
                      {numberOfRegisteredCourses}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className={style.feature_item}>
                  <div className={style.feature_title}>
                    {t('UsersHasCourses')}
                  </div>
                  <div className={style.feature_container}>
                    <div className={style.feature_count}>
                      {numberOfUsersWholeRegisteredCourses}
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
    );
  }

  return <div className={style.home}>{renderContent}</div>;
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
