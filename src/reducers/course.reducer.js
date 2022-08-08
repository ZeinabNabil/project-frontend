import { GET_COURSES } from '../actions/types';

const initialState = {
  loading: true,
  courses: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        loading: false,
        courses: action.payload,
      };
    default:
      return state;
  }
}
