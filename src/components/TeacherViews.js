import React from "react";
import { Route } from "react-router-dom";
import { StudentProvider } from "./students/StudentProvider";
import { Home2 } from "./Home2"
import { ClassProvider } from "./classes/ClassProvider";
import { ClassForm } from "./classes/ClassForm";
import { StudentClassProvider } from "./classes/StudentClassProvider";
import { StudentForm } from "./students/StudentForm";
import { ClassList } from "./classes/ClassList";
import { MessageForm } from "./messages/MessageForm";
import { MessageProvider } from "./messages/MessageProvider";

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
          <MessageProvider>
            <Route path="/addstudent">
              <StudentForm />
            </Route>
            <Route path="/message">
              <MessageForm />
            </Route>
          </MessageProvider>
        </StudentClassProvider>
      </ClassProvider>
    </StudentProvider>

    <ClassProvider>
      <Route path="/addclass">
        <ClassForm /> 
      </Route>
    </ClassProvider>


    </>
  )
}