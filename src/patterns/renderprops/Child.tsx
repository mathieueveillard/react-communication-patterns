import React from "react";

interface Props {
  render(): string | React.ReactElement | React.ReactElement[];
}

function Child({ render }: Props): React.ReactElement {
  return (
    <div>
      <h1>Child</h1>
      <p>Message: "{render()}"</p>
    </div>
  );
}

export default Child;
