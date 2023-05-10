import studentData from "./data/data";
import Students from "./Components/Students";
import Cohorts from "./Components/Cohorts";
import { useState } from "react";

import "./index.css";

function App() {
  const [totalStudents, setTotalStudents] = useState(studentData.length);
  const [selectedStudents, setSelectedStudents] = useState(studentData);
  const [studentClassHeader, setStudentClassHeader] = useState("All Students");

  function filterStudents(classCode) {
    let filteredStudents = studentData.filter((student) => {
      return student.cohort.cohortCode === classCode.replace(" ", "");
    });
    setSelectedStudents(filteredStudents);
    setTotalStudents(filteredStudents.length);
    setStudentClassHeader(classCode);
  }

  function handleAllStudents() {
    setSelectedStudents(studentData);
    setTotalStudents(studentData.length);
    setStudentClassHeader("All Students");
  }

  return (
    <>
      <div className="header">
        <h1>Student Dashboard</h1>
      </div>

      <div className="allStudents">
        <div className="studentList">
          <h3>{studentClassHeader}</h3>
          <p>Total Students: {totalStudents}</p>
        </div>

        <Students selectedStudents={selectedStudents} />

        <h3 className="chooseClass">Choose a Class by Start Date</h3>
        <div className="allCohorts">
          <h4 className="h4Hover" onClick={handleAllStudents}>
            All Students
          </h4>
          <Cohorts filterStudents={filterStudents} />
        </div>
      </div>
    </>
  );
}

export default App;
