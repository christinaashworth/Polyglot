import React from "react";
import { Route } from "react-router-dom";
import "./ParentViews.css";
import { ParentWelcome } from "./ParentWelcome"
import { ParentProvider } from "./students/ParentProvider"
import { ClassProvider } from "./classes/ClassProvider";
import { MessageProvider } from "./messages/MessageProvider";
import { StudentProvider } from "./students/StudentProvider";
import { MessageList } from "./messages/MessageList";
import { StudentClassProvider } from "./classes/StudentClassProvider";
import { TranslationList } from "./translation/TranslationList";
import { TranslationProvider } from "./translation/TranslationProvider";

export const ParentViews = () => {
  return (
    <>
      <ParentProvider>
      <TranslationProvider>
      <StudentClassProvider>
      <StudentProvider>
        <ClassProvider>
          <MessageProvider>
            <Route exact path="/">
              <ParentWelcome />
              <article className="messageTranslateContainer">
              <MessageList />
              {/* <TranslationList/> */}
              </article>
            </Route>
          </MessageProvider>
        </ClassProvider>
      </StudentProvider>
      </StudentClassProvider>
      </TranslationProvider>
      </ParentProvider>
    </>
  )
}