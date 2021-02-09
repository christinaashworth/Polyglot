import React, { useState, createContext } from "react";
import { settings } from "../../settings"

export const TranslationContext = createContext();

export const TranslationProvider = (props) => {
    const [ results, setResults ] = useState("");

    const addTranslation = (text, language) => {
        return fetch(`https://translation.googleapis.com/language/translate/v2?key=${settings.key}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                q: text,
                target: language
            }),
        })
        .then((response) => response.json())
        .then((results) => { 
            console.log(results)
            setResults(results.data.translations[0].translatedText)
        })

    };

    return (
        <TranslationContext.Provider value={{
            results, setResults, addTranslation
        }}>
            {props.children}
        </TranslationContext.Provider>
    );
};