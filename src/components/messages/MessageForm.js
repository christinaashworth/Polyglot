import React, { useContext, useEffect, useState } from "react"
import { StudentContext } from "../students/StudentProvider"
import { ClassContext } from "../classes/ClassProvider"
import { StudentClassContext } from "../classes/StudentClassProvider.js"
import { MessageContext } from "./MessageProvider"
import { useHistory } from 'react-router-dom';

export const MessageForm = () => {
    const { addStudentClass, getStudentClassById, updateStudentClass } = useContext(StudentClassContext)
    const { classes, getClasses } = useContext(ClassContext)
    const { students, getStudents} = useContext(StudentContext)

    const [studentClass, setStudentClass] = useState({
      classId: 0,
      studentId: 0
    })
    
    const [displayList, setDisplayList] = useState([])

    const history = useHistory();
    
    const handleControlledInputChange = (event) => {
      const newStudentClass = { ...studentClass }
      newStudentClass[event.target.id] = event.target.value
      setStudentClass(newStudentClass)
    }
    
    const handleSaveStudentClass = () => {
        addStudentClass({
          classId: parseInt(studentClass.classId),
          studentId: parseInt(studentClass.studentId)
        })
        .then(() => history.push("/addstudent"))
    }

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
      <form className="studentClassForm">
        <h2 className="studentClassForm__title">Send Bulletin</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="location">Class: </label>
            <select value={studentClass.classId} id="classId" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a class</option>
              {displayList.map(c => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        
        <button className="btn btn-primary"
          onClick={event => {
            event.preventDefault() 
            handleSaveStudentClass()
          }}>
        Send Bulletin</button>
      </form>
    )
}
