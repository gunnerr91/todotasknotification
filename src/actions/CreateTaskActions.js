import { UPDATE_TASK, UPDATE_TASK_SUCCESS } from "./Types";
import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/database";
import { Actions } from "react-native-router-flux";

export const updateTask = ({ prop, value }) => {
  return {
    type: UPDATE_TASK,
    payload: { prop, value }
  };
};

export const createTask = ({ task, notes, deadline }) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/tasks`)
      .push({ task, notes, deadline })
      .then(() => {
        dispatch({
          type: UPDATE_TASK_SUCCESS
        });
        Actions.pop();
      });
  };
};
