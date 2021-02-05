import React, { useContext, useEffect, useState } from "react";
import { StudentContext } from "../students/StudentProvider";
import { ClassContext } from "../classes/ClassProvider"
import { StudentClassContext } from "../classes/StudentClassProvider"
import { Student } from "../students/Student";
import { MessageCard } from "./Message"
import { MessageContext } from "./MessageProvider"

export const MessageList = () => {
  const { messages, getMessages} = useContext(MessageContext)
  const { classes, getClasses } = useContext(ClassContext)
  const { students, getStudents } = useContext(StudentContext)
  const { studentClasses, getStudentClasses } = useContext(StudentClassContext)

  const [matchingMessages, setMatchingMessages] = useState([])
  const [matchingStudent, setMatchingStudent] = useState([])
  const [matchingClass, setMatchingClass] = useState([])

  const [studentDropdownList, setStudentDropdownList] = useState([])
  const [classDropdownList, setClassDropdownList] = useState([])

  const studentFilterResults = (event) => {
    const matchingStudent = students.find(s => s.id === parseInt(event.target.value))
      setMatchingStudent(matchingStudent)
      console.log(matchingStudent)
  }

  const classFilterResults = (event) => {
    const matchingClass = classes.filter(c => c.id === parseInt(event.target.value))
    setMatchingClass(matchingClass)
    console.log(matchingClass)
  }

  const messageFilterResults = (event) => {
    const matchingMessages = messages.filter(m => m.classId === matchingClass)
    setMatchingMessages(matchingMessages)
    console.log(matchingMessages)
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
    console.log(studentDropdownList)
  }, [students])

  useEffect(() => {
    const filteredList = studentClasses.filter((classObj) => {
      return classObj.studentId === matchingStudent.id})          
    setClassDropdownList(filteredList)
    console.log(classDropdownList)
  }, [classes, matchingStudent])

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
            <select id="classId" className="form-control" onChange={messageFilterResults}>
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
    <MessageCard key={message.id} message={message} />))}
    </div>
    </>
  )
};