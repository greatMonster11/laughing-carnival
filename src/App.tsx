import React, { useState, useEffect } from "react";

import { FormControl, Input } from "@material-ui/core";

import Message from "./components/Message";
import { IMessage } from "./components/Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";

import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import "./App.css";

function App() {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<any[]>([]);
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    // run once when the app loads components
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect((): void => {
    var username: string = prompt("Plase enter your name") || "";
    setUsername(username);
  }, []);

  const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput(""); // also need to clean, for more UX
  };

  return (
    <div className="App">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2019/10/Messenger_Logo_Color_RGB.png?w=100&h=100"
        alt="Messenger logo"
      />
      <h1>Hello Awesome !!! </h1>
      <h1>Welcome {username}</h1>
      <form className="app__form" onSubmit={sendMessage}>
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a message ..."
            value={input}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
              setInput(event.target.value)
            }
          />
          <IconButton
            className="app__iconButton"
            disabled={!input}
            color="primary"
            type="submit"
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }: { id: string; message: IMessage }) => (
          <Message key={id} message={message} username={username} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
