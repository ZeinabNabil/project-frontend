import { GET_REVIEWS } from '../actions/types';
const initialState = {
  loading: false,
  reviews: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_REVIEWS:
      return {
        ...state,
        loading: false,
        reviews: action.payload,
      };
    default:
      return state;
  }
}
