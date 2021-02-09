// import React, { useContext, useEffect, useState } from "react";
// import { ClassContext } from "../classes/ClassProvider"
// import { TeacherMessage } from "../messages/TeacherMessage"
// import { MessageContext from "./MessageProvider"}

// export const TeacherMessageList = () => {
//   const { messages, getMessages} = useContext(MessageContext)
//   const [matchingMessages, setMatchingMessages] = useState([])

//   const messageFilterResults = (classObj) => {
//     const matchingMessages = messages.filter(m => m.classId === classObj.classId)
//     setMatchingMessages(matchingMessages)
//   }

//   useEffect(() => {
//     getMessages()
//   }, [])

//   return (
//     <div>
//     {matchingMessages.map(message => (
//       <TeacherMessage key={message.id} message={message} />)
//     </div>
//   )

// }
