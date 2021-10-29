import React from "react";
import { Store } from "./store";

// @ts-ignore
export const StoreContext = React.createContext<Store<any>>({});
