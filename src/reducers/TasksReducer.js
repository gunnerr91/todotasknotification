import { UPDATE_TASK, UPDATE_TASK_SUCCESS } from "../actions/Types";

const initial_state = {
  task: "",
  notes: "",
  deadline: ""
};

export default (state = initial_state, action) => {
  console.log(action);
  switch (action.type) {
    case UPDATE_TASK:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      };
    case UPDATE_TASK_SUCCESS:
      return initial_state;
    default:
      return {
        state
      };
  }
};
