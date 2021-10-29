import WithPubSub from "lib/pubsub/WithPubSub";
import React from "react";
import Alice from "./Alice";
import Bob from "./Bob";
import Separator from "utils/Separator";

function App(): React.ReactElement {
  return (
    <WithPubSub>
      <div style={{ display: "flex" }}>
        <Alice />
        <Separator />
        <Bob />
      </div>
    </WithPubSub>
  );
}

export default App;
