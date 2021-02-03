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

    const [isLoading, setIsLoading] = useState(true);

    const history = useHistory();
    
    const handleControlledInputChange = (event) => {
      const newStudentClass = { ...studentClass }
      newStudentClass[event.target.id] = event.target.value
      setStudentClass(newStudentClass)
    }
    
    const handleSaveStudentClass = () => {
      // if (parseInt())
      // setIsLoading(true)
      //   updateStudentClass({
      //     id: studentClass.id,
      //     classId: studentClass.classId,
      //     studentId: studentClass.studentId
      //   })
      //   .then(() => history.push(`/studentClasses/detail/${studentClass.id}`))
      // } else {
      //   addStudentClass({
      //     classId: studentClass.classId,
      //     studentId: studentClass.studentId
      //   })
      //   .then(() => history.push("/studentClasses"))
      // }
    }
    useEffect(() => {
      console.log(displayList)
    }, [displayList])
    
    useEffect(() => {
      getClasses()
      .then(getStudents)
      .then(() => {
        const filterList = classes.filter((classObj) => {
          console.log(classObj.teacherId)
          return classObj.teacherId === parseInt(localStorage.polyglot_teacher)})          
        setDisplayList(filterList)
      })
    }, [])

    return (
      <form className="studentClassForm">
        <h2 className="studentClassForm__title">"Add Student to Class"</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="location">Select a student: </label>
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
        <fieldset>
          <div className="form-group">
            <label htmlFor="location">Assign to class: </label>
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
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() 
            handleSaveStudentClass()
          }}>
        "Save Class Assignment"</button>
      </form>
    )
}
