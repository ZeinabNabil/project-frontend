import React, { useState, useEffect } from 'react';
import FeedbackForm from './FeedbackForm';
import style from '../../css/feedback/feedback.module.css';
import { createReview } from './../../actions/review.action';
import { connect } from 'react-redux';
import store from './../../store';
import { useNavigate } from 'react-router-dom';
const Feedback = (props) => {
  useEffect(() => {
    document.title = 'Review';
  }, []);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    review: undefined,
    trainee: undefined,
  });
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
  }, []);
  const { currentUser, isAuthenticated } = props.user;
  const { errors } = props.error;
  const onFormSubmit = async (evt) => {
    evt.preventDefault();
    const reviewData = {
      review: form.review,
      trainee: form.trainee,
    };
    if (!isAuthenticated) {
      navigate('/auth/login');
    }
    props.createReview(reviewData);
  };
  var renderContent;
  if (isAuthenticated) {
    renderContent = (
      <div className={style.feedback}>
        <FeedbackForm
          form={form}
          onInputChange={onInputChange}
          onFormSubmit={onFormSubmit}
          errors={errors}
        />
      </div>
    );
  } else {
    renderContent = (
      <div>
        <h3
          className="text-center"
          style={{ marginBottom: '290px', marginTop: '50px' }}
        >
          Please Login To Send Your Reviews
        </h3>
      </div>
    );
  }
  return <div className="container">{renderContent}</div>;
};
const mapStateToProps = (state) => ({
  error: state.error,
  user: state.user,
});
export default connect(mapStateToProps, { createReview })(Feedback);
