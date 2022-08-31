import {
  LOGOUT,
  SET_CURRENT_USER,
  USER_LOADING,
  GET_USERS,
  GET_NUMBER_OF_USERS_WHOSE_REGISTERED_COURSES,
  GET_NUMBER_OF_USERS,
  GET_LAST_FIVE_USERS,
  GET_USER,
  GET_ANALYSIS_USERS,
} from '../actions/types';
import isEmpty from './../utilis/isEmpty';

const initialState = {
  isAuthenticated: false,
  currentUser: null,
  loading: true,
  users: null,
  numberOfUsers: null,
  numberOfRegisteredCourses: null,
  lastFiveUsers: null,
  profile: null,
  analysis: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        currentUser: action.payload,
        loading: false,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        currentUser: null,
        loading: false,
        users: null,
        numberOfUsers: null,
        numberOfRegisteredCourses: null,
        lastFiveUsers: null,
        profile: null,
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_NUMBER_OF_USERS:
      return {
        ...state,
        loading: false,
        numberOfUsers: action.payload,
      };
    case GET_NUMBER_OF_USERS_WHOSE_REGISTERED_COURSES:
      return {
        ...state,
        loading: false,
        numberOfUsersWholeRegisteredCourses: action.payload,
      };
    case GET_LAST_FIVE_USERS:
      return {
        ...state,
        loading: false,
        lastFiveUsers: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        loading: false,
        profile: action.payload,
      };
    case GET_ANALYSIS_USERS:
      return {
        ...state,
        loading: false,
        analysis: action.payload,
      };
    default:
      return state;
  }
}
