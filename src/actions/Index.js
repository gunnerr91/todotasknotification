import { EMAIL_CHANGED } from "./Types";

export const onEmailChange = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};
