import React from "react";
import { Route } from "react-router-dom";
import { StudentProvider } from "./students/StudentProvider";
import { Home2 } from "./Home2"
import { ClassProvider } from "./classes/ClassProvider";
import { StudentClassProvider } from "./classes/StudentClassProvider";
import { StudentForm } from "./students/StudentForm";
import { ClassList } from "./classes/ClassList";

export const TeacherViews = () => {
  return (
    <>
      <Route exact path="/">
        <Home2 />
      </Route>

      <ClassProvider>
        <StudentClassProvider>
        <Route exact path="/classlists">
          <ClassList />
        </Route>
      </StudentClassProvider>
      </ClassProvider>


    <StudentProvider>
      <ClassProvider>
        <StudentClassProvider>
          <Route path="/addstudent">
            <StudentForm />
          </Route>
        </StudentClassProvider>
      </ClassProvider>
    </StudentProvider>
    </>
  )
}