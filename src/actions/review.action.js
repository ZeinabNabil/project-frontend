import { GET_ERRORS, GET_REVIEWS, INQ_LOADING } from './types';
import axios from 'axios';
import { toast } from 'react-toastify';
toast.configure();
const toastify = (message) => {
  toast.info(message, {
    icon: false,
    pauseOnFocusLoss: false,
    autoClose: 1500,
  });
};
export const createReview = (reviewData) => async (dispatch) => {
  try {
    await axios.post('/review/add', reviewData);
    toastify('Successfully Send Your review, Thanks :)');
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};
export const showReviews = () => async (dispatch) => {
  dispatch({
    type: INQ_LOADING,
  });
  try {
    const response = await axios.get('/review/show');
    dispatch({
      type: GET_REVIEWS,
      payload: response.data,
    });
  } catch (error) {}
};
export const acceptReview = (id) => async (dispatch) => {
  try {
    await axios.patch(`/review/update/${id}`);
  } catch (error) {
    console.log(error);
  }
};
export const deleteReview = (id) => async (dispatch) => {
  try {
    await axios.delete(`/review/delete/${id}`);
  } catch (error) {
    console.log(error);
  }
};
