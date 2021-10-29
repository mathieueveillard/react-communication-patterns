import { createStore } from "lib/store/store";
import WithStore from "lib/store/WithStore";
import React from "react";
import Bob from "./Bob";
import Alice from "./Alice";
import Separator from "utils/Separator";

export interface AppState {
  message: string;
}

const defaultState: AppState = { message: "" };

const store = createStore(defaultState);

function App(): React.ReactElement {
  return (
    <WithStore store={store}>
      <div style={{ display: "flex" }}>
        <Alice />
        <Separator />
        <Bob />
      </div>
    </WithStore>
  );
}

export default App;
