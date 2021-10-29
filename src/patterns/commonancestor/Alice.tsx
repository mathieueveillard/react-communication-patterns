import React from "react";

interface Props {
  sendMessage(message: string): void;
}

function Alice({ sendMessage }: Props): React.ReactElement {
  return (
    <div>
      <h1>Alice</h1>
      <button onClick={() => sendMessage("Hello World!")}>Say hello!</button>
    </div>
  );
}

export default Alice;
