import React from "react";
import { useHistory } from "react-router-dom"
import "./Message.css";


export const TeacherMessage = ({ message, handleDeleteMessage }) => {
const history = useHistory();


return (
    <section className="teacherMessage">
        <div className="message__text">{message.text}</div>
        <button className="btn btn-primary" onClick={() => {history.push(`/messages/edit/${message.id}`)}}>Edit</button>
        <button className="btn btn-primary" onClick={() => handleDeleteMessage(message)}>Delete!</button>
    </section>
)};