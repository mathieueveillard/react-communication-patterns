import React from "react";
import { PubSubContext } from "./PubSubContext";

export function usePubSub() {
  const pubsub = React.useContext(PubSubContext);
  return {
    pubsub,
  };
}
