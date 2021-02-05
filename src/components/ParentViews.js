import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home"
import { ClassProvider } from "./classes/ClassProvider";
import { MessageProvider } from "./messages/MessageProvider";
import { StudentProvider } from "./students/StudentProvider";
import { MessageList } from "./messages/MessageList";
import { StudentClassProvider } from "./classes/StudentClassProvider";

export const ParentViews = () => {
  return (
    <>
      <StudentClassProvider>
      <StudentProvider>
        <ClassProvider>
          <MessageProvider>
            <Route exact path="/">
              <Home />
              <MessageList />
            </Route>
          </MessageProvider>
        </ClassProvider>
      </StudentProvider>
      </StudentClassProvider>
    </>
  )
}