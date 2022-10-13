import React, { useContext } from "react";
import { CounterContext } from "../../context/counter-context";

export default function CounterDisplay() {
  const [count] = useContext(CounterContext);

  return (
    <div>
      <div className="btn btn-primary">{count}</div>
      <div>Counter</div>
    </div>
  );
}