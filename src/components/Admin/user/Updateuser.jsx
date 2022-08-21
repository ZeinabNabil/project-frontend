import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import style from "../../../css/Admin/updateuser.module.css"
import Input from '../Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import store from '../../../store';
import { connect } from 'react-redux';
import { getUserById, updateUser } from '../../../actions/user.action';
import Select from './Select';
const UpdateUser = (props) => {
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
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    role: '',
  });
  const { profile } = props.user;
  console.log(profile);
  useEffect(() => {
    if (profile && id) {
      setForm({
        name: profile.profile.name,
        phone: profile.profile.phone,
        email: profile.profile.email,
        role: profile.profile.role,
      });
    }
  }, [profile]);
  useEffect(() => {
    store.dispatch({
      type: 'GET_ERRORS',
      payload: {},
    });
    if (id) {
      props.getUserById(id);
    }
  }, []);
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
      phone: form.phone,
      role: form.role,
    };
    props.updateUser(id, userData, navigate, '/dashboard/users/view');
  };
  return (
    <div className={style.updateuser}>
      <div className={style.title}>
        <span>
          <FontAwesomeIcon icon={faPenToSquare} /> تعديل المستخدم
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
            placeholder="Example : username @example.com"
            err={errors ? errors.email : ''}
          />
          <Input
            onChange={onInputChange}
            value={form.phone}
            labelName="رقم الهاتف"
            name="phone"
            type="text"
            class="form-control"
            placeholder="phone number"
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
            <button className="btn">حفظ البيانات</button>
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
export default connect(mapStateToProps, { getUserById, updateUser })(
  UpdateUser
);
