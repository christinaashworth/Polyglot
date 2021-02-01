import React, { useState, createContext } from "react";

export const ClassContext = createContext();

export const ClassProvider = (props) => {
    const [classes, setClasses] = useState([]);

    const getClasses = () => {
        return fetch("http://localhost:8088/classes")
        .then(res => res.json())
        .then(setClasses)
    };

    return (
        <ClassContext.Provider value={{
            classes, getClasses
        }}>
            {props.children}
        </ClassContext.Provider>
    );
};