import React from "react";

export const Student = ({student}) => { 
    return (
    <section className="class">
        <h3 className="student__name">{student.name}</h3>
    </section>
)};