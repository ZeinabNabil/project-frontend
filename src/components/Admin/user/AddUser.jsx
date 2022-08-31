import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../../../css/Admin/Adduser.module.css';
import store from '../../../store';
import Input from '../Input';
import { connect } from 'react-redux';
import { createUser } from '../../../actions/user.action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Select from './Select';
import { useTranslation } from 'react-i18next';
const AddUser = (props) => {
  const { t, i18n } = useTranslation();
  const roles = t('UserRoles', { returnObjects: true });
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });
  const { currentUser, isAuthenticated } = props.user;
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth/login');
    }
    if (currentUser.role != 1) {
      navigate('/notAuth');
    }
  }, []);
  const { errors } = props.error;
  const onInputChange = (e) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };
  const onFormSubmit = async (evt) => {
    evt.preventDefault();
    const userData = {
      name: form.name,
      email: form.email,
      password: form.password,
      phone: form.phone,
      confirmPassword: form.confirmPassword,
      role: form.role,
    };
    const result = await props.createUser(userData, t('createdUserMessage'));
    if (result) {
      setTimeout(() => {
        navigate('/dashboard/users/view');
      }, 800);
    }
  };

  useEffect(() => {
    store.dispatch({
      type: 'GET_ERRORS',
      payload: {},
    });
  }, []);

  return (
    <div className={style.adduser}>
      <div className={style.title}>
        <span>
          <FontAwesomeIcon icon={faPlus} />
          {t('addNewUser')}
        </span>
      </div>
      <div className={style.formcontainer}>
        <form className="form-group" onSubmit={onFormSubmit}>
          <Input
            onChange={onInputChange}
            value={form.name}
            name="name"
            labelName={t('UserName')}
            type="text"
            class="form-control"
            placeholder={t('UserNamePlaceholder')}
            err={errors ? errors.name : ''}
          />
          <Input
            onChange={onInputChange}
            value={form.email}
            name="email"
            labelName={t('UserEmail')}
            type="email"
            placeholder={t('UserEmailPlaceholder')}
            err={errors ? errors.email : ''}
          />
          <Input
            onChange={onInputChange}
            value={form.password}
            labelName={t('UserPassword')}
            name="password"
            type="password"
            placeholder={t('UserPasswordPlaceholder')}
            err={errors ? errors.password : ''}
          />
          <Input
            onChange={onInputChange}
            value={form.confirmPassword}
            name="confirmPassword"
            labelName={t('UserConfirmPassword')}
            type="password"
            placeholder={t('UserConfirmPasswordPlaceholder')}
            err={errors ? errors.confirmPassword : ''}
          />
          <Input
            onChange={onInputChange}
            value={form.phone}
            labelName={t('UserPhone')}
            name="phone"
            type="text"
            class="form-control"
            placeholder={t('UserPhonePlaceholder')}
            err={errors ? errors.phone : ''}
          />
          <Select
            items={roles}
            labelName={t('UserRole')}
            value={form.role}
            onChange={onInputChange}
            name="role"
          />
          <div className={style.save_btn}>
            <button className="btn">{t('Save')}</button>
          </div>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  error: state.error,
  user: state.user,
});
export default connect(mapStateToProps, { createUser })(AddUser);
