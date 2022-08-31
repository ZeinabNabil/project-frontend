import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRegisteredCourses } from '../../../../actions/course.action';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LoadingData from '../../../../LoadingData';
import usersCourseColumns from './usersCourseColumns';
import Table from './../../../Table';
const UsersCourses = (props) => {
  const { i18n } = useTranslation();
  const { userId } = useParams();
  useEffect(() => {
    props.getRegisteredCourses(userId, i18n.resolvedLanguage);
  }, []);
  const { loading, registeredCourses } = props.course;
  var renderContent;
  if (registeredCourses === null || loading) {
    renderContent = (
      <div style={{ marginTop: '80px' }}>
        <h3>
          <LoadingData />
          Loading....
        </h3>
      </div>
    );
  } else {
    renderContent = (
      <div>
        <Table
          btnName="Back To List"
          btnLink="users/view"
          columns={usersCourseColumns()}
          data={registeredCourses.courses || []}
        />
      </div>
    );
  }
  return <div>{renderContent}</div>;
};
const mapStateToProps = (state) => ({
  course: state.course,
});
export default connect(mapStateToProps, { getRegisteredCourses })(UsersCourses);
