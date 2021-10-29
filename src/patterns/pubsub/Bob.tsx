import React from "react";
import { usePubSub } from "lib/pubsub/usePubSub";

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
      {message && <p>Message: "{message}"</p>}
    </div>
  );
}

export default Bob;
