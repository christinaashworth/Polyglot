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

  const [matchingStudentClasses, setMatchingStudentClasses] = useState([])
  const [dropdownList, setDropdownList] = useState([])

  const filterResults = (event) => {
    const matchingStudentClasses = studentClasses.filter(sc => sc.classId === parseInt(event.target.value))
      setMatchingStudentClasses(matchingStudentClasses)
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

  return (
    <>
    <form className="classList">
      <fieldset>
          <div className="form-group">
            <label htmlFor="class">Select a class: </label>
            <select id="classId" className="form-control" onChange={filterResults}>
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
    {matchingStudentClasses.map(classObj => (
    <Student key={classObj.student.id} student={classObj.student} />))}
    </div>
    </>
  )
};