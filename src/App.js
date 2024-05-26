// import Content from "./Content";
// import { useRef, useState } from "react";
// function App() {
//   const [show, setShow] = useState(false);
//   return (
//     <div className="App" style={{ padding: 32 }}>
//       <button onClick={() => setShow(!show)}>Toggle</button>
//       {show && <Content />}
//     </div>
//   );
// }

// function App() {
//   const [count, setCount] = useState(60);
//   let timerId = useRef();
//   const handleStart = () => {
//     timerId.current = setInterval(() => {
//       setCount((prevCount) => {
//         return prevCount - 1;
//       });
//     }, 1000);
//   };
//   const handleStop = () => {
//     clearInterval(timerId.current);
//   };
//   return (
//     <div className="App" style={{ padding: 20 }}>
//       <h1>{count}</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//     </div>
//   );
// }

// import TodoApp from "./Todo";
// function App() {
//   return <TodoApp />;
// }
import { useContext } from "react";
import { StoreContext } from "./store";
import { setTodoInput, addTodo } from "./store/action";
function App() {
  const [state, dispatch] = useContext(StoreContext);
  const { Todos, Todo } = state;
  const handleSubmit = () => {
    dispatch(addTodo(Todo));
  };
  return (
    <div style={{ padding: 20 }}>
      <input
        placeholder="Enter todo ..... "
        value={Todo}
        onChange={(e) => {
          dispatch(setTodoInput(e.target.value));
        }}
      ></input>
      <button onClick={handleSubmit}> Add </button>
      <ul>
        {Todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
