import React from "react";
import { Route } from "react-router-dom";
import { StudentProvider } from "./students/StudentProvider";
import { ClassList } from "./classes/ClassList";
import { Home2 } from "./Home2"

export const TeacherViews = () => {
  return (
    <>
      <Route exact path="/">
        <Home2 />
      </Route>

    <StudentProvider>
      <Route exact path="/classlist">
        <ClassList />
      </Route>
    </StudentProvider>
    </>
  )
}