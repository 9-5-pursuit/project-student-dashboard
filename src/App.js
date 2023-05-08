import studentData from "./data/data.json";
import { useState } from "react";
import StudentCard from "./Components/StudentCard";
import CohortList from "./Components/CohortList";

function App() {
const [students, setStudents] = useState(studentData)
const [total, setTotal] = useState(students.length);
const [currentClass, setCurrentClass] = useState("All Students")
  
  return (
    <div className="container">
      <header>
        <h1>Student Dashboard</h1>
      </header>

      <main>
        <aside className="cohort-container">
          <CohortList
            students={studentData}
            setStudents={setStudents}
            setTotal={setTotal}
            setCurrentClass={setCurrentClass}
          />
        </aside>
        
        <div className="students-container">
          <h2>{currentClass}</h2>
          <p>Total Students: {total}</p>
          {students.map((student) => (
            <div className="studentCard" key={student.id}>
              <StudentCard student={student} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
