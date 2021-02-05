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
        .then(() => history.push("/addclass"))
    }

    
    // useEffect(() => {
    //   getClasses()
    // }, [])

    return (
      <form className="classForm">
        <h2 className="classForm__title">Add Class</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Class name: </label>
            <input type="text" id="name" required autoFocus className="form-control"
            placeholder="Class name"
            onChange={handleControlledInputChange}
            value={classObj.name}/>
          </div>
        </fieldset>
        <button className="btn btn-primary"
          onClick={event => {
            event.preventDefault() 
            handleSaveClass()
          }}>Add Class</button>
      </form>
    )
}