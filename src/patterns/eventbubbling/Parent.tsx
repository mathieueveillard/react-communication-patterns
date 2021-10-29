import React from "react";
import Child from "./Child";

function Parent(): React.ReactElement {
  const [clickCount, setClickCount] = React.useState(0);

  function handleClick(): void {
    setClickCount(clickCount + 1);
  }

  return (
    <div>
      <h1>Parent</h1>
      <p>clickCount: {clickCount}</p>
      <div onClick={handleClick}>
        <Child />
      </div>
    </div>
  );
}

export default Parent;
