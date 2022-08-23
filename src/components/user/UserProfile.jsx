import React, { useEffect, useState } from 'react';
import style from '../../css/user/UserProfile.module.css';
import ProfileEditInput from './ProfileEditInput';
import UserCourseCard from './UserCourseCard';
import { getRegisteredCourses } from '../../actions/course.action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Switch from 'react-switch';
import { connect } from 'react-redux';
import { updateUser, getCurrentProfile } from './../../actions/user.action';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const UserProfile = (props) => {
  const { t } = useTranslation();
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

  const { profile, currentUser } = props.user;
  useEffect(() => {
    props.getRegisteredCourses(currentUser._id);
    props.getCurrentProfile();
  }, []);

  useEffect(() => {
    if (profile !== null) {
      setForm({
        name: profile.profile.name,
        email: profile.profile.email,
        phone: profile.profile.phone,
      });
    }
  }, [profile]);
  const navigate = useNavigate();
  const onFormSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: form.name,
      email: form.email,
      phone: form.phone,
    };

    props.updateUser('me', userData, navigate, '/profile');
  };
  const { registeredCourses, loading } = props.course;
  var renderContent;
  var courseLength;
  if (registeredCourses === null || loading) {
    renderContent = 'Loading';
  } else {
    courseLength = registeredCourses.courses.length;
    renderContent = registeredCourses.courses.map((course) => {
      return (
        <div className="col-lg-3 col-md-4 col-sm-6">
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
                <h1>{form.name} </h1>
                <p>{t('profileParagraph')}</p>
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
              <FontAwesomeIcon icon={faUser} /> {t('personalInformation')}
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
                  labelName={t('UserName')}
                  type="text"
                  edit={edit}
                  className="form-control"
                  placeholder="الاسم"
                />

                <ProfileEditInput
                  onChange={onInputChange}
                  name="email"
                  value={form.email}
                  labelName={t('UserEmail')}
                  edit={edit}
                  type="email"
                  placeholder="Example : username @example.com"
                />
                <ProfileEditInput
                  onChange={onInputChange}
                  name="phone"
                  value={form.phone}
                  labelName={t('UserPhone')}
                  type="text"
                  edit={edit}
                  className="form-control"
                  placeholder="phone number"
                />
              </div>
              <button
                className="btn btn-primary"
                disabled={toggleChecked ? false : true}
              >
                {t('Save')}
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* ----------------------------start Courses------------------- */}

      <div className="container">
        <div className={style.coursesHeader}>
          <span>{t('yourRegisteredCourses')}</span>
        </div>
        {courseLength !== 0 ? (
          <div className={style.course_card_container}>
            <div className={style.courses}>
              <div className="row">{renderContent}</div>
            </div>
          </div>
        ) : (
          ''
        )}
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
export default connect(mapStateToProps, {
  getRegisteredCourses,
  updateUser,
  getCurrentProfile,
})(UserProfile);
