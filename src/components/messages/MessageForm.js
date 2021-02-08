import React, { useContext, useEffect, useState } from "react"
import { StudentContext } from "../students/StudentProvider"
import { ClassContext } from "../classes/ClassProvider"
import { StudentClassContext } from "../classes/StudentClassProvider.js"
import { MessageContext } from "./MessageProvider"
import { useHistory } from 'react-router-dom';

export const MessageForm = () => {
    const { addMessage } = useContext(MessageContext)
    const { classes, getClasses } = useContext(ClassContext)
    const { students, getStudents} = useContext(StudentContext)

    const [message, setMessage] = useState({
      classId: 0,
      teacherId: 0,
      text: ""
    })
    
    const [displayList, setDisplayList] = useState([])

    const history = useHistory();
    
    const handleControlledInputChange = (event) => {
      const newMessage = { ...message }
      newMessage[event.target.id] = event.target.value
      setMessage(newMessage)
    }
    
    const handleSaveMessage = () => {
        addMessage({
          classId: parseInt(message.classId),
          teacherId: parseInt(localStorage.polyglot_teacher),
          text: (message.text)
        })
        .then(() => { window.alert("Message sent!")
        history.push("/message")
      })}

    useEffect(() => {
      const filterList = classes.filter((classObj) => {
        return classObj.teacherId === parseInt(localStorage.polyglot_teacher)})          
      setDisplayList(filterList)
    }, [classes])
    
    useEffect(() => {
      getStudents()
      .then(getClasses)
    }, [])

    return (
      <form className="messageForm">
        <h2 className="messageForm__title">Send Bulletin</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="location">Class: </label>
            <select value={message.classId} id="classId" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a class</option>
              {displayList.map(c => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Message: </label>
            <textarea id="text" required autoFocus className="form-control"
            placeholder="Enter message here"
            onChange={handleControlledInputChange}
            value={message.text}/>
          </div>
        </fieldset>
        <button className="btn btn-primary"
          onClick={event => {
            event.preventDefault() 
            handleSaveMessage()
          }}>
        Send Bulletin</button>
      </form>
    )
}
