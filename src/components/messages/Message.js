import React from "react";

export const MessageCard = ({ message, handleButtonClick }) => {
  return (
    <section className="message">
        <div className="message__text">{message.text}</div>
        <button className="button is-dark" id={message.id}
          onClick={() => handleButtonClick(message)}>Translate!</button>
    </section>
  )
};