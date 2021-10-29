import React from "react";

interface Props {
  message: string;
}

function Child({ message }: Props): React.ReactElement {
  return (
    <div>
      <h1>Child</h1>
      {message && <p>Message: "{message}"</p>}
    </div>
  );
}

export default Child;
