import { GET_COURSES, GET_COURSE, COURSE_LOADING } from '../actions/types';

const initialState = {
  loading: false,
  courses: null,
  course: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case COURSE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_COURSES:
      return {
        ...state,
        loading: false,
        courses: action.payload,
      };
    case GET_COURSE:
      return {
        ...state,
        loading: false,
        course: action.payload,
      };
    default:
      return state;
  }
}
