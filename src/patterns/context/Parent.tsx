import React from "react";
import Child from "./Child";

interface Message {
  message: string;
}

const defaultMessage: Message = { message: "" };

export const MessageContext = React.createContext(defaultMessage);

function Parent(): React.ReactElement {
  const [message, setMessage] = React.useState("");
  return (
    <div>
      <h1>Parent</h1>
      <button onClick={() => setMessage("Hello World!")}>Say hello!</button>
      <MessageContext.Provider value={{ message }}>
        <Child />
      </MessageContext.Provider>
    </div>
  );
}

export default Parent;
