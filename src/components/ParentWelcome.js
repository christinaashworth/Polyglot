import { React, useContext, useEffect} from "react";
import { ParentContext } from "./students/ParentProvider"


export const ParentWelcome = () => {
  const { parents, getParents } = useContext(ParentContext)
  
  useEffect(() => {
    getParents()
  }, [])

  const findParent = () => parents.find(p => p.id === parseInt(sessionStorage.polyglot_parent))
  const parent = findParent()
  console.log(parent)

  if (parent) {
    return (
      <>
        <div className="section is-size-4">Welcome, {parent.name}!</div>
      </>
    )
  } else {
    return (
      <>
        <div className="section is-size-4">Welcome!</div>
      </>
    )
  }
};