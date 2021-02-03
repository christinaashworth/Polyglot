// class list shows entire list of students
// teachers can delete individual students
// send bulletin button (opens message form)

import React, { useContext, useEffect } from "react";
import { StudentContext } from "../students/StudentProvider";
import { ClassContext } from "./ClassProvider"
import { StudentClassContext } from "./StudentClassProvider"
import { Student } from "../students/Student";

export const ClassList = () => {
  const { students, getStudents } = useContext(StudentContext);
  const { classes, getClasses } = useContext(ClassContext)
  const { addStudentClass, getStudentClassById, updateStudentClass } = useContext(StudentClassContext)

  const [classList, setClassList] = useState([])

  const [teacherClasses, setTeacherClasses] = useState([])

  useEffect(() => {
    getClasses()
      .then(getStudents())
      .then(() => {
        const filteredList = classes.filter((classObj) => {
          return classObj.teacherId === parseInt(localStorage.polyglot_teacher)})          
        setTeacherClasses(filteredList)
      })
  }, []);


  return (
    <form className="classList">
      <fieldset>
          <div className="form-group">
            <label htmlFor="class">Select a class: </label>
            <select value={localStorage.polyglot_teacher.locationId} id="locationId" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a class: </option>
              {teacherClasses.map(c => (
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