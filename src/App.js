import react, { useState } from "react";
import studentsData from "./data/data.json";
// import StudentListByCohorst from "./components/StudentList";

// -------  Student Card --------- \\
function StudentCard({ student }) {
  const [moreInfo, setMoreInfo] = useState(false);
  const toggle = () => {
    setMoreInfo(!moreInfo);
    {
      return (
        <table className="table">
          <thead>
            <tr>
              <th>Codewars:</th>
              <th>Scores</th>
              <th>Certifications</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Current Total: {student.codewars.current.total}</td>
              <td>Asignments: {student.cohort.scores.assignments}</td>
              <td>Resume: X</td>
            </tr>
            <tr>
              <td>Last Week: {student.codewars.current.lastWeek}</td>
              <td>Projects: {student.cohort.scores.projects}</td>
              <td>Linkedin: X</td>
            </tr>
            <tr>
              <td>Goal: {student.codewars.goal.total}</td>
              <td>Assessments: {student.cohort.scores.assesements}</td>
              <td>Mock Interview: X</td>
            </tr>
            <tr>
              <td>
                Percent of Goal Achieved: ({student.codewars.current.total}
                {student.codewars.goal.total})%
              </td>
              <td></td>
              <td>GitHub: X</td>
            </tr>
          </tbody>
        </table>
      );
    }
  };
  return (
    <>
      <div className="container">
        <div className="row gy-4">
          <div className="col-12">
            <div className="card body">
              <img
                className="card-img-left"
                src={student.profilePhoto}
                alt="student"
                width="100"
                height="100"
              />
              <div className="card-body card-img-left">
                {student.names.preferredName} {student.names.middleName[0]}.{" "}
                {student.names.surname}
                <br />
                {student.username}
                <br />
                <span style={{ color: "blue" }}>Birthday: {student.dob}</span>
              </div>
              <div>
                <a
                  onClick={toggle}
                  href="#"
                  className="nav-link"
                  style={{ color: "blue" }}
                >
                  {moreInfo ? "Show More" : "Show Less"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ---- ----------   StudentList   ----------- ----- \\
function StudentList({ students, allStudentsCount }) {
  const [studentCount, setStudentCount] = useState(students.length);
  return (
    <>
      <div className="student-container">
        <div className="row">
          <div className="col-8 offset-4">
            <div className="card body">
              <h3>All Students</h3>
              <h4>Total Students: {allStudentsCount}</h4>
              {students.map((student) => (
                <div key={student.id}>
                  <StudentCard student={student} />
                  <CohortList student={student} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ----- -----------    COHORT LIST     ----------- -----\\
function CohortList(students) {
  // return (
  <aside>
    <div>
      <h2>Choose a Class by Start Date</h2>
      <h3>All Students</h3>
    </div>
    <StudentCohort students={students} />
  </aside>;
  //);
}
function StudentCohort({ students }) {
  const allStudentsCount = { students }.length;
  const [currentCohortCount, setCurrentCohortCount] =
    useState(allStudentsCount);
  // {
  //   setCurrentCohortCount(
  //     [students.cohort].includes([student.cohort.cohortCode]).length
  //   );
  // }

  return (
    <aside>
      <div>
        <div className="student-container">
          <div className="table"></div>
          <ul>{/* <li>{student.cohort.cohortCode}</li> */}</ul>
        </div>
      </div>
    </aside>
  );
}

function App() {
  return (
    <div className="container">
      <main>
        <StudentList students={studentsData} />
      </main>
      <aside>
        <CohortList />
      </aside>
    </div>
  );
}

export default App;
