import data from "./data/data.json";
import { useEffect, useState } from "react";

// import { FaCheck, FaTimes } from "react-icons/fa";
import StudentList from "./Component/StudentList";
// import CohortList from "./Component/CohortList";

function App() {
  const [students, setStudents] = useState(data); //array
  // console.log(data);
  const [cohort, setCohort] = useState("All students"); //string

  const formatSeason = cohort.slice(0, -4);
  // console.log(formatSeason);
  const formatYear = cohort.slice(-4);
  // console.log(formatYear);
  const formattedCohort = `${formatSeason} ${formatYear}`;

  //handle CohortClick
  function handleCohortClick(string) {
    setCohort(string);
    setStudents(data.filter((item) => item.cohort.cohortCode === string));
  }

  useEffect(() => {
    setStudents(data);
  }, []);

  return (
    <div className="Header">
      <h1 className="text-center m-3 bg-success text-white">
        Student Dashboard
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-3">
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
                      onClick={() => {
                        setStudents(data);
                        setCohort("All students");
                      }}
                    >
                      All Students
                    </td>
                  </tr>

                  <tr>
                    <td
                      onClick={() => {
                        handleCohortClick("Spring2025");
                      }}
                    >
                      Spring 2025
                    </td>
                  </tr>
                  <tr>
                    <td
                      onClick={() => {
                        handleCohortClick("Summer2025");
                      }}
                    >
                      Summer2025
                    </td>
                  </tr>
                  <tr>
                    <td
                      onClick={() => {
                        handleCohortClick("Fall2025");
                      }}
                    >
                      Fall 2025
                    </td>
                  </tr>
                  <tr>
                    <td
                      onClick={() => {
                        handleCohortClick("Winter2025");
                      }}
                    >
                      Winter 2025
                    </td>
                  </tr>
                  <tr>
                    <td
                      onClick={() => {
                        handleCohortClick("Spring2026");
                      }}
                    >
                      Spring 2026
                    </td>
                  </tr>
                  <tr>
                    <td
                      onClick={() => {
                        handleCohortClick("Summer2026");
                      }}
                    >
                      Summer 2026
                    </td>
                  </tr>
                  <tr>
                    <td
                      onClick={() => {
                        handleCohortClick("Fall2026");
                      }}
                    >
                      Fall 2026
                    </td>
                  </tr>
                  <tr>
                    <td
                      onClick={() => {
                        handleCohortClick("Winter2026");
                      }}
                    >
                      Winter 2026
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <CohortList students={students} setStudents={setStudents} /> */}
            <hr />
          </div>

          <div className="col-8">
            {/* <h3>All students</h3> */}
            <h3>{cohort}</h3>
            <p>Total students: {students.length}</p>

            <aside>
              <StudentList students={students} />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
