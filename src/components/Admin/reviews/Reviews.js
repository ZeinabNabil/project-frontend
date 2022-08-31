import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  showReviews,
  acceptReview,
  deleteReview,
} from '../../../actions/review.action';
import reviewColumns from './ReviewsColumns';
import Table from './../../Table';
import LoadingData from '../../../LoadingData';
import { confirm } from './../Confirmation';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
const Reviews = (props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  useEffect(() => {
    props.showReviews();
  }, []);
  const onPostClick = async (id) => {
    if (await confirm(t('DeleteButtonMessage'))) {
      props.acceptReview(id);
      navigate(0);
    } else {
    }
  };
  const onDeleteClick = async (id) => {
    if (await confirm(t('DeleteButtonMessage'))) {
      props.deleteReview(id);
      navigate(0);
    } else {
    }
  };
  const { reviews, loading } = props.review;
  var renderContent;
  if (reviews === null || loading) {
    renderContent = (
      <div>
        <h3 className="text-center">
          <LoadingData />
          Loading..
        </h3>
      </div>
    );
  } else {
    renderContent = (
      <Table
        btnName=""
        btnLink="#"
        columns={reviewColumns(onPostClick, onDeleteClick)}
        data={reviews.reviews}
      />
    );
  }
  return <div>{renderContent}</div>;
};
const mapStateToProps = (state) => ({
  review: state.review,
});
export default connect(mapStateToProps, {
  showReviews,
  acceptReview,
  deleteReview,
})(Reviews);
