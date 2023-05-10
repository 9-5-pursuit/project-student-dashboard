import { useState } from "react";
import data from "./data";

function App() {
  // console.log(data);

  const [selectedCohort, setSelectedCohort] = useState("All");

  const handleCohortSelect = (cohortCode) => {
    setSelectedCohort(cohortCode);
  };

  const filteredStudents =
    selectedCohort === "All"
      ? data
      : data.filter((data) => data.cohort.cohortCode === selectedCohort);

  function FilteredStartDate() {
    return (
      <div className="list-by-start">
        <h2>list by start date</h2>
        <div>
          <button onClick={() => handleCohortSelect("All")}>
            All Students
          </button>
          <button onClick={() => handleCohortSelect("Spring2025")}>
            Spring 2025
          </button>
          <button onClick={() => handleCohortSelect("Summer2025")}>
            Summer 2025
          </button>
          <button onClick={() => handleCohortSelect("Fall2025")}>
            Fall 2025
          </button>
          <button onClick={() => handleCohortSelect("Winter2025")}>
            Winter 2025
          </button>
          <button onClick={() => handleCohortSelect("Spring2026")}>
            Spring 2026
          </button>
          <button onClick={() => handleCohortSelect("Summer2026")}>
            Summer 2026
          </button>{" "}
          <button onClick={() => handleCohortSelect("Fall2026")}>
            Fall 2026
          </button>{" "}
          <button onClick={() => handleCohortSelect("Winter2026")}>
            Winter 2026
          </button>
        </div>
      </div>
    );
  }

  function StudentList({ filteredStudents }) {
    const [showMore, setShowMore] = useState({});

    function toggleShowMore(id) {
      setShowMore((prevState) => ({
        ...prevState,
        [id]: !prevState[id],
      }));
    }

    return (
      <>
        <div className="studentlist">
          <h2>All Students</h2>
          <p>Total Students: {selectedCohort.length}</p>
          <ul>
            {filteredStudents.map((item) => (
              <li key={item.id} className="student">
                <div className="main-info">
                  <img src={item.profilePhoto} alt={item.names.preferredName} />
                  <h2>
                    {item.names.preferredName}
                    <p>{item.username}</p>
                    <p>Birthday:{item.dob}</p>
                  </h2>
                </div>
                <button onClick={() => toggleShowMore(item.id)}>
                  {showMore[item.id] ? "show less" : "show more"}{" "}
                </button>
                {showMore[item.id] && <StudentInfo student={item} />}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }

  function StudentInfo({ student }) {
    console.log(student);
    //destructing student data
    const {
      codewars: { current, goal },
      certifications: { resume, linkedin, github, mockInterview },
      cohort: { scores },
    } = student;

    console.log(scores);

    const assignmentsPercentage = Math.round(scores.assignment * 100);
    const projectsPercentage = Math.round(scores.projects * 100);
    const assesmentPercentage = Math.round(scores.assessments * 100);

    const totalPercentage = Math.round((current.total / goal.total) * 100);
    return (
      <div className="toggle-details">
        <div className="CodeWars">
          <h4>CodeWars </h4>
          <p>
            Current Total: <strong>{current.total}</strong>
          </p>
          <p>Last Week Total: {current.lastWeek}</p>
          <p>Goal: {goal.total}</p>
          <p>
            Percentage of Goals Achieved: <strong>{totalPercentage}%</strong>
          </p>
        </div>
        <div className="certifications">
          <h4>Certifications</h4>
          {resume ? (
            <p>
              Resume
              <span> &#10003;</span>
            </p>
          ) : (
            <p>
              Resume
              <span> &#10007;</span>
            </p>
          )}
          {github ? (
            <p>
              GitHub
              <span> &#10003;</span>
            </p>
          ) : (
            <p>
              Github
              <span> &#10007;</span>
            </p>
          )}
          {linkedin ? (
            <p>
              linkedin
              <span> &#10003;</span>
            </p>
          ) : (
            <p>
              linkedin
              <span> &#10007;</span>
            </p>
          )}
          {mockInterview ? (
            <p>
              MockInterview
              <span> &#10003;</span>
            </p>
          ) : (
            <p>
              MockInterview
              <span> &#10007;</span>
            </p>
          )}
        </div>
        <div className="scores">
          <h4>Scores</h4>
          <p>Assignments: {assignmentsPercentage}%</p>
          <p>Projects: {projectsPercentage}%</p>
          <p>Assessment: {assesmentPercentage}%</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="header">
        <h1 className="student-dash">Student Dashboard</h1>
      </div>
      <div className="filt-info">
        <FilteredStartDate />
        <StudentList filteredStudents={filteredStudents} />
      </div>
    </>
  );
}

export default App;
