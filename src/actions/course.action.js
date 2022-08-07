import { GET_ERRORS } from './types';
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
export const addCourse = (courseData) => async (dispatch) => {
  try {
    const response = await axios.post('/course/add', courseData);
    console.log(response.data);
    toastify(response.data.message);
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};
