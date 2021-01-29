import React, { useContext, useEffect } from "react";
import { MessageContext } from "./MessageProvider";
import { MessageCard } from "./Message";
import "./Message.css";

export const MessageList = () => {
  const { messages, getMessages } = useContext(MessageContext);

  useEffect(() => {
    getMessages()
  }, []);


  return (
    <div className="messages">
      {
        messages.map(message => {
          return <MessageCard key={message.id} message={message} />
        })
      }
    </div>
  );
};