import React, { useState } from "react";
import data from "./data/data.json";
import Notes from "./Notes";
function App() {
  const [students, setStudents] = useState(data);
  const [selectedCohort, setSelectedCohort] = useState("All Students");
  const [openDetails, setOpenDetails] = useState([]);

  // Get unique cohorts
  const uniqueCohorts = Array.from(
    new Set(data.map((student) => student.cohort.cohortCode))
  );

  // Sort cohorts
  const sortedCohorts = uniqueCohorts.sort((a, b) => {
    const seasonOrder = { Spring: 1, Summer: 2, Winter: 3, Fall: 4 };
    const aYear = a.slice(-4);
    const aSeason = a.slice(0, -4);
    const bYear = b.slice(-4);
    const bSeason = b.slice(0, -4);
    if (aYear !== bYear) {
      return aYear.localeCompare(bYear);
    } else {
      return seasonOrder[aSeason] - seasonOrder[bSeason];
    }
  });

  const formattedCohorts = sortedCohorts.map((cohort) => {
    const formattedCohortName = formatCohortName(cohort);
    return {
      cohortCode: cohort,
      cohortName: formattedCohortName,
    };
  });

  formattedCohorts.unshift({
    cohortCode: "All Students",
    cohortName: "All Students",
  });

  // Format cohort name
  function formatCohortName(cohortCode) {
    const year = cohortCode.slice(-4);
    const season = cohortCode.slice(0, -4);
    switch (season) {
      case "Winter":
        return `Winter ${year}`;
      case "Spring":
        return `Spring ${year}`;
      case "Summer":
        return `Summer ${year}`;
      case "Fall":
        return `Fall ${year}`;
      default:
        return cohortCode;
    }
  }

  // Filter students by cohort
  function filterStudents(cohortCode) {
    setSelectedCohort(cohortCode);
    if (cohortCode === "All Students") {
      setStudents(data);
    } else {
      const filteredStudents = data.filter(
        (student) => student.cohort.cohortCode === cohortCode
      );
      setStudents(filteredStudents);
    }
  }

  // Render graduation status
  function graduationStatus(certifications, codeWarsScore) {
    if (
      certifications.resume &&
      certifications.linkedin &&
      certifications.github &&
      certifications.mockInterview &&
      codeWarsScore > 600
    ) {
      return <p>On Track to Graduate</p>;
    } else {
      return null;
    }
  }

  //create the codwars percentage and color it
  function getCodeWarsPercentage(points, goal) {
    const percentage = (points / goal) * 100;

    if (percentage >= 100) {
      return <span style={{ color: "green" }}>{percentage.toFixed(2)}%</span>;
    } else if (percentage >= 50) {
      return <span style={{ color: "yellow" }}>{percentage.toFixed(2)}%</span>;
    } else {
      return <span style={{ color: "red" }}>{percentage.toFixed(2)}%</span>;
    }
  }

  const [notes, setNotes] = useState([]);

  //handle submitting new comment on form
  function handleNoteSubmit(event, id) {
    event.preventDefault();
    const form = event.target;
    const commenter = form.elements.commenter.value;
    const comment = form.elements.comment.value;
    const studentId = id;
    const newNote = { commenter, comment, studentId };
    setNotes([...notes, newNote]);
    form.reset();
  }

  //toggle extra student details
  function toggleDetails(id) {
    setOpenDetails((openDetails) => {
      if (openDetails.includes(id)) {
        return openDetails.filter((openId) => openId !== id);
      } else {
        return [...openDetails, id];
      }
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Student Dashboard</h1>
      </header>
      <div className="App-content">
        <div className="cohort-list">
          <h2>Choose a Class by Start Date</h2>
          <ul>
            {formattedCohorts.map((cohort) => (
              <li key={cohort.cohortCode}>
                <span
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                  onClick={() => filterStudents(cohort.cohortCode)}
                >
                  {cohort.cohortName}
                </span>
                {/* <button onClick={() => filterStudents(cohort.cohortCode)}>
                {cohort.cohortName}
              </button> */}
              </li>
            ))}
          </ul>
        </div>
        <div className="student-list">
          <h2>{formatCohortName(selectedCohort)}</h2>
          <p>Total Students: {students.length}</p>
          <ul>
            {students.map((student) => (
              <li className="student" key={student.id}>
                <img src={student.profilePhoto} alt="Profile" />
                <div>
                  <h3>
                    {student.names.preferredName} {student.names.surname}
                  </h3>
                  <p>{student.username}</p>
                  <p>
                    Birthday:{" "}
                    {new Date(student.dob).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>

                  {graduationStatus(
                    student.certifications,
                    student.codewars.current.total
                  )}

                  <button onClick={() => toggleDetails(student.id)}>
                    {openDetails.includes(student.id)
                      ? "Show Less..."
                      : "Show More..."}
                  </button>
                  {openDetails.includes(student.id) && (
                    <div className="student-details">
                      <div className="stats-container">
                        <div className="codewars-container">
                          <p>CodeWars: </p>
                          <ul>
                            <li>
                              Current Total: {student.codewars.current.total}
                            </li>

                            <li>Goal: {student.codewars.goal.total}</li>

                            <li>
                              Percent of goal achieved:{" "}
                              {getCodeWarsPercentage(
                                student.codewars.current.total,
                                student.codewars.goal.total
                              )}
                            </li>
                          </ul>
                        </div>

                        <div className="scores-container">
                          <p>Scores: </p>
                          <ul>
                            <li>
                              Assignments:{" "}
                              {student.cohort.scores.assignments * 100}%
                            </li>
                            <li>
                              Projects: {student.cohort.scores.projects * 100}%
                            </li>
                            <li>
                              Assessments:{" "}
                              {student.cohort.scores.assessments * 100}%
                            </li>
                          </ul>
                        </div>
                        <div className="certifications-container">
                          <p>Certifications:</p>
                          <ul>
                            <li>
                              <span className="resume-check">Resume:</span>{" "}
                              {student.certifications.resume ? (
                                <span role="img" aria-label="Resume Certified">
                                  ✅
                                </span>
                              ) : (
                                <span
                                  role="img"
                                  aria-label="Resume Not Certified"
                                >
                                  ❌
                                </span>
                              )}
                            </li>
                            <li>
                              <span className="linkedin-check">Linkedin: </span>{" "}
                              {student.certifications.linkedin ? (
                                <span
                                  role="img"
                                  aria-label="Linkedin Certified"
                                >
                                  ✅
                                </span>
                              ) : (
                                <span
                                  role="img"
                                  aria-label="Linkedin Not Certified"
                                >
                                  ❌
                                </span>
                              )}
                            </li>
                            <li>
                              <span className="github-check">Github:</span>{" "}
                              {student.certifications.github ? (
                                <span role="img" aria-label="Github Certified">
                                  ✅
                                </span>
                              ) : (
                                <span
                                  role="img"
                                  aria-label="Github Not Certified"
                                >
                                  ❌
                                </span>
                              )}
                            </li>
                            <li>
                              <span className="interview-check">
                                Mock Interview:
                              </span>{" "}
                              {student.certifications.mockInterview ? (
                                <span
                                  role="img"
                                  aria-label="Interview Certified"
                                >
                                  ✅
                                </span>
                              ) : (
                                <span
                                  role="img"
                                  aria-label="Interview Not Certified"
                                >
                                  ❌
                                </span>
                              )}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="form-container">
                        <form
                          onSubmit={(event) =>
                            handleNoteSubmit(event, student.id)
                          }
                        >
                          <div>
                            <label>
                              Commenter:
                              <input type="text" name="commenter" required />
                            </label>
                          </div>
                          <div>
                            <label>
                              Comment:
                              <textarea name="comment" required></textarea>
                            </label>
                          </div>
                          <div>
                            <button type="submit">Add Note</button>
                          </div>
                        </form>
                      </div>
                      <div className="notes-container">
                        <Notes
                          notes={notes}
                          previousNotes={student.notes}
                          studentId={student.id}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
