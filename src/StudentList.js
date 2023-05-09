import React from "react";
import studentData from "./data/data.json";
import StudentCard from "./StudentCard";
console.log(studentData[0]);

function StudentList() {

  return (
    <div>
        {studentData.map((student)=> <StudentCard student ={student}/> )}
      
      
    </div>
  );
}

export default StudentList;
