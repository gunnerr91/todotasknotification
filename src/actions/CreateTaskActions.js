import { UPDATE_TASK } from "./Types";

export const updateTask = ({ prop, value }) => {
  return {
    type: UPDATE_TASK,
    payload: { prop, value }
  };
};
