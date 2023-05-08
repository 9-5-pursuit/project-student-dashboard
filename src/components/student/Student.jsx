import { useState } from "react";
import StudentDetails from "../studentDetails/StudentDetails";
import "./Student.css";

export default function Student({ student, addNoteToStudent }) {
  const [showDetails, setShowDetails] = useState(false);
  const isOnTrack =
    Object.values(student.certifications).every((v) => v) &&
    student.codewars.current.total > 600;

  function formatDob(dob) {
    const date = new Date(dob).toLocaleDateString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return date;
  }
  return (
    <li className="student">
      <div className="card">
        <div className="profile-pic">
          <img src={student.profilePhoto} alt="profile pic"></img>
        </div>
        <div className="info">
          <div className="divider">
            <div className="personal-info">
              <p>
                <strong>
                  {student.names.preferredName + " "}
                  {student.names.middleName + " "}
                  {student.names.surname}
                </strong>
              </p>
              <p>{student.username}</p>
              <p>
                <span id="bd">Birthday: </span> {formatDob(student.dob)}
              </p>
              <p>
                Cohort: {student.cohort.cohortCode.slice(0, -4)}{" "}
                {student.cohort.cohortCode.slice(-4)}{" "}
              </p>
              <br />
            </div>
            <div>
              <p className="green">
                {isOnTrack ? "On track to graduation" : ""}
              </p>
            </div>

            <p
              className="show-more"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "Show Less" : "Show More..."}
            </p>
          </div>
        </div>

        {showDetails && (
          <div className="details">
            <StudentDetails
              student={student}
              addNoteToStudent={addNoteToStudent}
            />
          </div>
        )}
      </div>
    </li>
  );
}
