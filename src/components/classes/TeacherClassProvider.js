import React, { useState, createContext } from "react";

export const TeacherClassContext = createContext();

export const TeacherClassProvider = (props) => {
    const [teacherClasses, setTeacherClasses] = useState([]);

    const getTeacherClasses = () => {
        return fetch("http://localhost:8088/teacherClasses?_expand=teacher&_expand=class")
        .then(res => res.json())
        .then(setStudentClasses)
    };

    const getTeacherClassById = (id) => {
        return fetch(`http://localhost:8088/teacherClasses/${id}?_expand=teacher&_expand=class`)
            .then(res => res.json())
    };

    const addTeacherClass = teacherClass => {
        return fetch("http://localhost:8088/teacherClasses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(teacherClass)
        })
        .then(getTeacherClasses)
    };

    const updateTeacherClass = teacherClass => {
        return fetch(`http://localhost:8088/teacherClasses/${teacherClass.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(teacherClass)
        })
          .then(getTeacherClasses)
      };

    return (
        <TeacherClassContext.Provider value={{
            teacherClasses, getTeacherClasses, addTeacherClass, getTeacherClassById, updateTeacherClass
        }}>
            {props.children}
        </TeacherClassContext.Provider>
    );
};