import React from "react";

import { Card, CardContent, Typography } from "@material-ui/core";

import "./Message.css";

export interface IMessage {
  text: string;
  user?: string;
}

function Message(props: IMessage) {
  return (
    <Card className="message">
      <CardContent>
        <Typography>
          {props.user}: {props.text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Message;
