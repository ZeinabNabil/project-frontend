import React, { useEffect, useState } from 'react';
import style from '../../../css/user/UserProfile.module.css';
import ProfileEditInput from './ProfileEditInput';
import UserCourseCard from './UserCourseCard';
import IELTS from '../../../images/IELTS.jpg';
import TOEFL from '../../../images/TOEFL_Logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faUser } from '@fortawesome/free-solid-svg-icons';
import Switch from 'react-switch';
import { getRegisteredCourses } from '../../../actions/course.action';
import { connect } from 'react-redux';
const UserProfile = (props) => {
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const onInputChange = (e) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };

  const { currentUser } = props.user;
  useEffect(() => {
    props.getRegisteredCourses(currentUser._id);
  }, []);
  useEffect(() => {
    setForm({
      name: currentUser.name,
      email: currentUser.email,
      phone: currentUser.phone,
    });
  }, [currentUser]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const user = new FormData();
    user.append('name', form.name);
    user.append('phone', form.phone);
    user.append('email', form.email);
  };
  const { registeredCourses, loading } = props.course;
  var renderContent;
  if (registeredCourses === null || loading) {
    renderContent = 'Loading';
  } else {
    renderContent = registeredCourses.courses.map((course) => {
      return (
        <div className="col-lg-3 col-md-4 col-sm-6">
          {console.log(course)}
          <UserCourseCard course={course} />
        </div>
      );
    });
  }
  const [toggleChecked, setToggleChecked] = useState(false);
  const handleToggleChange = (checked) => {
    setToggleChecked(checked);
    setEdit(!edit);
  };
  return (
    <div>
      {/* ---------------------------------welcome area-----------------------------------*/}
      <div className={style.welcomeArea}>
        <div className={style.welcomequote}>
          <div className="container">
            <div className="row">
              <div className=" col-lg-12 col-md-12 col-sm-12">
                <h1>Hello {form.name}</h1>
                <p>
                  This is your profile page. You can see and update your
                  information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------- end welcome area---------------------------- */}

      {/* --------------------------------start info card------------------------- */}
      <div className={style.profilecardcontainer}>
        <div className="card">
          <div className={`card-header ${style.card_header}`}>
            <h5>
              <FontAwesomeIcon icon={faUser} /> Personal Information
            </h5>
            <label>
              <Switch
                onColor="#FACC5A"
                offColor="#3c99dc"
                onChange={handleToggleChange}
                checked={toggleChecked}
              />
            </label>
          </div>
          <div className="card-body">
            <form onSubmit={onFormSubmit}>
              <div className="row">
                <ProfileEditInput
                  onChange={onInputChange}
                  name="name"
                  value={form.name}
                  labelName="Name"
                  type="text"
                  edit={edit}
                  className="form-control"
                  placeholder="Name"
                />

                <ProfileEditInput
                  onChange={onInputChange}
                  name="email"
                  value={form.email}
                  labelName="Email"
                  edit={edit}
                  type="email"
                  placeholder="Example : username @example.com"
                />
                <ProfileEditInput
                  onChange={onInputChange}
                  name="phone"
                  value={form.phone}
                  labelName="Phone"
                  type="text"
                  edit={edit}
                  className="form-control"
                  placeholder="phone number"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* ----------------------------start Courses------------------- */}

      <div className="container">
        <div className={style.coursesHeader}>
          <span>Your Registered Courses</span>
        </div>
        <div className={style.course_card_container}>
          <div className={style.courses}>
            <div className="row">{renderContent}</div>
          </div>
        </div>
      </div>
      {/* ----------------------------end courses------------------ */}

      {/* ----------------------------end info card------------------- */}
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.user,
  course: state.course,
});
export default connect(mapStateToProps, { getRegisteredCourses })(UserProfile);
