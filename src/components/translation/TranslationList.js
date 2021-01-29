import React, { useContext, useEffect } from "react";
import { TranslationContext } from "./TranslationProvider";
import { TranslationCard } from "./Translation";
import "./Message.css";

export const TranslationList = () => {
  const { translations, getTranslations } = useContext(TranslationContext);

  useEffect(() => {
    getTranslations()
  }, []);


  return (
    <div className="messages">
      {
        messages.map(message => {
          return <MessageCard key={message.id} message={message} />
        })
      }
    </div>
  );
};