import { UPDATE_TASK } from "../actions/Types";

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
    default:
      return {
        state
      };
  }
};
