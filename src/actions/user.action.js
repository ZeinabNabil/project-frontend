import axios from 'axios';
import { GET_ERRORS, LOGOUT, SET_CURRENT_USER } from './types';
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
export const createUser = (userData, navigate) => async (dispatch) => {
  try {
    await axios.post('/user/create', userData);
    toastify('Successfully Registered');
    setTimeout(() => {
      navigate('/auth/login');
    }, 800);
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const loginUser = (userData, navigate) => async (dispatch) => {
  try {
    const response = await axios.post('/user/login', userData);
    const { user, token } = response.data;

    localStorage.setItem('token', token);
    setAuthToken(token);
    const decoded = jwt_decode(token);
    dispatch(setCurrentUser(decoded));
    setTimeout(() => {
      if (user.role == 1) {
        navigate('/admin');
      } else {
        navigate('/');
      }
    }, 800);

    toastify('Successfully Logged In');
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

export const logoutUser = () => async (dispatch) => {
  try {
    const response = await axios.post('/user/logout');
    toastify('Good Bye :( , We will be waiting for you');

    setTimeout(() => {
      window.location.reload();
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
    const response = await axios.get('/user/profile/me');
  } catch (error) {}
};
