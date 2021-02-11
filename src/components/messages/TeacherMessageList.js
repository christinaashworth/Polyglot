import React, { useContext, useEffect, useState } from "react";
import { ClassContext } from "../classes/ClassProvider"
import { TeacherMessage } from "../messages/TeacherMessage"
import { MessageContext } from "./MessageProvider"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"

export const TeacherMessageList = () => {
  const { messages, getMessages, deleteMessage } = useContext(MessageContext)
  const [matchingMessages, setMatchingMessages] = useState([])
  const { classes, getClasses } = useContext(ClassContext)
  const [dropdownList, setDropdownList] = useState([])
  const {messageId} = useParams()
  const history = useHistory()
  const [selectedClass, setSelectedClass] = useState("")

  const messageFilterResults = (event) => {
    const chosenClass = parseInt(event.target.value)
    setSelectedClass(chosenClass)
    const matchingMessages = messages.filter(m => m.classId === chosenClass)
    setMatchingMessages(matchingMessages)
  }

  useEffect(() => {
    getClasses()
      .then(getMessages)
  }, []);

  useEffect(() => {
    const filteredList = classes.filter((classObj) => {
      return classObj.teacherId === parseInt(localStorage.polyglot_teacher)})
    setDropdownList(filteredList)
  }, [classes]);

  useEffect(() => {
    const matchingMessages = messages.filter(m => m.classId === selectedClass)
    setMatchingMessages(matchingMessages)
  }, [messages])

  const handleDeleteMessage = (message) => {
    deleteMessage(message.id)
    .then(() => {
      window.alert("Deleted!")
    })
  }

  return (
    <>
    <h2>View Previous Messages</h2>
    <form>
    <fieldset>
          <div className="form-group">
            <label htmlFor="class">Select a class:</label>
            <select id="classId" className="form-control" onChange={messageFilterResults}>
              <option value="0">Select a class: </option>
              {dropdownList.map(c => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
      </fieldset>
    </form>
    <div>
    {matchingMessages.map(message => (
      <TeacherMessage key={message.id} message={message} handleDeleteMessage={handleDeleteMessage}/>))}
    </div>
    </>
  )

  }