import React from "react";
import { FaTimes, FaCheck } from "react-icons/fa";
import OneonOne from "./OneonOne";

function Details({ codewars, certifications, cohort, notes }) {
  //   const [stylePercent, setStylePercent] = useState("none");

  function certified(certifications) {
    if (certifications.resume) {
      return "true";
    }
  }

  let stylePercent = "none";
  let score = Math.floor((codewars.current.total / codewars.goal.total) * 100);
  if (score > 100) {
    stylePercent = "green";
  }

  if (score >= 50 && score < 100) {
    stylePercent = "yellow";
  }

  if (score < 50) {
    stylePercent = "red";
  }

  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-4">
          <section className="section">
            <h3>Codewars:</h3>
            <ul>
              <li>Current Total: {codewars.current.total}</li>
              <li>Last Week: {codewars.current.lastWeek}</li>
              <li>Goal: {codewars.goal.total}</li>
              <li style={{ color: stylePercent }}>
                Percent of Goal Achieved:
                {` ${Math.floor(
                  (codewars.current.total / codewars.goal.total) * 100
                )} %`}
              </li>
            </ul>
          </section>
        </div>
        <div className="col-md-4">
          <section className="section">
            <h3>Scores:</h3>
            <ul>
              <li>Assignments: {`${cohort.scores.assignments * 100} %`}</li>
              <li>Projects: {`${cohort.scores.projects * 100} %`}</li>
              <li>Assessments: {`${cohort.scores.assessments * 100} %`}</li>
            </ul>
          </section>
        </div>
        <div className="col-md-4">
          <section className="section">
            <h3>Certifications:</h3>
            <ul>
              <li>
                Resume: {certified(certifications) ? <FaCheck /> : <FaTimes />}
              </li>
              <li>
                LinkedIn: {certifications.linkedin ? <FaCheck /> : <FaTimes />}
              </li>
              <li>
                Mock Interview:{" "}
                {certifications.mockInterview ? <FaCheck /> : <FaTimes />}
              </li>
              <li>
                Github: {certifications.github ? <FaCheck /> : <FaTimes />}
              </li>
            </ul>
          </section>
        </div>
        <OneonOne notes={notes} />
      </div>
    </div>
  );
}

export default Details;
