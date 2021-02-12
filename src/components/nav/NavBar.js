import React from "react";
import { Link } from "react-router-dom";
import { Logout } from "../auth/Logout";
import logo from "./PolyglotLogo.png";

export const NavBar = (props) => {
  if (localStorage.polyglot_teacher) {
  return (
    <section className="navbar is-warning">
      <div className="navbar-brand">
        <img src={logo} width="112" height="112" alt="Logo" />
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item is-size-5" to="/">Home</Link>
          <Link className="navbar-item is-size-5" to="/classlists">Class Lists</Link>
          <Link className="navbar-item is-size-5" to="/addclass">Add a Class</Link>
          <Link className="navbar-item is-size-5" to="/addstudent">Add a Student</Link>
          <Link className="navbar-item is-size-5" to="/sendmessage">Send Message</Link>
          <Link className="navbar-item is-size-5" to="/viewmessages">View Messages</Link>
        </div>
        <div className="navbar-end">
          <button className="button is-light" onClick={Logout()}>Log Out</button> 
        </div>
      </div>
    </section>
  )} else {
    return (
      <section className="navbar is-warning">
        <div className="navbar-brand">
          <img src={logo} width="112" height="112" alt="Logo" />
        </div>
          <button className="button is-light" onClick={Logout()}>Log Out</button>
      </section>
    )
  }
};