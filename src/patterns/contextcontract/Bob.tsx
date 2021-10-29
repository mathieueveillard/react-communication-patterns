import React from "react";
import { useStore } from "lib/store/useStore";

function Bob(): React.ReactElement {
  const { getState } = useStore();
  const { message } = getState();
  return (
    <div>
      <h1>Bob</h1>
      {message && <p>Message: "{message}"</p>}
    </div>
  );
}

export default Bob;
