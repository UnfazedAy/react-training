import React from "react";
import { useState } from "react";
import Effect from "./Effect";

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="app">
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show && <Effect />}
    </div>
  );
}
