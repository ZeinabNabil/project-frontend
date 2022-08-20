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
const AddUser = (props) => {
  const roles = [
    {
      name: 'مشرف',
      value: 1,
    },
    {
      name: 'مســاعد',
      value: 2,
    },
    {
      name: 'وســـيط',
      value: 3,
    },
  ];
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });
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
          اضــافة مستخدم جــديـد
        </span>
      </div>
      <div className={style.formcontainer}>
        <form className="form-group" onSubmit={onFormSubmit}>
          <Input
            onChange={onInputChange}
            value={form.name}
            name="name"
            labelName="اسم المستخدم"
            type="text"
            class="form-control"
            placeholder="الاسم"
            err={errors ? errors.name : ''}
          />
          <Input
            onChange={onInputChange}
            value={form.email}
            name="email"
            labelName="البريد الالكتروني"
            type="email"
            placeholder="قم بكتابة البريد الالكتروني هنا"
            err={errors ? errors.email : ''}
          />
          <Input
            onChange={onInputChange}
            value={form.password}
            labelName="كلمة السر"
            name="password"
            type="password"
            placeholder="ادخل كلمة السر الخاصة بك"
            err={errors ? errors.password : ''}
          />
          <Input
            onChange={onInputChange}
            value={form.confirmPassword}
            name="confirmPassword"
            labelName="تــأكيد كلمة السر"
            type="password"
            placeholder="قم بكتابة كلمة السر مرة اخري"
            err={errors ? errors.confirmPassword : ''}
          />
          <Input
            onChange={onInputChange}
            value={form.phone}
            labelName="رقم الهاتف"
            name="phone"
            type="text"
            class="form-control"
            placeholder="رقم الهاتف الخاص بك"
            err={errors ? errors.phone : ''}
          />
          <Select
            items={roles}
            labelName="دور المستخدم"
            value={form.role}
            onChange={onInputChange}
            name="role"
          />
          <div className={style.save_btn}>
            <button className="btn">حفظ البـــيانات</button>
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
