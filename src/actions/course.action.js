import { GET_ERRORS, GET_COURSES } from './types';
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
export const getAllCourses = () => async (dispatch) => {
  try {
    const response = await axios.get('/course');
    dispatch(getCourses(response.data));
  } catch (error) {
    return;
  }
};

const getCourses = (payload) => ({
  type: GET_COURSES,
  payload,
});
