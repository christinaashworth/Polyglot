import React from "react";
import "./Message.css";

export const MessageCard = ({ message }) => (
    <section className="message">
        <div className="message__text">{message.text}</div>
        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() 
            handleSaveEmployee()
          }}></button>
    </section>
);