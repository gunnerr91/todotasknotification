import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOADING
} from "./Types";
import firebase from "@firebase/app";
import "@firebase/auth";
import { Actions } from "react-native-router-flux";

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
  return dispatch => {
    dispatch({
      type: LOADING
    });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => onLoginSuccess(dispatch, user))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => onLoginSuccess(dispatch, user))
          .catch(() => {
            onLoginFailure(dispatch);
          });
      });
  };
};

const onLoginSuccess = (dispatch, user) => {
  dispatch({
    type: LOG_IN_SUCCESS,
    payload: user
  });

  Actions.main();
};

const onLoginFailure = dispatch => {
  dispatch({
    type: LOG_IN_FAILURE
  });
};
