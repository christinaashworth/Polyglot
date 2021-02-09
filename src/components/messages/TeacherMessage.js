import React from "react";
import "./Message.css";

export const TeacherMessage = ({ message }) => (
    <section className="teacherMessage">
        <div className="message__text">{message.text}</div>
        <button className="btn btn-primary"
          onClick={}>Delete!</button>
    </section>
);