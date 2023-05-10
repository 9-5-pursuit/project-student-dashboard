import React from "react";
import studentData from "./data/data.json";
import "./App.css";

import Cohort from "./Components/Cohort";
import Student from "./Components/Student";
import StudentList from "./Components/StudentList";

function App() {
  return (
    <div>
      <div className="navbar">
        <h2 className="title">Student Dashboard</h2>
      </div>

      <div className="container">
        <Cohort studentData={studentData} />
        <StudentList student={studentData} />
        <Student studentData={studentData} />
      </div>
    </div>
  );
}

export default App;
