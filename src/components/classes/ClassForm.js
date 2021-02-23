// search bar to select students to add to roster
// list has add button next to each result
// input for class name w/save button
// class name and list of students appears (to confirm correct) with final save button

import React, { useContext, useEffect, useState } from "react"
import { ClassContext } from "../classes/ClassProvider"
import { useHistory } from 'react-router-dom';

export const ClassForm = () => {
    const { addClass } = useContext(ClassContext)

    const [classObj, setClass] = useState({
      name: "",
      teacherId: 0
    })
    
    const history = useHistory();
    
    const handleControlledInputChange = (event) => {
      const newClass = { ...classObj }
      newClass[event.target.id] = event.target.value
      setClass(newClass)
    }
    
    const handleSaveClass = () => {
        addClass({
          name: classObj.name,
          teacherId: parseInt(localStorage.polyglot_teacher)
        })
        .then(() => history.push("/addstudent"))
    }

    return (
      <form className="container card block">
        <div className="card header card-header-title is-size-4">Add Class</div>
          <div className="card-content content">
            <div className="block">Enter the name of the new class list below.<br></br>
              When you're finished, you will be redirected to the "Add Student" page, where you can add students to your class list.
            </div>
            <fieldset className="block">
              <input className="input" type="text" id="name" required autoFocus
              placeholder="Enter new class name:"
              onChange={handleControlledInputChange}
              value={classObj.name}/>
            </fieldset>
            <button className="button is-dark"
              onClick={event => {
                event.preventDefault() 
                handleSaveClass()
              }}>Add Class</button>
          </div>
      </form>
    )
}