import React, {useState} from "react";

export default function StudentCard({ student }) {
  const [showMore, setShowMore] = useState(false);
  const [showNote, setShowNote] = useState(student.notes);

  const studentNames = student.names;
  const studentCodewars = student.codewars;
  const studentCohortScores = student.cohort.scores;
  const certifications = student.certifications;

  function handleButtonClick() {
    setShowMore(!showMore);
  }

  function handleGraduation(student) {
    const certificationValues = Object.values(student.certifications);
    if (
      certificationValues.every((value) => value) &&
      student.codewars.current.total > 600
    ) {
      return "On Track to Graduate";
    }
  }

  function handleBirthday(student) {
    const date = new Date(student.dob);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const formattedDate = `${
      monthNames[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
    return formattedDate;
  }

  const formatScoreAsPercentage = (score) => {
    return `${(score * 100).toFixed(0)} %`;
  };

  function handleCertification(certification) {
    if (certification) {
      return <span>&#9989;</span>; // green checkmark
    } else {
      return <span>&#10060;</span>; // red X
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleTextChange(event) {
    const newNote = event.target.value;
    setShowNote((prevNotes) => [...prevNotes, newNote]);
  }

  return (
    <div
      className="student"
      style={{
        border: "1px solid green",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      <h3>
        {studentNames.preferredName} {studentNames.middleName.slice(0, 1)}.{" "}
        {studentNames.surname}
      </h3>
      <p>{student.username}</p>
      <p>
        <span className="text-success">Birthday:</span>{" "}
        {handleBirthday(student)}
      </p>
      <img
        style={{ height: "150px", width: "150px" }}
        src={student.profilePhoto}
        alt={studentNames.surname}
      />
      <p className="text-success">{handleGraduation(student)}</p>
      <div>
        <button
          className="showMore btn-link border-0 bg-transparent text-success"
          onClick={handleButtonClick}
        >
          {showMore ? "Show less..." : "Show more..."}
        </button>
        {showMore && (
          <>
            <div className="Details">
              <h4>Codewars:</h4>
              <p>
                <span className="text-success">Current Total:</span>{" "}
                {studentCodewars.current.total}
              </p>
              <p>
                <span className="text-success">Last Week:</span>{" "}
                {studentCodewars.current.lastWeek}
              </p>
              <p>
                <span className="text-success">Goal:</span>{" "}
                {studentCodewars.goal.total}
              </p>
              <p>
                <span
                  className={`${
                    studentCodewars.current.total >= studentCodewars.goal.total
                      ? "text-success"
                      : studentCodewars.current.total /
                          studentCodewars.goal.total >=
                        0.5
                      ? "text-warning"
                      : "text-danger"
                  }`}
                >
                  Percent of Goal Achieved:
                </span>{" "}
                {formatScoreAsPercentage(
                  studentCodewars.current.total / studentCodewars.goal.total
                )}
              </p>
              <h4>Scores:</h4>
              <p>
                <span className="text-success">Assignments:</span>{" "}
                {formatScoreAsPercentage(studentCohortScores.assignments)}
              </p>
              <p>
                <span className="text-success">Projects:</span>{" "}
                {formatScoreAsPercentage(studentCohortScores.projects)}
              </p>
              <p>
                <span className="text-success">Assessments:</span>{" "}
                {formatScoreAsPercentage(studentCohortScores.assessments)}
              </p>
              <h4>Certifications:</h4>
              <p>
                <span className="text-success">Resume:</span>{" "}
                {handleCertification(certifications.resume)}
              </p>
              <p>
                <span className="text-success">LinkedIn:</span>{" "}
                {handleCertification(certifications.linkedin)}
              </p>
              <p>
                <span className="text-success">Mock Interview:</span>{" "}
                {handleCertification(certifications.mockInterview)}
              </p>
              <p>
                <span className="text-success">GitHub:</span>{" "}
                {handleCertification(certifications.github)}
              </p>
            </div>
            <form className="Notes" onSubmit={handleSubmit}>
              <h3>1-on-1 Notes</h3>
              <fieldset
                style={{
                  border: "1px solid",
                  padding: "20px",
                  marginTop: "20px",
                }}
              >
                <div>
                  <label htmlFor="name">Commenter Name</label>
                  <input
                    type="text"
                    id="name"
                    style={{ marginLeft: "10px" }}
                    onChange={handleTextChange}
                  />
                </div>
                <div>
                  <label htmlFor="comment">Comment</label>
                  <input
                    type="text"
                    id="comment"                 
                    style={{ marginLeft: "10px", marginTop: "5px" }}
                    onChange={handleTextChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-success"
                  style={{ marginTop: "10px" }}
                >
                  Add Note
                </button>
              </fieldset>
              <ul className="notes-list"></ul>
              <li></li>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
