import React, { useRef } from "react"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
import "./Login.css"


export const Login = props => {
    const teacherEmail = useRef()
    const parentEmail = useRef()
    const password = useRef()
    const existDialog = useRef()
    const history = useHistory()

    const existingTeacherCheck = () => {
        return fetch(`http://localhost:8088/teachers?email=${teacherEmail.current.value}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleTeacherLogin = (e) => {
        debugger
        e.preventDefault()

        existingTeacherCheck()
            .then(exists => {
                if (exists) {
                    localStorage.setItem("polyglot_teacher", exists.id)
                    history.push("/")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

    const existingParentCheck = () => {
        return fetch(`http://localhost:8088/parents?email=${parentEmail.current.value}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleParentLogin = (e) => {
        debugger
        e.preventDefault()
        
        existingParentCheck()
            .then(exists => { 
                if (exists) {
                localStorage.setItem("polyglot_parent", exists.id)
                history.push("/")
            } else {
                existDialog.current.showModal()
            }
        })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>

            <section>
                <form className="form--loginTeacher" onSubmit={handleTeacherLogin}>
                    <h1>Polyglot</h1>
                    <h2>Teacher Sign-In</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input ref={teacherEmail} type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section>
                <form className="form--loginParent" onSubmit={handleParentLogin}>
                    <h2>Parent Sign-In</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input ref={parentEmail} type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
        </main>
    )
}
