import React from "react";
import { Route } from "react-router-dom";
import { StudentProvider } from "./students/StudentProvider";
// import { ClassList } from "./classes/ClassList";
import { Home2 } from "./Home2"
import { ClassProvider } from "./classes/ClassProvider";
import { StudentClassProvider } from "./classes/StudentClassProvider";
import { StudentForm } from "./students/StudentForm";

export const TeacherViews = () => {
  return (
    <>
      <Route exact path="/">
        <Home2 />
      </Route>

    {/* <StudentProvider>
      <Route exact path="/classlist">
        <ClassList />
      </Route>
    </StudentProvider> */}

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