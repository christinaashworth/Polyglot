import { React, useContext, useEffect} from "react";
import { ParentContext } from "./students/ParentProvider"


export const ParentWelcome = () => {
  const { parents, getParents } = useContext(ParentContext)
  
  useEffect(() => {
    getParents()
  }, [])

  const findParent = () => parents.find(p => p.id === parseInt(localStorage.polyglot_parent))
  const parent = findParent()
  console.log(parent)

  if (parent) {
    return (
      <>
        <h2>Welcome, {parent.name}!</h2>
      </>
    )
  } else {
    return (
      <>
        <h2>Welcome!</h2>
      </>
    )
  }
};