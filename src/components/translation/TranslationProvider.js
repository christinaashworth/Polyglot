import React, { useState, createContext } from "react";

export const TranslationContext = createContext();

export const TranslationProvider = (props) => {
    const { results, setResults } = useState("");

    const addTranslation = (language, text) => {
        return fetch("http://localhost:8088/translations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                q: text,
                target: language.value,
                key: "",
            },
        })
        .then(setResults)

    };

    return (
        <TranslationContext.Provider value={{
            results, setResults, addTranslation
        }}>
            {props.children}
        </TranslationContext.Provider>
    );
};