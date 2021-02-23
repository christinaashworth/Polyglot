import React, { useContext, useEffect, useState } from "react"
import { StudentContext } from "../students/StudentProvider"
import { ClassContext } from "../classes/ClassProvider"
import { StudentClassContext } from "../classes/StudentClassProvider.js"
import { MessageContext } from "./MessageProvider"
import { useHistory, useParams } from 'react-router-dom';

export const MessageForm = () => {
    const { addMessage, getMessageById, updateMessage } = useContext(MessageContext)
    const { classes, getClasses } = useContext(ClassContext)
    const { students, getStudents} = useContext(StudentContext)

    const [message, setMessage] = useState({
      classId: 0,
      teacherId: 0,
      text: ""
    })
    
    const [displayList, setDisplayList] = useState([])

    const history = useHistory();
    const {messageId} = useParams()
    
    const handleControlledInputChange = (event) => {
      const newMessage = { ...message }
      newMessage[event.target.id] = event.target.value
      setMessage(newMessage)
    }
    
    const handleSaveMessage = () => {
      if (messageId) {
        updateMessage({
          id: message.id,
          classId: parseInt(message.classId),
          teacherId: parseInt(localStorage.polyglot_teacher),
          text: message.text
        })
          .then(() => history.push("/viewmessages"))
       } else {
        addMessage({
          classId: parseInt(message.classId),
          teacherId: parseInt(localStorage.polyglot_teacher),
          text: message.text
        })
          .then(() => history.push("/viewmessages"))
        }
      }

    useEffect(() => {
      const filterList = classes.filter((classObj) => {
        return classObj.teacherId === parseInt(localStorage.polyglot_teacher)})          
      setDisplayList(filterList)
    }, [classes])
    
    useEffect(() => {
      getStudents()
      .then(getClasses)
      .then(() => {
        if (messageId) {
          getMessageById(messageId)
            .then(message => {
              setMessage(message)
            })
        }
      })
    }, [])

    return (
      <form className="container card">
        <div className="card header card-header-title is-size-4">Send Bulletin</div>
        <div className="card-content control">
        <fieldset>
          <div className="content select is-link">
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
          <div className="section content">
            <textarea id="text" required autoFocus className="textarea is-link"
            placeholder="Enter message here"
            onChange={handleControlledInputChange}
            value={message.text}/>
          </div>
        </fieldset>
        <button className="button is-dark"
          onClick={event => {
            event.preventDefault() 
            handleSaveMessage()
          }}>
        {messageId ? "Save Edited Message" : "Send Message"}</button>
        </div>
      </form>
    )
}
