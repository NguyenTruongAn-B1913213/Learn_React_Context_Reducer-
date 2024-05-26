import { SET_TODO_INPUT } from "./constant";
export const setTodoInput = (payload) => {
  return {
    type: SET_TODO_INPUT,
    payload,
  };
};
