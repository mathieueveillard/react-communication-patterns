import React from "react";
import Child from "./Child";

function Parent(): React.ReactElement {
  return (
    <div>
      <h1>Parent</h1>
      <Child>{() => "Hello World!"}</Child>
    </div>
  );
}

export default Parent;
