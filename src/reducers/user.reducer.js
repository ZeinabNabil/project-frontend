import {
  LOGOUT,
  SET_CURRENT_USER,
  USER_LOADING,
  GET_USERS,
} from '../actions/types';
import isEmpty from './../utilis/isEmpty';

const initialState = {
  isAuthenticated: false,
  currentUser: null,
  loading: true,
  users: null,
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
        currentUser: {},
        loading: false,
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
