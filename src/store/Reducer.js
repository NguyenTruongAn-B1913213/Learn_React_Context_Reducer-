import { SET_TODO_INPUT, ADD_TODO } from "./constant";
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
    case ADD_TODO:
      return {
        ...state,
        Todos: [...state.Todos, action.payload],
      };
    default:
      throw new Error();
  }
}

export default reducer;
