import React, { useState, createContext } from "react";

export const StudentContext = createContext();

export const StudentProvider = (props) => {
    const [students, setStudents] = useState([]);

    const getStudents = () => {
        return fetch("http://localhost:8088/students")
        .then(res => res.json())
        .then(setStudents)
    };

    const addStudents = studentObj => {
        return fetch("http://localhost:8088/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(studentObj)
        })
        .then(getStudents)
    };

    return (
        <StudentContext.Provider value={{
            students, getStudents, addStudents
        }}>
            {props.students}
        </StudentContext.Provider>
    );
};