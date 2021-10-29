import React from "react";
import Child from "./Child";

function Parent(): React.ReactElement {
  const [message, setMessage] = React.useState("");
  return (
    <div>
      <h1>Parent</h1>
      {message && <p>Message: "{message}"</p>}
      <Child sendMessage={setMessage} />
    </div>
  );
}

export default Parent;
