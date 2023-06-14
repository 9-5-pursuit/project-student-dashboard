import studentData from "./data/data.json";
import StudentList from "./Components/StudentList";
import { useState } from "react";
function App() {
  //const [student, setStudent] = useState(studentData);
  //console.log(studentData[0].cohort.cohortCode);
  return (
    <div>
      <div className="d-flex justify-content-center text-bg-primary p-5 fs-1">
        <h1>Student Dashboard</h1>
      </div>
      <main className="container">
        <div className="row">
          <StudentList />
          <div className="col-4">
            <h2>Choose a Class by Start Date</h2>
            <table className="table">
              <tbody>
                <tr>
                  <td> All Students</td>
                </tr>
                <tr>
                  <td>Spring 2025</td>
                </tr>
                <tr>
                  <td>Summer 2025</td>
                </tr>
                <tr>
                  <td> Fall 2025</td>
                </tr>
                <tr>
                  <td> Winter 2025</td>
                </tr>
                <tr>
                  <td>Spring 2026</td>
                </tr>
                <tr>
                  <td>Summer 2026</td>
                </tr>
                <tr>
                  <td>Fall 2026</td>
                </tr>
                <tr>
                  <td>Winter 2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
