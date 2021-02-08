import React from "react";
import { Route, Redirect } from "react-router-dom";
import { TeacherViews } from "./TeacherViews";
import { ParentViews } from "./ParentViews";
import { ParentProvider } from "./students/ParentProvider"
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Logout } from "./auth/Logout";
import "./Polyglot.css";
import { TeacherProvider } from "./classes/TeacherProvider";

export const Polyglot = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("polyglot_teacher")) {
          return (
            <>
              <NavBar />
              <TeacherProvider>
                <TeacherViews />
              </TeacherProvider>
            </>
          )
        } else if (localStorage.getItem("polyglot_parent")) {
          return (
            <>
              <NavBar />
              <ParentProvider>
                <ParentViews />
              </ParentProvider>
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