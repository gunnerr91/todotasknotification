import { EMAIL_CHANGED } from "./Types";

export const onEmailChange = text => {
  console.log("in action, email is: " + text);
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};
