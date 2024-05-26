import { useReducer } from "react";
import reducer, { initState } from "./reducer";
import { setJob, addJob, deleteJob } from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;
  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
  };
  return (
    <div className="App" style={{ padding: 20 }}>
      <h3>Todo</h3>
      <input
        value={job}
        onChange={(e) => dispatch(setJob(e.target.value))}
        placeholder="Enter Todo"
      ></input>
      <button onClick={handleSubmit}>add </button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}{" "}
            <button onClick={() => dispatch(deleteJob(index))}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
