import React from "react";

interface Props {
  sendMessage(message: string): void;
}

function Child({ sendMessage }: Props): React.ReactElement {
  return (
    <div>
      <h1>Child</h1>
      <button onClick={() => sendMessage("Hello World!")}>Say hello!</button>
    </div>
  );
}

export default Child;
