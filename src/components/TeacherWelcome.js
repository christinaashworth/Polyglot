import { React, useContext, useEffect} from "react";
import { TeacherContext } from "./classes/TeacherProvider"


export const TeacherWelcome = () => {
  const { teachers, getTeachers } = useContext(TeacherContext)
  
  useEffect(() => {
    getTeachers()
  }, [])

  const findTeacher = () => teachers.find(t => t.id === parseInt(localStorage.polyglot_teacher))
  const teacher = findTeacher()

  if (teacher) {
    return (
      <>
        <h2>Welcome, {teacher.name}!</h2>
        <h4>Please select an option from the navigation bar.</h4>
      </>
    )
  } else {
    return (
      <>
        <h2>Welcome!</h2>
        <h4>Please select an option from the navigation bar.</h4>
      </>
  )
}};