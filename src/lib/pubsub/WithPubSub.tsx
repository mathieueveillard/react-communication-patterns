import React from "react";
import { pubsub, PubSubContext } from "./PubSubContext";

interface Props {
  children: string | React.ReactElement | React.ReactElement[];
}

function WithPubSub({ children }: Props): React.ReactElement {
  return (
    <PubSubContext.Provider value={pubsub}>{children}</PubSubContext.Provider>
  );
}

export default WithPubSub;
