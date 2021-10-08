import React from "react";
import { usePubSub } from "lib/usePubSub";

function Alice(): React.ReactElement {
  const { pubsub } = usePubSub();

  function sendMessage(): void {
    pubsub.publish("AliceAndBobChannel", "Hello world!");
  }

  return (
    <div>
      <h1>Alice</h1>
      <button onClick={sendMessage}>Say hello!</button>
    </div>
  );
}

export default Alice;
