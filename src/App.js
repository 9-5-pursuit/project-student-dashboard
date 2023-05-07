import studentData from "./data/data.json";
import { useState } from "react";
import StudentCard from "./Components/StudentCard";

function App() {
const [students, setStudents] = useState(studentData)
  return (
    <div className="container">
      
      <header>
      <h1>Student Dashboard</h1>
      </header>
      
      <main>
        <div className="allStudents">
          <h2>All Students</h2>
          <p>Total Students: {studentData.length}</p>
          {/* use map to render StudentCard for each student */}
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
