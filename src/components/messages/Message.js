import React from "react";
import "./Message.css";
import { TranslationList } from "../translation/TranslationList"

const translateMessage = () => TranslationList()

export const MessageCard = ({ message }) => (
    <section className="message">
        <div className="message__text">{message.text}</div>
        <button className="btn btn-primary"
          onClick={translateMessage}>Translate!</button>
    </section>
);