import React from "react";
import { useHistory } from "react-router-dom"


export const TeacherMessage = ({ message, handleDeleteMessage }) => {
const history = useHistory();


return (
    <section className="teacherMessage is-justify-content-space-evenly is-flex-direction-row">
        <div className="card">
            <div className="card-content has-background-grey-lighter is-size-6">{message.text}</div>
        <div className="card-footer">
            <button className="button is-dark" onClick={() => {history.push(`/messages/edit/${message.id}`)}}>Edit</button>
            <button className="button is-dark" onClick={() => handleDeleteMessage(message)}>Delete!</button>
        </div>
        </div>
    </section>
)};