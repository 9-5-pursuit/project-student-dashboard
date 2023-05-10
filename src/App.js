import React, { useState } from "react";
import studentData from "./data/data.json";
import Header from "./components/Header.js";
//import AsideBar from "./components/AsideBar";
import StudentCard from "./components/StudentCard";
import StudentsBoard from "./components/StudentsBoard";

function App() {
  const [students, setStudents] = useState(studentData);
  const [selectedCohort, setSelectedCohort] = useState("All students");

  function handleFilteredCohort(cohort) {
    setSelectedCohort(cohort);
    setStudents(
      studentData.filter((item) => item.cohort.cohortCode === cohort)
    );
  }

  return (
    <div className="App">
      <Header />
      <main className="container-fluid">
        <div className="row">
          <div className="col-4 m-3">
            <div className="col">
              <table className="table">
                <thead>
                  <tr>
                    <th className="fw-bold">Choose a Class by Start Date:</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      className="hover"
                      onClick={() => {
                        setStudents(studentData);
                      }}
                    >
                      All Students
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="hover"
                      onClick={() => {
                        handleFilteredCohort("Spring2025");
                      }}
                    >
                      Spring 2025
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="hover"
                      onClick={() => {
                        handleFilteredCohort("Summer2025");
                      }}
                    >
                      Summer 2025
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="hover"
                      onClick={() => handleFilteredCohort("Fall2025")}
                    >
                      Fall 2025
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="hover"
                      onClick={() => {
                        handleFilteredCohort("Winter2025");
                      }}
                    >
                      Winter 2025
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="hover"
                      onClick={() => {
                        handleFilteredCohort("Spring2026");
                      }}
                    >
                      Spring 2026
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="hover"
                      onClick={() => {
                        handleFilteredCohort("Summer2026");
                      }}
                    >
                      Summer 2026
                    </td>
                  </tr>
                  <tr>
                    <td
                      className=" hover"
                      onClick={() => handleFilteredCohort("Fall2026")}
                    >
                      Fall 2026
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="hover"
                      onClick={() => {
                        handleFilteredCohort("Winter2026");
                      }}
                    >
                      Winter 2026
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-7 m-3">
            {/* the student cards will go here  */}
            <StudentsBoard
              students={students}
              selectedCohort={selectedCohort}
            />
          </div>
        </div>
      </main>

      {/* how to know if i am getting the right info? look below
       {studentData.map((studentInfo) => {
        return studentInfo.username;
      })} */}
    </div>
  );
}

export default App;
