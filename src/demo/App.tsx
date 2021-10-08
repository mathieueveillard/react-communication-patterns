import WithPubSub from "lib/WithPubSub";
import React from "react";
import Alice from "./Alice";
import Bob from "./Bob";

function App(): React.ReactElement {
  return (
    <WithPubSub>
      <div style={{ display: "flex" }}>
        <div style={{ padding: "4rem" }}>
          <Alice />
        </div>
        <div style={{ padding: "4rem" }}>
          <Bob />
        </div>
      </div>
    </WithPubSub>
  );
}

export default App;
