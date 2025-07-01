import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <div>
        <span>{count}</span>
      </div>
      <div>
        <buton onClick={() => dispatch(increment())}>Increment</buton>
        <buton onClick={() => dispatch(decrement())}>Decrement</buton>
      </div>
    </div>
  );
};

export default Counter;
