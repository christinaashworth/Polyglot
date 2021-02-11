import React from "react";
import { Route } from "react-router-dom";
import { StudentProvider } from "./students/StudentProvider";
import { TeacherWelcome } from "./TeacherWelcome"
import { TeacherProvider } from "./classes/TeacherProvider"
import { ClassProvider } from "./classes/ClassProvider";
import { ClassForm } from "./classes/ClassForm";
import { StudentClassProvider } from "./classes/StudentClassProvider";
import { StudentForm } from "./students/StudentForm";
import { ClassList } from "./classes/ClassList";
import { MessageForm } from "./messages/MessageForm";
import { MessageProvider } from "./messages/MessageProvider";
import { TeacherMessageList } from "./messages/TeacherMessageList";

export const TeacherViews = () => {
  return (
    <>
      <Route exact path="/">
        <TeacherProvider>
          <TeacherWelcome/>
        </TeacherProvider>
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
            <Route path="/sendmessage">
              <MessageForm />
            </Route>
            <Route path="/viewmessages">
              <TeacherMessageList />
            </Route>
            <Route path="/messages/edit/:messageId(\d+)">
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