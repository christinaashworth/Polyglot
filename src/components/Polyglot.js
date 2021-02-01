import React from "react";
import { Route, Redirect } from "react-router-dom";
import { TeacherViews } from "./TeacherViews";
import { ParentViews } from "./ParentViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import "./Polyglot.css";

export const Polyglot = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("polyglot_teacher")) {
          return (
            <>
              <TeacherViews />
            </>
          )
        } else if (localStorage.getItem("polyglot_parent")) {
          return (
            <>
              <ParentViews />
            </>
          )
        }
        else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
  </>
);