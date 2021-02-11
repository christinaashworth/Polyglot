import React, { useState, createContext } from "react";

export const ClassContext = createContext();

export const ClassProvider = (props) => {
  const [classes, setClasses] = useState([]);

  const getClasses = () => {
        return fetch("http://localhost:8088/classes?_expand=teacher")
        .then(res => res.json())
        .then(setClasses)
    };

  const getClassById = (id) => {
      return fetch(`http://localhost:8088/classes/${id}?_expand=teacher`)
          .then(res => res.json())
  };

  const addClass = classObj => {
    return fetch("http://localhost:8088/classes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(classObj)
    })
    .then(getClasses)
};

    return (
        <ClassContext.Provider value={{
            classes, getClasses, addClass, getClassById
        }}>
            {props.children}
        </ClassContext.Provider>
    );
};