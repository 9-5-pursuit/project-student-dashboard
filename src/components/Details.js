import React from "react";
import { FaTimes, FaCheck } from "react-icons/fa";

function Details({ codewars, certifications, cohort }) {
  //   console.log(codewars);

  function certified(certifications) {
    if (certifications.resume) {
      return "true";
    }
  }

  return (
    <div>
      <section>
        <h3>Codewars:</h3>
        <ol>
          <li>Current Total: {codewars.current.total}</li>
          <li>Last Week: {codewars.current.lastWeek}</li>
          <li>Goal: {codewars.goal.total}</li>
          <li>
            Percent of Goal Achieved:{" "}
            {`${Math.floor(
              (codewars.current.total / codewars.goal.total) * 100
            )} %`}
          </li>
        </ol>
      </section>
      <section>
        <h3>Scores:</h3>
        <ol>
          <li>Assignments: {`${cohort.scores.assignments * 100} %`}</li>
          <li>Projects: {`${cohort.scores.projects * 100} %`}</li>
          <li>Assessments: {`${cohort.scores.assessments * 100} %`}</li>
        </ol>
      </section>
      <section>
        <h3>Certifications:</h3>
        <ol>
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
          <li>Github: {certifications.github ? <FaCheck /> : <FaTimes />}</li>
        </ol>
      </section>
    </div>
  );
}

export default Details;
