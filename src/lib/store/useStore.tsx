import React from "react";
import { StoreContext } from "./StoreContext";

export function useStore() {
  const { getState, setState } = React.useContext(StoreContext);
  return {
    getState,
    setState,
  };
}
