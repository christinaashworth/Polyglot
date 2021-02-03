import React, { useState, createContext } from "react";

export const StudentContext = createContext();

export const StudentProvider = (props) => {
    const [students, setStudents] = useState([]);

    const getStudents = () => {
        return fetch("http://localhost:8088/students?_expand=parent")
        .then(res => res.json())
        .then(setStudents)
    };

    const getStudentById = (id) => {
        return fetch(`http://localhost:8088/students/${id}?_expand=parent`)
            .then(res => res.json())
    };

    const addStudent = studentObj => {
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
            students, getStudents, addStudent, getStudentById
        }}>
            {props.children}
        </StudentContext.Provider>
    );
};