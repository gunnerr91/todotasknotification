import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOADING
} from "../actions/Types";

const initialState = {
  email: "",
  password: "",
  user: null,
  error: "",
  loading: false
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOADING:
      return { ...state, loading: true, error: "" };
    case LOG_IN_SUCCESS:
      return { ...state, ...initialState, user: action.payload };
    case LOG_IN_FAILURE:
      return {
        ...state,
        error: "Authentication failure",
        password: "",
        loading: false
      };
    default:
      return state;
  }
};
