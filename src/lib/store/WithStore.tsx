import React from "react";
import { StoreContext } from "./StoreContext";
import WithChangeDetection from "./WithChangeDetection";

interface Props<Store> {
  store: Store;
  children: string | React.ReactElement | React.ReactElement[];
}

function WithStore<Store>({
  store,
  children,
}: Props<Store>): React.ReactElement {
  return (
    // @ts-ignore
    <StoreContext.Provider value={store}>
      <WithChangeDetection>{children}</WithChangeDetection>
    </StoreContext.Provider>
  );
}

export default WithStore;
