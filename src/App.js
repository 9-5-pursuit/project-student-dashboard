
import React, { useState } from "react";
import studentsData from "./data/data.json";



function StudentCard({ student }) {
  const [card, setCard] = useState(false);
  const toggle = () => {
    setCard(!card);
    {
      //       return (
      //       <table className="table">
      //         <thead>
      //           <tr>
      //             <th>Codewars</th>
      //             <th>Scores</th>
      //             <th>Certifications</th>
      //           </tr>
      //         </thead>
      //         <tbody>
      //           <tr>
      //             <td>Current Total: {student.codewars.current.total}</td>
      //             <td>Asignment: {student.codewars.current.total}</td>
      //             <td>Certifications</td>
      //           </tr>
      //           <tr>
      //             <td>Last Week: </td>
      //             <td>Scores: </td>
      //             <td>Certifications</td>
      //           </tr>
      //           <tr>
      //             <td>Goal: </td>
      //             <td>Scores</td>
      //             <td>Certifications</td>
      //           </tr>
      //             <td>Percent of Goal Achieved: </td>
      //             <td></td>
      //             <td>Certifications</td>
      //           <
      //         tableRows}</tbody>
      //       </table>
      //     </div>
      //         <div className="table-info">
      //           Codewars: {student.codewars.current.total}
      
    }
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <img
            className="rounded float-left"
            src={student.profilePhoto}
            alt="student"
            width="200"
            height="200"
          />
          <div className="card-body card-img-left" style={{ color: "black" }}>
          {student.names.preferredName} {student.names.middleName[0]}. {student.names.surname}
            <br />
            {student.username}
            <br />
            <div style={{ color: "green" }}>
            Birthday: {student.dob}
            </div>
          </div>
          <div>
            <a onClick={toggle} href="#" className="nav-link">
              {card ? "Show More..." : "Show Less..."}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}


function StudentList({ students }) {
  const [studentCount, setStudentCount] = useState(students.length);
  return (
    <>
      <div className="students student-container">
        <div className="row">
          <div className="col-8 offset-4">
            <div className="card body">
        <h2>All Students</h2>
        <h3>Total Students: {studentCount}</h3>
        {students.map((student) => (
          <div key={student.id}>
            <StudentCard student={student} />
            
          </div>
        ))}
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

function App() {
  return (
    <div className="container">
      <main>
        <StudentList students={studentsData} />
        {/* <CohortList students={studentsData} /> */}
      </main>
    </div>
  );
}

export default App;