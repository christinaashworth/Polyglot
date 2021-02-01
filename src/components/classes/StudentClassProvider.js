import React, { useState, createContext } from "react";

export const StudentClassContext = createContext();

export const StudentClassProvider = (props) => {
    const [studentClasses, setStudentClasses] = useState([]);

    const getStudentClasses = () => {
        return fetch("http://localhost:8088/studentClasses?_expand=student&_expand=class")
        .then(res => res.json())
        .then(setStudentClasses)
    };

    const getStudentClassById = (id) => {
        return fetch(`http://localhost:8088/studentClasses/${id}?_expand=student&_expand=class`)
            .then(res => res.json())
    };

    const addStudentClass = studentClass => {
        return fetch("http://localhost:8088/studentClasses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(studentClass)
        })
        .then(getStudentClasses)
    };

    const updateStudentClass = studentClass => {
        return fetch(`http://localhost:8088/studentClasses/${studentClass.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(studentClass)
        })
          .then(getStudentClasses)
      };

    return (
        <StudentClassContext.Provider value={{
            studentClasses, getStudentClasses, addStudentClass, getStudentClassById, updateStudentClass
        }}>
            {props.children}
        </StudentClassContext.Provider>
    );
};