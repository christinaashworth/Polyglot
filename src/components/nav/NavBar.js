import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = (props) => {
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
              <Link className="navbar__link" to="/message">Send bulletin</Link>
          </li>
      </ul>
  )
};