import { EMAIL_CHANGED, PASSWORD_CHANGED } from "../actions/Types";

const initialState = {
  email: "",
  password: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      console.log("password has changed to " + action.payload);
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
