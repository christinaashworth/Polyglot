// // class list shows entire list of students
// // teachers can delete individual students
// // send bulletin button (opens message form)

// import React, { useContext, useEffect } from "react";
// import { StudentContext } from "../students/StudentProvider";
// import { Student } from "../students/Student";

// export const ClassList = () => {
//   const { students, getStudents } = useContext(StudentContext);

//   useEffect(() => {
//     getStudents();
//   }, []);


//   return (
//     <div className="classes">
//       <form className="selectClass">
//       <fieldset>
//           <div className="form-group">
//             <label htmlFor="class">Select a class: </label>
//             <select value={localStorage.polyglot_teacher.locationId} id="locationId" className="form-control" onChange={handleControlledInputChange}>
//               <option value="0">Select a location</option>
//               {locations.map(l => (
//                 <option key={l.id} value={l.id}>
//                   {l.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </fieldset>
//   );
// };