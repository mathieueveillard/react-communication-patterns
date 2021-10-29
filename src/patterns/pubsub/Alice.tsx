import React from "react";
import { usePubSub } from "lib/pubsub/usePubSub";

function Alice(): React.ReactElement {
  const { pubsub } = usePubSub();

  function sendMessage(): void {
    pubsub.publish("AliceAndBobChannel", "Hello World!");
  }

  return (
    <div>
      <h1>Alice</h1>
      <button onClick={sendMessage}>Say hello!</button>
    </div>
  );
}

export default Alice;
