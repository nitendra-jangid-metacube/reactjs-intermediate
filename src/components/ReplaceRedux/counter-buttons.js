import React, { useContext } from "react";
import { CounterContext } from "../../context/counter-context";

export default function CounterButtons() {
  const [count, setCount] = useContext(CounterContext);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div className="btn-group">
        <button className="btn btn-danger" onClick={decrement}>
          Minus(-)
        </button>
        <button className="btn btn-primary" onClick={increment}>
          Plus(+)
        </button>
      </div>
    </div>
  );
}