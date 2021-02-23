import { React, useContext, useEffect} from "react";
import { TeacherContext } from "./classes/TeacherProvider"


export const TeacherWelcome = () => {
  const { teachers, getTeachers } = useContext(TeacherContext)
  
  useEffect(() => {
    getTeachers()
  }, [])

  const findTeacher = () => teachers.find(t => t.id === parseInt(sessionStorage.polyglot_teacher))
  const teacher = findTeacher()

  if (teacher) {
    return (
      <>
      <section className="container section">
        <div className="is-size-3">Welcome, {teacher.name}!</div>
        <div className="is-size-5">Please select an option from the navigation bar.</div>
      </section>
      </>
    )
  } else {
    return (
      <>
      <section className="container section">
        <div className="is-size-3">Welcome!</div>
        <div className="is-size-5">Please select an option from the navigation bar.</div>
      </section>
      </>
  )
}};