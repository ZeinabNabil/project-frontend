import axios from 'axios';
import {
  GET_ERRORS,
  GET_USERS,
  LOGOUT,
  SET_CURRENT_USER,
  GET_NUMBER_OF_USERS,
  GET_NUMBER_OF_USERS_WHOSE_REGISTERED_COURSES,
  CURRENT_PROFILE,
  GET_LAST_FIVE_USERS,
  USER_LOADING,
  GET_USER,
  GET_ANALYSIS_USERS,
} from './types';
import { toast } from 'react-toastify';
import setAuthToken from './../utilis/setAuthToken';
import jwt_decode from 'jwt-decode';
toast.configure();
const toastify = (message) => {
  toast.info(message, {
    icon: false,
    pauseOnFocusLoss: false,
    autoClose: 1000,
  });
};
export const createUser = (userData, messageSuccess) => async (dispatch) => {
  try {
    await axios.post('/user/create', userData);
    toastify(messageSuccess);
    return true;
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
    return false;
  }
};

export const loginUser = (userData, navigate, message) => async (dispatch) => {
  try {
    const response = await axios.post('/user/login', userData);
    const { user, token } = response.data;

    localStorage.setItem('token', token);
    setAuthToken(token);
    const decoded = jwt_decode(token);
    dispatch(setCurrentUser(decoded));
    setTimeout(() => {
      if (user.role != 0) {
        navigate('/dashboard/home');
      } else {
        navigate('/');
      }
    }, 800);

    toastify(message);
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const logoutUser = (navigate, message) => async (dispatch) => {
  try {
    const response = await axios.post('/user/logout');
    toastify(message);

    setTimeout(() => {
      navigate('/auth/login');
      dispatch({
        type: LOGOUT,
        payload: {},
      });
    }, 800);
    localStorage.removeItem('token');
  } catch (error) {}
};

export const currentProfile = (id) => async (dispatch) => {
  try {
    dispatch(loading);

    const response = await axios.get('/user/profile/me');
    dispatch({
      type: CURRENT_PROFILE,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    dispatch(loading);

    const response = await axios.get('/user');
    dispatch({
      type: GET_USERS,
      payload: response.data,
    });
  } catch (error) {
    return;
  }
};

export const numberOfUsers = () => async (dispatch) => {
  try {
    dispatch(loading);

    const response = await axios.get('/user/count');
    dispatch({
      type: GET_NUMBER_OF_USERS,
      payload: response.data.numberOfUsers,
    });
  } catch (error) {
    console.log(error.response.data);
  }
};
export const numberOfUsersWhoseRegisterCourses = () => async (dispatch) => {
  try {
    dispatch(loading);

    const response = await axios.get(
      '/user/count/numberOfUsersWhoseRegisteredCourses'
    );
    dispatch({
      type: GET_NUMBER_OF_USERS_WHOSE_REGISTERED_COURSES,
      payload: response.data.numberOfUsersWhoseRegisteredCourses,
    });
  } catch (error) {
    console.log(error.response.data);
  }
};
export const getLastFiveUsers = () => async (dispatch) => {
  try {
    dispatch(loading);
    const response = await axios.get('/user/lastfive');
    dispatch({
      type: GET_LAST_FIVE_USERS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.response.data);
  }
};
export const getUserById = (id) => async (dispatch) => {
  dispatch(loading);
  try {
    const response = await axios.get(`/user/userprofile/${id}`);
    dispatch({
      type: GET_USER,
      payload: response.data,
    });
  } catch (error) {}
};
export const updateUser =
  (id, userData, navigate, link, message) => async (dispatch) => {
    try {
      await axios.patch(`/user/update/${id}`, userData);
      toastify(message);

      setTimeout(() => {
        navigate(link);
      }, 800);
    } catch (error) {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data,
      });
    }
  };
export const getCurrentProfile = () => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await axios.get('/user/profile/me');
    dispatch({
      type: GET_USER,
      payload: response.data,
    });
  } catch (error) {}
};
export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`/user/delete/${id}`);
  } catch (error) {}
};
export const groupUserByDate = () => async (dispatch) => {
  try {
    // http://localhost:5000/user/test
    const response = await axios.get('/user/analysis');
    dispatch({
      type: GET_ANALYSIS_USERS,
      payload: response.data,
    });
  } catch (error) {}
};
const loading = () => {
  return {
    type: USER_LOADING,
  };
};
