import React from 'react';
import InquriyInput from '../ContactUs/InquiryInput';
import classnames from 'classnames';
import style from '../../css/ContactUs/Contactus.module.css';

const FeedbackForm = ({ form, errors, onInputChange, onFormSubmit }) => {
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <label
              className={style.formlabel}
              style={{ color: 'black', padding: '4px', fontWeight: 'bold' }}
            >
              Review
            </label>
          </div>
          <textarea
            className={classnames('form-control', {
              'is-invalid': errors ? errors.review : '',
            })}
            style={{ width: '100%', marginTop: '5px' }}
            rows={4}
            onChange={onInputChange}
            value={form.review}
            name="review"
            type="text"
            placeholder=""
          ></textarea>
          {errors && <div className="invalid-feedback">{errors.review}</div>}
        </div>

        <InquriyInput
          name="trainee"
          onChange={onInputChange}
          value={form.trainee}
          labelName="Trainee"
          type="text"
          placeholder=""
          err={errors ? errors.trainee : ''}
        />
        <div className={style.sendmsg_btn}>
          <button className="btn btn-primary">Save</button>
        </div>
      </form>
    </>
  );
};

export default FeedbackForm;
