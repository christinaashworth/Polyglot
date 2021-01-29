import React, { useState, createContext } from "react";

export const MessageContext = createContext();

export const MessageProvider = (props) => {
    const [messages, setMessages] = useState([]);

    const getMessages = () => {
        return fetch("http://localhost:8088/messages")
        .then(res => res.json())
        .then(setMessages)
    };

    const getMessagesById = (id) => {
        return fetch(`http://localhost:8088/messages/${id}`)
            .then(res => res.json())
    };

    const addMessage = messageObj => {
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageObj)
        })
        .then(getMessages)
    };

    return (
        <MessageContext.Provider value={{
            messages, getMessages, addMessage
        }}>
            {props.children}
        </MessageContext.Provider>
    );
};