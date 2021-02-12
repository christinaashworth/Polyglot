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
    <section className="section container tile is-ancestor">
    <div className="tile is-parent">
    <section className="tile is-child is-size-6">Select a class from the dropdown to view the list of students currently enrolled.
    <form>
      <fieldset>
          <div className="select is-link">
            <select id="classId" onChange={filterResults}>
             <option value="0">Select a class: </option>
              {dropdownList.map(c => (
                <option className="dropdown-item" key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
      </fieldset>
    </form>
    </section>
    <div className="tile is-child card is-size-6">
      <div className="card-header">Enrolled Students:</div>
        <div className="card-content">
          {matchingStudentClasses.map(classObj => (
            <Student key={classObj.student.id} student={classObj.student} />))}
      </div>
    </div>
    </div>
    </section>
    </>
  )
};