import React from "react";
import { Link } from "react-router-dom";
import { Logout } from "../auth/Logout";
import logo from "./PolyglotLogo.png";

export const NavBar = (props) => {
  if (localStorage.polyglot_teacher) {
  return (
    <section className="navbar is-warning is-transparent">
      <div className="navbar-brand">
        <img src={logo} width="112" height="112" alt="Logo" />
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <span className="icon-text">
              <span className="icon">
                <ion-icon name="home"></ion-icon>
              </span>
              <span>
                <Link className="is-size-5 has-text-dark has-text-weight-semibold" to="/">Home</Link>
              </span>
            </span>
          </div>
          <div className="navbar-item">
            <span className="icon-text">
              <span className="icon">
                <ion-icon name="list-circle"></ion-icon>
              </span>
              <span>
                <Link className="is-size-5 has-text-dark has-text-weight-semibold" to="/classlists">Class Lists</Link>
              </span>
            </span>
          </div>
          <div className="navbar-item">
            <span className="icon-text">
              <span className="icon">
                <ion-icon name="add-circle"></ion-icon>
              </span>
              <span>
                <Link className="is-size-5 has-text-dark has-text-weight-semibold" to="/addclass">Add a Class</Link>
              </span>
            </span>
          </div>
          <div className="navbar-item">
            <span className="icon-text">
              <span className="icon">
              <ion-icon name="person-add"></ion-icon>
              </span>
              <span>
                <Link className="is-size-5 has-text-dark has-text-weight-semibold" to="/addstudent">Add a Student</Link>
              </span>
            </span>
          </div>
          <div className="navbar-item">
            <span className="icon-text">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <span>
                <Link className="is-size-5 has-text-dark has-text-weight-semibold" to="/sendmessage">Send Message</Link>
              </span>
            </span>
          </div>
          <div className="navbar-item">
            <span className="icon-text">
              <span className="icon">
                <ion-icon name="archive"></ion-icon>
              </span>
              <span>
                <Link className="is-size-5 has-text-dark has-text-weight-semibold" to="/viewmessages">View Messages</Link>
              </span>
            </span>
          </div>
        </div>
        <div className="navbar-end navbar-item">
          <button className="button is-light" onClick={Logout()}>Log Out</button> 
        </div>
      </div>
    </section>
  )} else {
    return (
      <section className="navbar is-warning">
        <div className="navbar-menu">
          <img src={logo} width="112" height="112" alt="Logo" />
        </div>
        <div className="navbar-item">
          <button className="button is-light" onClick={Logout()}>Log Out</button>
        </div>
      </section>
    )
  }
};