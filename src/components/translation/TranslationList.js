import React, { useContext, useEffect } from "react";
import { ParentContext } from "../students/ParentProvider";
import { TranslationContext } from "./TranslationProvider"

export const TranslationList = ({message}) => {
  const { results, addTranslation } = useContext(TranslationContext);
  const { parents, getParents } = useContext(ParentContext);
  
  const applicableParent = parents.find(p => p.id === parseInt(localStorage.polyglot_parent))
  const userLanguage = applicableParent.language
  
  useEffect(() => { 
    addTranslation(message.text, userLanguage)
  }, [message])

    return (
      <div>
      <p>{results}</p>
    </div>
  );
};