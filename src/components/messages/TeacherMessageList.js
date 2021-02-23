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
      return classObj.teacherId === parseInt(sessionStorage.polyglot_teacher)})
    setDropdownList(filteredList)
  }, [classes]);

  useEffect(() => {
    const matchingMessages = messages.filter(m => m.classId === selectedClass)
    setMatchingMessages(matchingMessages)
  }, [messages])

  const handleDeleteMessage = (message) => {
    deleteMessage(message.id)
    .then(() => history.push("/viewmessages"))
  }

  return (
    <>
    <section className="section container card">
    <div className="card-header card-header-title is-size-4 block">View Previous Messages</div>
    <form>
    <fieldset>
          <div className="select is-link">
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
    <div className="section">
    {matchingMessages.map(message => (
      <TeacherMessage key={message.id} message={message} handleDeleteMessage={handleDeleteMessage}/>))}
    </div>
    </section>
    </>
  )

  }
