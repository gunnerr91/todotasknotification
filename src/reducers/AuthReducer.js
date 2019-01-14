import { EMAIL_CHANGED } from "../actions/Types";

const initialState = {
  email: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return;

    default:
      return state;
  }
};
