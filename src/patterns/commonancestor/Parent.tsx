import React from "react";
import Alice from "./Alice";
import Bob from "./Bob";
import Separator from "utils/Separator";

function Parent(): React.ReactElement {
  const [message, setMessage] = React.useState("");
  return (
    <div>
      <h1>Parent</h1>
      {message && <p>Message: "{message}"</p>}
      <div style={{ display: "flex" }}>
        <Alice sendMessage={setMessage} />
        <Separator />
        <Bob message={message} />
      </div>
    </div>
  );
}

export default Parent;
