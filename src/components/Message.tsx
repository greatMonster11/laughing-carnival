import React from "react";

import { Card, CardContent, Typography } from "@material-ui/core";

import "./Message.css";

export interface IMessage {
  message: string;
  username?: string;
}

function Message({
  message,
  username,
}: {
  message: IMessage;
  username: string;
}) {
  const isUser = username === message.username;
  return (
    <div className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography>
            {message.username}: {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;
