import { GET_ERRORS, GET_INQUIRIES, INQ_LOADING } from './types';
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
export const createInquiry = (inquiryData) => async (dispatch) => {
  try {
    await axios.post('/inquiry/add', inquiryData);
    toastify('Successfully Send Your Inquiries, Thanks :)');
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};
export const showInquiries = () => async (dispatch) => {
  dispatch({
    type: INQ_LOADING,
  });
  try {
    const response = await axios.get('/inquiry/show');
    dispatch({
      type: GET_INQUIRIES,
      payload: response.data,
    });
  } catch (error) {}
};
