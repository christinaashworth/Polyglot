import React from "react";
import "./Message.css";


export const MessageCard = ({ message, handleButtonClick }) => {
  return (
    <section className="message">
        <div className="message__text">{message.text}</div>
        <button className="btn btn-primary" id={message.id}
          onClick={() => handleButtonClick(message)}>Translate!</button>
    </section>
  )
};