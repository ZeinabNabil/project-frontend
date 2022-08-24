import {
  GET_ERRORS,
  GET_COURSES,
  GET_COURSE,
  COURSE_LOADING,
  GET_COURSES_CATEGORY,
  GET_NUMBER_OF_COURSES,
  GET_NUMBER_OF_REGISTERED_COURESES,
  GET_REGISTERED_COURSES,
  GET_LAST_FIVE_REGISTERED_COURSES,
} from './types';
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
    toastify(response.data.message);
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};
export const getAllCourses = (lang) => async (dispatch) => {
  try {
    dispatch({
      type: COURSE_LOADING,
    });
    const response = await axios.get(`/course?lang=${lang}`);
    dispatch({
      type: GET_COURSES,
      payload: response.data,
    });
  } catch (error) {
    return;
  }
};
export const getCourseById = (id) => async (dispatch) => {
  dispatch(Loading);
  try {
    const response = await axios.get(`/course/${id}`);
    dispatch({
      type: GET_COURSE,
      payload: response.data.course,
    });
  } catch (error) {
    console.log(error.response);
  }
};
export const Loading = () => ({
  type: COURSE_LOADING,
});
export const getCoursesByCategory = (category, lang) => async (dispatch) => {
  try {
    dispatch({
      type: COURSE_LOADING,
    });
    const response = await axios.get(
      `/course/category/${category}?lang=${lang}`
    );
    dispatch({
      type: GET_COURSES_CATEGORY,
      payload: response.data.courses,
    });
  } catch (error) {
    // console.log(error.response.data);
  }
};
export const numberOfCourses = () => async (dispatch) => {
  try {
    const response = await axios.get('/course/count');
    dispatch({
      type: GET_NUMBER_OF_COURSES,
      payload: response.data.numberOfCourses,
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const numberOfRegisteredCourses = () => async (dispatch) => {
  try {
    const response = await axios.get('/course/count/registeredCourses');
    dispatch({
      type: GET_NUMBER_OF_REGISTERED_COURESES,
      payload: response.data.numberOfRegisteredCourses,
    });
  } catch (error) {
    console.log(error.response.data);
  }
};
export const getRegisteredCourses = (id, lang) => async (dispatch) => {
  try {
    const response = await axios.get(
      `/course/showregisteredcourses/${id}?lang=${lang}`
    );
    dispatch({
      type: GET_REGISTERED_COURSES,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.response.data);
  }
};
export const registerCourse =
  (courseId, courseCode, successMsg, navigate) => async (dispatch) => {
    try {
      await axios.post('/course/registercourse', {
        courseId: courseId,
        courseCode: courseCode,
      });
      console.log(courseCode);
      toastify(successMsg);
      navigate(0);
    } catch (error) {
      console.log(error.response.data);
    }
  };
export const lastFiveRegisteredCourses = () => async (dispatch) => {
  dispatch({
    type: COURSE_LOADING,
  });
  try {
    const response = await axios.get('/course/lastfive');
    dispatch({
      type: GET_LAST_FIVE_REGISTERED_COURSES,
      payload: response.data,
    });
  } catch (error) {}
};
export const updateCourse = (courseData, id, navigate) => async (dispatch) => {
  try {
    await axios.patch(`/course/update/${id}`, courseData);
    toastify('Successfully Updated Course');
    setTimeout(() => {
      navigate('/dashboard/courses/view');
    }, 800);
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};
export const deleteCourse = (id) => async (dispatch) => {
  try {
    await axios.delete(`/course/delete/${id}`);
  } catch (error) {}
};

export const image = (courseId) => async (dispatch) => {
  try {
    dispatch({
      type: COURSE_LOADING,
    });
    await axios.get(`/course/image/${courseId}`);
  } catch (error) {}
};
