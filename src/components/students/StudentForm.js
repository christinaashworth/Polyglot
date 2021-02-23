// search bar to add individual student to existing class (list has add  button next to each name)
// dropdown of classes teacher created
// save button

import React, { useContext, useEffect, useState } from "react"
import { StudentContext } from "./StudentProvider"
import { ClassContext } from "../classes/ClassProvider"
import { StudentClassContext } from "../classes/StudentClassProvider.js"
import { useHistory } from 'react-router-dom';

export const StudentForm = () => {
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
        .then(() => history.push("/classlists"))
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
      <form className="container card">
        <div className="card header card-header-title is-size-4">Add Student to Class</div>
        <div className="card-content control">
        <div className="block">Select a class, then select a student to add to the selected class. <br></br>
        Once you click "Save Class Assignment", you will be redirected to the "Class Lists" page.
        </div>
        <fieldset className="block">
          <div className="content select is-link">
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
        <fieldset className="block">
          <div className="content select is-link">
            <select value={studentClass.studentId} id="studentId" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a student</option>
              {students.map(s => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <button className="button is-dark"
          onClick={event => {
            event.preventDefault() 
            handleSaveStudentClass()
          }}>
        Save Class Assignment</button>
        </div>
      </form>
    )
}
