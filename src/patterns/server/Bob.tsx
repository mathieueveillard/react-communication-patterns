import React from "react";
import axios from "axios";

function Bob(): React.ReactElement {
  const [message, setMessage] = React.useState("");

  async function checkMessages(): Promise<void> {
    const { data } = await axios.get("http://localhost:8080/message");
    setMessage(data.message);
  }

  return (
    <div>
      <h1>Bob</h1>
      <button onClick={checkMessages}>Check messages</button>
      {message && <p>Message: "{message}"</p>}
    </div>
  );
}

export default Bob;
