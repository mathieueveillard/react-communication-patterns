import React from "react";
import { StoreContext } from "./StoreContext";

interface Props {
  children: string | React.ReactElement | React.ReactElement[];
}

function WithChangeDetection({ children }: Props): React.ReactElement {
  const [renderIndex, setRenderIndex] = React.useState(0);

  function incrementRenderIndex(): void {
    setRenderIndex(renderIndex + 1);
  }

  const { subscribe } = React.useContext(StoreContext);

  React.useEffect(() => {
    subscribe(incrementRenderIndex);
  });

  return <div key={renderIndex}>{children}</div>;
}

export default WithChangeDetection;
