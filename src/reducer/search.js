import {
  SEARCH_ERROR,
  SEARCH_SUCCESS,
  SEARCH_PENDING,
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  message: "",
  data: [],
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case SEARCH_ERROR:
      return { ...state, message: action.message, loading: false };
    case SEARCH_PENDING:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default search;
