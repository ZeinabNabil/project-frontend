import { GET_ERRORS, GET_INQUIRIES, INQ_LOADING } from '../actions/types';
const initialState = {
  loading: false,
  Inquiries: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INQ_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_INQUIRIES:
      return {
        ...state,
        loading: false,
        Inquiries: action.payload,
      };
    default:
      return state;
  }
}
