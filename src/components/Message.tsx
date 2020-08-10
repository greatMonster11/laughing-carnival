import React, { forwardRef } from "react";

import { Card, CardContent, Typography } from "@material-ui/core";

import "./Message.css";

export interface IMessage {
  message: string;
  username?: string;
  timestamp?: string;
}

const Message = forwardRef(
  (
    { message, username }: { message: IMessage; username: string },
    ref: any
  ) => {
    const isUser = username === message.username;
    return (
      <div ref={ref} className={`message ${isUser && "message__user"}`}>
        <Card className={isUser ? "message__userCard" : "message__guestCard"}>
          <CardContent>
            <Typography>
              {!isUser && `${message.username || "Unknow User"}: `}{" "}
              {message.message}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
);

export default Message;
