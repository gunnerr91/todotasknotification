import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import TasksReducer from "./TasksReducer";

export default combineReducers({
  auth: AuthReducer,
  task: TasksReducer
});
