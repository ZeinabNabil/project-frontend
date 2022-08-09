import { combineReducers } from 'redux';
import courseReducer from './course.reducer';
import errorReducer from './error.reducer';
import userReducer from './user.reducer';
export default combineReducers({
  error: errorReducer,
  course: courseReducer,
  user: userReducer,
});
