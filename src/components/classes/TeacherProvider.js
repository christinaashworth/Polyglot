import React, { useState, createContext } from "react";

export const TeacherContext = createContext();

export const TeacherProvider = (props) => {
    const [teachers, setTeachers] = useState([]);

    const getTeachers = () => {
        return fetch("http://localhost:8088/teachers")
        .then(res => res.json())
        .then(setTeachers)
    };

    const getTeacherById = (id) => {
        return fetch(`http://localhost:8088/teachers/${id}`)
            .then(res => res.json())
    };

    return (
        <TeacherContext.Provider value={{
            teachers, getTeachers, getTeacherById
        }}>
            {props.children}
        </TeacherContext.Provider>
    );
};