import React from "react";

export const TranslationCard = ({ translation }) => (
    <section className="translation">
        <div type="text" className="translation__text">{translation.text}</div>
    </section>
);