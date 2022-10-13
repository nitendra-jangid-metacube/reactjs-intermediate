import React from "react";
import { CounterContextProvider } from "../context/counter-context";
import CounterDisplay from "../components/ReplaceRedux/counter-display";
import CounterButtons from "../components/ReplaceRedux/counter-buttons";

export default function CounterView() {
  return (
    <CounterContextProvider>
      <h3 className="h3 text-center">Counter</h3>
      <div className="text-center">
        <CounterDisplay />
        <CounterButtons />
      </div>
    </CounterContextProvider>
  );
}