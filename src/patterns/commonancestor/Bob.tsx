import React from "react";

interface Props {
  message: string;
}

function Bob({ message }: Props): React.ReactElement {
  return (
    <div>
      <h1>Bob</h1>
      {message && <p>Message: "{message}"</p>}
    </div>
  );
}

export default Bob;
