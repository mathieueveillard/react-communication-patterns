import React from "react";

interface Props {
  children(): string | React.ReactElement | React.ReactElement[];
}

function Child({ children }: Props): React.ReactElement {
  return (
    <div>
      <h1>Child</h1>
      <p>Message: "{children()}"</p>
    </div>
  );
}

export default Child;
