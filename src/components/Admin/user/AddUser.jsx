import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../../../css/Admin/Adduser.module.css';
import store from '../../../store';
import Input from '../Input';
import { connect } from 'react-redux';
import { createUser } from '../../../actions/user.action';
import BackToList from '../BackToList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddUser = (props) => {
  const navigate = useNavigate();

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
  const { errors } = props.error;

  const onFormSubmit = async (evt) => {
    evt.preventDefault();
    const userData = {
      name: form.name,
      email: form.email,
      password: form.password,
      phone: form.phone,
      confirmPassword: form.confirmPassword,
    };
    const result = await props.createUser(userData);
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
          Add User
        </span>
      </div>
      <div className={style.formcontainer}>
        <form className="form-group" onSubmit={onFormSubmit}>
          <Input
            onChange={onInputChange}
            value={form.name}
            name="name"
            labelName="User Name"
            type="text"
            class="form-control"
            placeholder="Username"
            err={errors ? errors.name : ''}
          />
          <Input
            onChange={onInputChange}
            value={form.email}
            name="email"
            labelName="Email"
            type="email"
            placeholder="Example : username @example.com"
            err={errors ? errors.email : ''}
          />
          <Input
            onChange={onInputChange}
            value={form.password}
            labelName="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            err={errors ? errors.password : ''}
          />
          <Input
            onChange={onInputChange}
            value={form.confirmPassword}
            name="confirmPassword"
            labelName="Confirm password"
            type="password"
            placeholder="Confirm your password"
            err={errors ? errors.confirmPassword : ''}
          />
          <Input
            onChange={onInputChange}
            value={form.phone}
            labelName="Phone"
            name="phone"
            type="text"
            class="form-control"
            placeholder="phone number"
            err={errors ? errors.phone : ''}
          />
          <div className={style.save_btn}>
            <button className="btn">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  error: state.error,
});
export default connect(mapStateToProps, { createUser })(AddUser);
