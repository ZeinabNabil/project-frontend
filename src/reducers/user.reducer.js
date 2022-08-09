import { LOGOUT, SET_CURRENT_USER } from '../actions/types';
import isEmpty from './../utilis/isEmpty';

const initialState = {
  isAuthenticated: false,
  currentUser: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        currentUser: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        currentUser: {},
      };
    default:
      return state;
  }
}
