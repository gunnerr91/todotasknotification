import { EMAIL_CHANGED } from "../actions/Types";

const initialState = {
  email: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };

    default:
      return state;
  }
};