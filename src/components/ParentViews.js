import React from "react";
import { Route } from "react-router-dom";
import { ParentWelcome } from "./ParentWelcome"
import { ParentProvider } from "./students/ParentProvider"
import { ClassProvider } from "./classes/ClassProvider";
import { MessageProvider } from "./messages/MessageProvider";
import { StudentProvider } from "./students/StudentProvider";
import { MessageList } from "./messages/MessageList";
import { StudentClassProvider } from "./classes/StudentClassProvider";

export const ParentViews = () => {
  return (
    <>
      <ParentProvider>
      <StudentClassProvider>
      <StudentProvider>
        <ClassProvider>
          <MessageProvider>
            <Route exact path="/">
              <ParentWelcome />
              <MessageList />
            </Route>
          </MessageProvider>
        </ClassProvider>
      </StudentProvider>
      </StudentClassProvider>
      </ParentProvider>
    </>
  )
}