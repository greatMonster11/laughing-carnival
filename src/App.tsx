import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import { FormControl, Input, InputLabel } from "@material-ui/core";

import Message from "./components/Message";
import { IMessage } from "./components/Message";

import "./App.css";

function App() {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<IMessage[]>([
    { user: "Thanh", text: "hello" },
    { user: "Been", text: "Hi there" },
  ]);
  const [username, setUsername] = useState<string>("");

  useEffect((): void => {
    var username: string = prompt("Plase enter your name") || "";
    setUsername(username);
  }, []);

  const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessages([...messages, { text: input, user: username }]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello Awesome !!! </h1>
      <h1>Welcome {username}</h1>
      <form onSubmit={sendMessage}>
        <FormControl>
          <InputLabel>Enter a message ...</InputLabel>
          <Input
            value={input}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
              setInput(event.target.value)
            }
          />
          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
          >
            Send Message
          </Button>
        </FormControl>
      </form>
      {messages.map((message: IMessage) => (
        <Message text={message.text} user={message.user} />
      ))}
    </div>
  );
}

export default App;
