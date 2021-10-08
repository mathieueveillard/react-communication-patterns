import React from "react";
import { usePubSub } from "lib/usePubSub";

function Bob(): React.ReactElement {
  const [message, setMessage] = React.useState("");

  const { pubsub } = usePubSub();

  React.useEffect(
    function () {
      pubsub.subscribe("AliceAndBobChannel", setMessage);
    },
    [pubsub]
  );

  return (
    <div>
      <h1>Bob</h1>
      {message && <p>I got a message: "{message}"</p>}
    </div>
  );
}

export default Bob;
