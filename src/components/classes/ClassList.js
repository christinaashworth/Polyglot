// class list shows entire list of students
// teachers can delete individual students
// send bulletin button (opens message form)

import React, { useContext, useEffect } from "react";
import { StudentContext } from "../students/StudentProvider";
import { Student } from "../students/Student";

export const ClassList = () => {
  const { students, getStudents } = useContext(StudentContext);

  useEffect(() => {
    getStudents();

  }, []);


  return (
    <div className="students">
      {
        students.map(student => {
          return <Student key={student.id} student={student} />
        })
      }
    </div>
  );
};