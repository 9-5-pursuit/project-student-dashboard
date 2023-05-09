import studentData from "./data/data.json";
import StudentCard from "./components/StudentCard";
import { useState, useEffect } from "react";

function App() {
  const [students, setStudents] = useState(studentData);
  const [showCard, setShowCard] = useState(false);
  const [cohortYear, setCohortYear] = useState("All Students");

  function handleCohort(semester) {
    // console.log(semester);
    setStudents(
      studentData.filter((item) => semester === item.cohort.cohortCode)
    );

    // console.log(semester);
    const year = semester.slice(-4);
    const season = semester.slice(0, -4);
    console.log(season);
    console.log(year);
    setCohortYear(`${season} ${year}`);
    // console.log(cohortYear);
  }

  return (
    <div className="App">
      <h1 className="header text-center text-light">Student Dashboard</h1>
      <div className="container">
        <div className="row">
          <div className="col-4 m-3">
            <div className="col">
              {/* <div className="row">
                <span className="fw-bold">Choose a class by start date</span>
              </div> */}
              <table className="table my-2">
                <thead>
                  <tr>
                    <th scope="col" className="fw-bold">
                      Choose a class by start date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td scope="row">
                      <a
                        onClick={() => {
                          setStudents(studentData);
                          setCohortYear("All Students");
                        }}
                      >
                        All Students
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <a onClick={() => handleCohort("Winter2026")}>
                        Winter 2026
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <a onClick={() => handleCohort("Fall2026")}>Fall 2026</a>
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <a onClick={() => handleCohort("Summer2026")}>
                        Summer 2026
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <a onClick={() => handleCohort("Spring2026")}>
                        Spring 2026
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <a onClick={() => handleCohort("Winter2025")}>
                        Winter 2025
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <a onClick={() => handleCohort("Fall2025")}>Fall 2025</a>
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <a onClick={() => handleCohort("Summer2025")}>
                        Summer 2025
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <a onClick={() => handleCohort("Spring2025")}>
                        Spring 2025
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* <hr /> */}
              {/* <a href="#" className="row">
                All Students
              </a>
              <hr className="border-primary" />
              <a href="#" className="row">
                Winter 2026
              </a>
              <a href="#" className="row">
                Fall 2026
              </a>
              <a href="#" className="row">
                Summer 2026
              </a>
              <a href="#" className="row">
                Spring 2026
              </a>
              <a href="#" className="row">
                Winter 2025
              </a>
              <a href="#" className="row">
                Fall 2025
              </a>
              <a href="#" className="row">
                Summer 2025
              </a>
              <a className="row">Spring 2025</a> */}
            </div>
          </div>
          <div className="col-7 m-3">
            <div className="m-3">
              {<h3>{cohortYear}</h3>}
              <p>
                Total Students:{" "}
                <span className="text-success">{students.length}</span>
              </p>
            </div>

            <StudentCard students={students} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
