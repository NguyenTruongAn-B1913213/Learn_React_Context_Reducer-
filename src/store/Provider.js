import { useReducer } from "react";
import context from "./Context";
import { initState } from "./Reducer";
import reducer from "./Reducer";
function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <context.Provider value={[state, dispatch]}>{children}</context.Provider>
  );
}
export default Provider;
