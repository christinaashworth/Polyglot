import React, { useRef } from "react"
import { useHistory } from "react-router-dom"


export const Login = props => {
    const teacherEmail = useRef()
    const parentEmail = useRef()
    const existDialog = useRef()
    const history = useHistory()

    const existingTeacherCheck = () => {
        return fetch(`http://localhost:8088/teachers?email=${teacherEmail.current.value}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleTeacherLogin = (e) => {
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
        <main className="container login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>
            <section className="is-size-2 has-text-centered">Welcome to Polyglot!</section>
            <article className="columns is-flex-direction-row">
            <section className="column">
                <form className="box has-text-centered" onSubmit={handleTeacherLogin}>
                    <section className="is-size-4">Teacher Sign-In</section>
                    <fieldset>
                        <div className="section is-size-6"> Please enter your email address below </div>
                            <input className="input" ref={teacherEmail} type="email"
                                id="email"
                                placeholder="Email address"
                                required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button className="button is-dark" type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section class="column">
                <form className="box has-text-centered" onSubmit={handleParentLogin}>
                    <section className="is-size-4">Parent Sign-In</section>
                    <fieldset>
                        <div className="section is-size-6" htmlFor="inputEmail"> Please enter your email address below </div>
                            <input className="input" ref={parentEmail} type="email"
                                id="email"
                                placeholder="Email address"
                                required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button className="button is-dark" type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            </article>
        </main>
    )
}
