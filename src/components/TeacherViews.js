import React from "react";
import { Route } from "react-router-dom";
import { Home2 } from "./Home2"

export const TeacherViews = () => {
  return (
    <>
      <Route exact path="/">
        <Home2 />
      </Route>
    </>
  )
}