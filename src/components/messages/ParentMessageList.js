import React, { useContext, useEffect, useState } from "react";
import { StudentContext } from "../students/StudentProvider";
import { ClassContext } from "../classes/ClassProvider"
import { StudentClassContext } from "../classes/StudentClassProvider"
import { Student } from "../students/Student";
import { MessageCard } from "../messages/Message"
import { MessageContext } from "../messages/MessageProvider"
import { TranslationList } from "../translation/TranslationList";


export const MessageList = () => {
  const { messages, getMessages } = useContext(MessageContext)
  console.log("messages array", messages)
  const { classes, getClasses } = useContext(ClassContext)
  const { students, getStudents } = useContext(StudentContext)
  const { studentClasses, getStudentClasses } = useContext(StudentClassContext)
  

  const [matchingMessages, setMatchingMessages] = useState([])
  const [matchingStudent, setMatchingStudent] = useState({})
  const [selectedMessage, setSelectedMessage] = useState({})

  const [studentDropdownList, setStudentDropdownList] = useState([])
  const [classDropdownList, setClassDropdownList] = useState([])
  const [showTranslation, setShowTranslation] = useState(false)

  const studentFilterResults = (event) => {
    const matchingStudent = students.find(s => s.id === parseInt(event.target.value))
      setMatchingStudent(matchingStudent)
      console.log(matchingStudent)
  }

  const classFilterResults = (event) => {
    const matchingClass = studentClasses.find(c => c.id === parseInt(event.target.value))
    messageFilterResults(matchingClass)
  }

  const messageFilterResults = (classObj) => {
    const matchingMessages = messages.filter(m => m.classId === classObj.classId)
    setMatchingMessages(matchingMessages)
  }

  useEffect(() => {
    getMessages()
    .then(getStudents)
    .then(getStudentClasses)
    .then(getClasses)
  }, []);

  useEffect(() => {
    const filteredList = students.filter((student) => {
      return student.parentId === parseInt(localStorage.polyglot_parent)})          
    setStudentDropdownList(filteredList)
  }, [students])

  useEffect(() => {
    const filteredList = studentClasses.filter((classObj) => {
      return classObj.studentId === matchingStudent.id})          
    setClassDropdownList(filteredList)
  }, [matchingStudent])
  console.log(matchingMessages)

  const handleButtonClick = (message) => {
    setShowTranslation(true)
    setSelectedMessage(message)
  }

  return (
    <>
    <form className="classList">
      <fieldset>
          <div className="form-group">
            <label htmlFor="class">Student Name: </label>
            <select id="classId" className="form-control" onChange={studentFilterResults}>
              <option value="0">Student name: </option>
              {studentDropdownList.map(c => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
      </fieldset>
      <fieldset>
          <div className="form-group">
            <label htmlFor="class">Class name: </label>
            <select id="classId" className="form-control" onChange={classFilterResults}>
              <option value="0">Select a class: </option>
              {classDropdownList.map(c => (
                <option key={c.id} value={c.id}>
                  {c.class.name}
                </option>
              ))}
            </select>
          </div>
      </fieldset>
    </form>
    <div>
    {matchingMessages.map(message => (
      <MessageCard key={message.id} message={message} handleButtonClick={handleButtonClick}/>))}
    </div>
    <div>
      {showTranslation ? <TranslationList message={selectedMessage} /> : ""}  
    </div>
    </>
  )
};