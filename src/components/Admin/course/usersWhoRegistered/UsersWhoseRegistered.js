import axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { usersWhoAssignedCourse } from '../../../../actions/course.action';
import { useParams, useNavigate } from 'react-router-dom';
import LoadingData from '../../../../LoadingData';
import Table from './../../../Table';
import registeredCourseColumn from './registeredCourseColumn';
const UsersWhoseRegistered = (props) => {
  const navigate = useNavigate();
  const { courseCode } = useParams();
  const { currentUser, isAuthenticated } = props.user;
  useEffect(() => {
    if (!isAuthenticated) {
      return navigate('/auth/login');
    }
    if (currentUser.role == 0) {
      return navigate('/notAuth');
    } else {
      props.usersWhoAssignedCourse(courseCode);
    }
  }, []);
  const { whoseRegistereCourse, loading } = props.course;

  var renderContent;
  if (whoseRegistereCourse === null || loading) {
    renderContent = (
      <div style={{ marginTop: '80px' }}>
        <h3 className="text-center">
          <LoadingData />
          Loading ...
        </h3>
      </div>
    );
  } else {
    if (whoseRegistereCourse.message) {
      renderContent = <h3 className="text-center">In Valid ID, Try Again</h3>;
      return renderContent;
    }
    renderContent =
      whoseRegistereCourse.users !== 0 ? (
        <div>
          <h3 className="text-center">
            {whoseRegistereCourse.users[0]
              ? whoseRegistereCourse.users[0].courseId.name
              : ''}
          </h3>
          <Table
            btnName="Back To List"
            btnLink="courses/view"
            columns={registeredCourseColumn()}
            data={whoseRegistereCourse.users || []}
          />
        </div>
      ) : null;
  }
  return (
    <div>
      <h3 className="text-center">{renderContent}</h3>
    </div>
  );
};

const mapStateToProps = (state) => ({
  course: state.course,
  user: state.user,
});
export default connect(mapStateToProps, { usersWhoAssignedCourse })(
  UsersWhoseRegistered
);
