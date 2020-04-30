import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGIN_PENDING,
  CLEAR_MESSAGE,
  LOG_OUT,
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  message: "",
  user: {},
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload, loading: false };
    case LOGIN_ERROR:
      return { ...state, message: action.message, loading: false };
    case LOGIN_PENDING:
      return { ...state, loading: true };
    case CLEAR_MESSAGE:
      return { ...state, message: "" };
    case LOG_OUT:
      return { ...state, user: {} };
    default:
      return state;
  }
};

export default login;
