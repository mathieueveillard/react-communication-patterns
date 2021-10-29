import React from "react";
import { MessageContext } from "./Parent";

function Child(): React.ReactElement {
  const { message } = React.useContext(MessageContext);
  return (
    <div>
      <h1>Child</h1>
      {message && <p>Message: "{message}"</p>}
    </div>
  );
}

export default Child;
