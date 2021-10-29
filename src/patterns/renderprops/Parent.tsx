import React from "react";
import Child from "./Child";

function Parent(): React.ReactElement {
  return (
    <div>
      <h1>Parent</h1>
      <Child render={() => "Hello World!"} />
    </div>
  );
}

export default Parent;
