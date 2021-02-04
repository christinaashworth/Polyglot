// class list shows entire list of students
// teachers can delete individual students
// send bulletin button (opens message form)

import React, { useContext, useEffect, useState } from "react";
import { StudentContext } from "../students/StudentProvider";
import { ClassContext } from "./ClassProvider"
import { StudentClassContext } from "./StudentClassProvider"
import { Student } from "../students/Student";

export const ClassList = () => {
  const { studentClasses, getStudentClasses, getStudentClassById} = useContext(StudentClassContext)
  const { classes, getClasses } = useContext(ClassContext)

  const [selectedList, setSelectedList] = useState({
    classId: 0
  })

  const [dropdownList, setDropdownList] = useState([])
  const [displayList, setDisplayList] = useState([])

  const handleControlledInputChange = (event) => {
    const newSelectedClass = selectedList
    newSelectedClass[event.target.id] = parseInt(event.target.value)
    setSelectedList(newSelectedClass)
    console.log(selectedList.classId)
  }

  useEffect(() => {
    getClasses()
    .then(getStudentClasses)
  }, []);

  useEffect(() => {
    const filteredList = classes.filter((classObj) => {
      return classObj.teacherId === parseInt(localStorage.polyglot_teacher)})          
    setDropdownList(filteredList)
  }, [classes])

  useEffect(() => {
    const matchingStudentClasses = studentClasses.filter(c => c.classId === selectedList.classId)
      console.log(matchingStudentClasses)
      console.log(studentClasses)
  }, [studentClasses, (selectedList !== 0)])


  return (
    <form className="classList">
      <fieldset>
          <div className="form-group">
            <label htmlFor="class">Select a class: </label>
            <select value={selectedList.classId} id="classId" className="form-control" onChange={handleControlledInputChange}>
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
  )
};