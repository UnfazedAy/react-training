import React, { useContext } from "react";
import CounterContext from "../context/CounterContext";

const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);
  console.log(state);
  return (
    <div>
      <p>Counter: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
    </div>
  );
};

export default Counter;
