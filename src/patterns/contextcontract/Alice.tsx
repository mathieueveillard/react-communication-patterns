import { useStore } from "lib/store/useStore";
import React from "react";
import { AppState } from "./App";

function Alice(): React.ReactElement {
  const { setState } = useStore();

  function setMessage(message: string): void {
    setState((state: AppState) => ({
      ...state,
      message,
    }));
  }

  return (
    <div>
      <h1>Alice</h1>
      <button onClick={() => setMessage("Hello World!")}>Say hello!</button>
    </div>
  );
}

export default Alice;
