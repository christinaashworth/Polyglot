import React from "react";
import { Link } from "react-router-dom";
import { Logout } from "../auth/Logout";
import "./NavBar.css";

export const NavBar = (props) => {
  if (localStorage.polyglot_teacher) {
  return (
      <ul className="navbar">
          <li className="navbar__item active">
              <Link className="navbar__link" to="/">Home</Link>
          </li>
          <li className="navbar__item">
              <Link className="navbar__link" to="/classlists">Class Lists</Link>
          </li>
          <li className="navbar__item">
              <Link className="navbar__link" to="/addclass">Add a Class</Link>
          </li>
          <li className="navbar__item">
              <Link className="navbar__link" to="/addstudent">Add a Student</Link>
          </li>
          <li className="navbar__item">
              <Link className="navbar__link" to="/sendmessage">Send Message</Link>
          </li>
          <li className="navbar__item">
              <Link className="navbar__link" to="/viewmessages">View Messages</Link>
          </li>
          <li className="navbar__item">
              <button onClick={Logout()}>Log Out</button>
          </li>
      </ul>
  )} else {
    return (
      <ul className="navbar">
        <li className="navbar__item">
        <button onClick={Logout()}>Log Out</button>
        </li>
      </ul>
    )
  }
};