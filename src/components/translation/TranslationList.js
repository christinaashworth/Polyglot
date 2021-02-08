import React, { useContext } from "react";
import { ParentContext } from "../students/ParentProvider";
import { TranslationContext } from "./TranslationProvider"

export const TranslationList = (event) => {
  const { results, addTranslation } = useContext(TranslationContext);
  const { parents, getParents } = useContext(ParentContext);
  
  const message = event.target.value

  const applicableParent = parents.find(p => p.id === parseInt(localStorage.polyglot_parent))
  const userLanguage = applicableParent.language

    addTranslation(message.text, userLanguage)
    console.log(results)
    return (
      <div>
      <p>{results}</p>
    </div>
  );
};