import axios from 'axios';
import { GET_ERRORS } from './types';

export const createUser = (userData) => async (dispatch) => {
  try {
    await axios.post('/user/create', userData);
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};
