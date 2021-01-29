import React from "react";
import "./Message.css";

export const TranslationCard = ({ translation }) => (
    <section className="translation">
        <div className="translation__text">{translation.text}</div>
    </section>
);