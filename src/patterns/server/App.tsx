import React from "react";
import Separator from "utils/Separator";
import Alice from "./Alice";
import Bob from "./Bob";

function App(): React.ReactElement {
  return (
    <div style={{ display: "flex" }}>
      <Alice />
      <Separator />
      <Bob />
    </div>
  );
}

export default App;
