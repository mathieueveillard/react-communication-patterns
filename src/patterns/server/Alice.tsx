import React from "react";
import axios from "axios";

function Alice(): React.ReactElement {
  const [feedback, setFeedback] = React.useState("");

  async function sendMessage(): Promise<void> {
    await axios.post("http://localhost:8080/message", {
      message: "Hello World!",
    });
    setFeedback("Message sent to server!");
  }

  return (
    <div>
      <h1>Alice</h1>
      <button onClick={sendMessage}>Say hello!</button>
      {feedback && <p>{feedback}</p>}
    </div>
  );
}

export default Alice;
