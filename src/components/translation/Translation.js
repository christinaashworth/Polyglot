import React from "react";

export const TranslationCard = ({ translation }) => (
    <section className="translation">
        <div className="translation__text">{translation.text}</div>
    </section>
);