import React from "react";
import ReactDOM from "react-dom";

interface Props {
  message: string;
}

function Child({ message }: Props): React.ReactElement {
  return ReactDOM.createPortal(
    <div>
      <h1>Child</h1>
      {message && <p>Message: "{message}"</p>}
    </div>,
    document.getElementById("somewhere-else")!
  );
}

export default Child;
