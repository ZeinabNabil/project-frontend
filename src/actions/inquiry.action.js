import { GET_ERRORS } from './types';
import axios from 'axios';

export const createInquiry = (inquiryData) => async (dispatch) => {
  try {
    await axios.post('/inquiry/add', inquiryData);
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};
