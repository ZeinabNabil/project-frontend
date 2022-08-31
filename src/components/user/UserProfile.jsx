import React, { useEffect, useState } from 'react';
import style from '../../css/user/UserProfile.module.css';
import ProfileEditInput from './ProfileEditInput';
import UserCourseCard from './UserCourseCard';
import {
  getRegisteredCourses,
  CancelCourse,
} from '../../actions/course.action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Switch from 'react-switch';
import { connect } from 'react-redux';
import { updateUser, getCurrentProfile } from './../../actions/user.action';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import store from '../../store';
import { confirm } from './../Admin/Confirmation';
const UserProfile = (props) => {
  const { t, i18n } = useTranslation();
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({
    name: undefined,
    phone: undefined,
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
    changePassword: false,
  });
  const [changePassword, setChangePassword] = useState(false);
  const onInputChange = (e) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };
  useEffect(() => {
    store.dispatch({
      type: 'GET_ERRORS',
      payload: {},
    });
    document.title = 'Profile';
  }, []);
  const { errors } = props.error;
  const { profile, currentUser } = props.user;
  useEffect(() => {
    props.getCurrentProfile();
  }, []);
  useEffect(() => {
    props.getRegisteredCourses(currentUser._id, i18n.resolvedLanguage);
  }, [i18n.reloadResources]);
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
    var userData = {
      name: form.name,
      email: form.email,
      phone: form.phone,
    };
    if (changePassword) {
      userData = {
        ...userData,
        password: form.password,
        confirmPassword: form.confirmPassword,
      };
    }
    props.updateUser('me', userData, navigate, 0, t('updatedProfileMessage'));
  };
  const { registeredCourses, loading } = props.course;
  const onCancelClick = async (id) => {
    if (await confirm(t('DeleteButtonMessage'))) {
      props.CancelCourse(id);
      setTimeout(() => {
        navigate(0);
      }, 2000);
    } else {
    }
  };
  var renderContent;
  var courseLength;

  const [toggleChecked, setToggleChecked] = useState(false);
  const handleToggleChange = (checked) => {
    setToggleChecked(checked);
    setEdit(!edit);
  };
  if (registeredCourses === null || loading) {
    renderContent = 'Loading';
  } else {
    courseLength = registeredCourses.courses.length;
    renderContent = registeredCourses.courses.map((course) => {
      return (
        <div className="col-lg-3 col-md-4 col-sm-6" key={course._id}>
          <UserCourseCard onCancelClick={onCancelClick} course={course} />
        </div>
      );
    });
  }

  return (
    <div>
      {/* ---------------------------------welcome area-----------------------------------*/}
      {props.imagebackground ? (
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
      ) : (
        <div style={{ marginTop: '150px' }}></div>
      )}
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
                  placeholder={t('UserNamePlaceholder')}
                  err={errors ? errors.name : ''}
                />
                <ProfileEditInput
                  onChange={onInputChange}
                  name="email"
                  value={form.email}
                  labelName={t('UserEmail')}
                  edit={edit}
                  type="email"
                  placeholder={t('UserEmailPlaceholder')}
                  err={errors ? errors.email : ''}
                />
                <ProfileEditInput
                  onChange={onInputChange}
                  name="phone"
                  value={form.phone}
                  labelName={t('UserPhone')}
                  type="text"
                  edit={edit}
                  className="form-control"
                  err={errors ? errors.phone : ''}
                  placeholder={t('UserPhonePlaceholder')}
                />
                <div
                  className="form-check"
                  style={{
                    margin: '15px',
                    display: 'inline-block',
                  }}
                >
                  <input
                    disabled={!edit}
                    className="form-check-input"
                    type="checkbox"
                    value={form.changePassword}
                    id="flexCheckDefault"
                    onChange={() => {
                      setChangePassword(!changePassword);
                    }}
                    checked={changePassword}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Change Your password
                  </label>
                </div>
                {changePassword === true ? (
                  <>
                    <ProfileEditInput
                      onChange={onInputChange}
                      name="password"
                      value={form.password}
                      labelName={t('UserPassword')}
                      type="password"
                      className="form-control"
                      placeholder={t('UserPasswordPlaceholder')}
                      err={errors ? errors.password : ''}
                    />
                    <ProfileEditInput
                      onChange={onInputChange}
                      name="confirmPassword"
                      value={form.confirmPassword}
                      labelName={t('UserConfirmPassword')}
                      type="password"
                      className="form-control"
                      err={errors ? errors.confirmPassword : ''}
                      placeholder={t('UserConfirmPasswordPlaceholder')}
                    />
                  </>
                ) : (
                  ''
                )}
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

      {props.imagebackground ? (
        <div className="container">
          {courseLength !== 0 ? (
            <div className={style.coursesHeader}>
              <span>{t('yourRegisteredCourses')}</span>
            </div>
          ) : (
            ''
          )}
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
      ) : (
        ''
      )}
      {/* ----------------------------end courses------------------ */}

      {/* ----------------------------end info card------------------- */}
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.user,
  error: state.error,
  course: state.course,
});
export default connect(mapStateToProps, {
  getRegisteredCourses,
  updateUser,
  getCurrentProfile,
  CancelCourse,
})(UserProfile);
