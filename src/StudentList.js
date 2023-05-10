import React from "react";
import studentData from "./data/data.json";
import StudentCard from "./StudentCard";
console.log(studentData[0]);

function StudentList() {
  return (
    <div>
      <h2>All Students</h2>
      <h3>Total Students: {studentData.length}</h3>
      {studentData.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}

export default StudentList;
