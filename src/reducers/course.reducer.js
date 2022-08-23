import {
  GET_COURSES,
  GET_COURSE,
  COURSE_LOADING,
  GET_NUMBER_OF_COURSES,
  GET_COURSES_CATEGORY,
  GET_NUMBER_OF_REGISTERED_COURESES,
  GET_REGISTERED_COURSES,
  GET_LAST_FIVE_REGISTERED_COURSES,
  LOGOUT,
} from '../actions/types';

const initialState = {
  loading: false,
  courses: null,
  course: null,
  coursesByCategory: null,
  numberOfCourses: null,
  numberOfUsersWholeRegisteredCourses: null,
  registeredCourses: null,
  lastFiveRegisteredCourses: null,
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
    case GET_COURSES_CATEGORY:
      return {
        ...state,
        loading: false,
        coursesByCategory: action.payload,
      };
    case GET_COURSE:
      return {
        ...state,
        loading: false,
        course: action.payload,
      };
    case GET_NUMBER_OF_COURSES:
      return {
        ...state,
        loading: false,
        numberOfCourses: action.payload,
      };

    case GET_NUMBER_OF_REGISTERED_COURESES:
      return {
        ...state,
        loading: false,
        numberOfRegisteredCourses: action.payload,
      };
    case GET_REGISTERED_COURSES:
      return {
        ...state,
        loading: false,
        registeredCourses: action.payload,
      };
    case GET_LAST_FIVE_REGISTERED_COURSES:
      return {
        ...state,
        loading: false,
        lastFiveRegisteredCourses: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        courses: null,
        course: null,
        coursesByCategory: null,
        numberOfCourses: null,
        numberOfUsersWholeRegisteredCourses: null,
        registeredCourses: null,
        lastFiveRegisteredCourses: null,
      };
    default:
      return state;
  }
}
