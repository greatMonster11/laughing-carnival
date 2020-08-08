import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([
    "Hi",
    "Hello, How are you ? ",
  ]);

  const addMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>Hello Awesome !!! </h1>
      <form onSubmit={addMessage}>
        <input
          value={input}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
            setInput(event.target.value)
          }
        />
        <button type="submit">Send Message</button>
      </form>
      {messages.map((message: string) => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
