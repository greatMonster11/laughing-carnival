import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import { FormControl, Input, InputLabel } from "@material-ui/core";

import Message from "./components/Message";
import { IMessage } from "./components/Message";
import db from "./firebase";

import "./App.css";

function App() {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<any[]>([]);
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    // run once when the app loads components
    db.collection("messages").onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  useEffect((): void => {
    var username: string = prompt("Plase enter your name") || "";
    setUsername(username);
  }, []);

  const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessages([...messages, { message: input, username }]);
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
        <Message message={message} username={username} />
      ))}
    </div>
  );
}

export default App;
