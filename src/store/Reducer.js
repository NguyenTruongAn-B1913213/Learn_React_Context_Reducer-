import { SET_TODO_INPUT } from "./constant";
export const initState = {
  Todos: [],
  Todo: "",
};

function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        Todo: action.payload,
      };
    default:
      throw new Error();
  }
}

export default reducer;
