import { EMAIL_CHANGED, PASSWORD_CHANGED } from "./Types";
import firebase from "@firebase/app";
import "@firebase/auth";

export const onEmailChange = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const onPasswordChange = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const onLogin = ({ email, password }) => {
  firebase.auth().signInWithEmailAndPassword(email, password);
};
