import React, { useEffect, useState } from 'react';
import style from '../../css/ContactUs/Contactus.module.css';
import InquriyInput from './InquiryInput';
import { connect } from 'react-redux';
import { createInquiry } from './../../actions/inquiry.action';
import store from '../../store';
import classnames from 'classnames';
const InquiryForm = (props) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    inquiries: '',
  });
  const onInputChange = (e) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };
  const { errors } = props.error;
  useEffect(() => {
    store.dispatch({
      type: 'GET_ERRORS',
      payload: {},
    });
  }, []);
  const onFormSubmit = async (evt) => {
    evt.preventDefault();
    const Data = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      inquiries: form.inquiries,
    };
    props.createInquiry(Data);
    setForm({
      name: '',
      email: '',
      phone: '',
      inquiries: '',
    });
  };
  return (
    <form onSubmit={onFormSubmit}>
      <InquriyInput
        name="name"
        onChange={onInputChange}
        value={form.name}
        labelName="Full name"
        type="text"
        placeholder=""
        err={errors ? errors.name : ''}
      />
      <InquriyInput
        name="phone"
        onChange={onInputChange}
        value={form.phone}
        labelName="Mobile Number"
        type="text"
        placeholder=""
        err={errors ? errors.phone : ''}
      />
      <InquriyInput
        name="email"
        onChange={onInputChange}
        value={form.email}
        labelName="Email"
        type="email"
        placeholder=""
        err={errors ? errors.email : ''}
      />
      <div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <label
            className={style.formlabel}
            style={{ color: 'black', padding: '4px', fontWeight: 'bold' }}
          >
            Inquiries
          </label>
        </div>
        <textarea
          className={classnames('form-control', {
            'is-invalid': errors ? errors.inquiries : '',
          })}
          style={{ width: '100%', marginTop: '5px' }}
          rows={4}
          onChange={onInputChange}
          value={form.inquiries}
          name="inquiries"
          type="text"
          placeholder=""
        ></textarea>
        {errors && <div className="invalid-feedback">{errors.inquiries}</div>}
      </div>
      <div className={style.sendmsg_btn}>
        <button className="btn btn-primary">Send Message</button>
      </div>
    </form>
  );
};
const mapStateToProps = (state) => ({
  error: state.error,
});
export default connect(mapStateToProps, { createInquiry })(InquiryForm);
