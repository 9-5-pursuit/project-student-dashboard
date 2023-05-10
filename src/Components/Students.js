import React from "react";
import Student from "./Student";
import { useState } from "react";

function AllStudents({ selectedStudents }) {
  const [selectedStudentID, setSelectedStudentID] = useState(null);
  const [notes, setNotes] = useState({});

  function toggleDetails(studentID) {
    const selectedStudentStatus =
      selectedStudentID === studentID ? null : studentID;
    setSelectedStudentID(selectedStudentStatus);
  }

  function percentageColor(studentObj) {
    const percentage = (
      (studentObj.codewars.current.total / studentObj.codewars.goal.total) *
      100
    ).toFixed(0);
    return percentage;
  }

  function handleSubmit(event, studentID) {
    event.preventDefault();
    const name = event.target.name.value;
    const comment = event.target.comment.value;

    if (name && comment) {
      setNotes({
        ...notes,
        [studentID]: name,
        [studentID + "a"]: comment,
      });
    }

    event.target.reset();
  }

  function getStudentDetails(studentId) {
    const student = selectedStudents.find(
      (student) => student.id === studentId
    );

    if (student) {
      return (
        <>
          <div className="moreDetails">
            <h4>Codewars:</h4>

            {Object.entries(student.codewars.current).map(([objKey, value]) => {
              return (
                <p key={objKey}>
                  <span>
                    {objKey.charAt(0).toUpperCase() + objKey.slice(1)}
                  </span>
                  : {value}
                </p>
              );
            })}
            <p>
              <span>Goal</span>: {student.codewars.goal.total}
            </p>
            <p
              className={
                percentageColor(student) >= 100
                  ? "green"
                  : percentageColor(student) > 50
                  ? "yellow"
                  : "red"
              }
            >
              <span>Percent of Goal Achieved:</span> {percentageColor(student)}%
            </p>
          </div>

          <div className="scores">
            <h4>Scores:</h4>
            {Object.entries(student.cohort.scores).map(([objKey, value]) => {
              return (
                <p key={objKey}>
                  <span>
                    {objKey.charAt(0).toUpperCase() + objKey.slice(1)}
                  </span>
                  : {value * 100}%
                </p>
              );
            })}
          </div>

          <div className="certifications">
            <h4>Certifications:</h4>

            {Object.entries(student.certifications).map(([objKey, value]) => {
              return (
                <p key={objKey}>
                  <span>
                    {objKey.charAt(0).toUpperCase() + objKey.slice(1)}
                  </span>
                  :
                  {value ? (
                    <span role="img" aria-label="Checkmark">
                      {" "}
                      ✅
                    </span>
                  ) : (
                    <span role="img" aria-label="Cross">
                      {" "}
                      ❌
                    </span>
                  )}
                </p>
              );
            })}
          </div>

          <div className="notes">
            <h4>1-on-1 Notes</h4>

            <form onSubmit={(event) => handleSubmit(event, student.id)}>
              <label htmlFor="name">Commenter Name</label>
              <input type="text" id="name" /> <br />
              <label htmlFor="comment">Comment</label>
              <input type="text" id="comment" />
              <br />
              <button className="btn_notes">Add Note</button>
            </form>

            <ul>
              {notes[student.id] && notes[student.id + "a"] && (
                <li>
                  {notes[student.id]} says, "{notes[student.id + "a"]}"
                </li>
              )}
            </ul>
          </div>
        </>
      );
    }

    return null;
  }

  function formatDate(numericDate) {
    const date = new Date(numericDate);
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);

    return formattedDate;
  }

  function onTrackToGraduate(studentObj, codewars) {
    const studentObjValues = Object.values(studentObj);
    const result = studentObjValues.every((value) => value === true);
    const value = codewars.current.total > 600;
    return result && value;
  }

  return selectedStudents.map((student) => {
    const showDetails = student.id === selectedStudentID;
    return (
      <div className="singleStudent" key={student.id}>
        <Student
          dob={formatDate(student.dob)}
          profilePhoto={student.profilePhoto}
          names={student.names}
          username={student.username}
        />
        {onTrackToGraduate(student.certifications, student.codewars) ===
          true && <p className="ontrack">On Track To Graduate</p>}

        <button
          className="show_details"
          onClick={() => toggleDetails(student.id)}
        >
          {showDetails ? "Show Less..." : "Show More..."}
        </button>

        {showDetails && getStudentDetails(student.id)}
      </div>
    );
  });
}

export default AllStudents;
