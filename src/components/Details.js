import React from "react";

function Details({ codewars, certifications, cohort }) {
  //   console.log(codewars);
  return (
    <div>
      <section>
        <h3>Codewars:</h3>
        <ol>
          <li>Current Total: {codewars.current.total}</li>
          <li>Last Week: {codewars.current.lastWeek}</li>
          <li>Goal: {codewars.goal.total}</li>
        </ol>
      </section>
      <section>
        <h3>Scores:</h3>
        <ol>
          <li>Assignments: {cohort.scores.assignments}</li>
          <li>Projects: {cohort.scores.projects}</li>
          <li>Assessments: {cohort.scores.assessments}</li>
        </ol>
      </section>
      <section>
        <h3>Certifications:</h3>
        <ol>
          <li>Resume: {certifications.resume}</li>
          <li>LinkedIn: {certifications.linkedin}</li>
          <li>Mock Interview: {certifications.mockInterview}</li>
          <li>Github: {certifications.github}</li>
        </ol>
      </section>
    </div>
  );
}

export default Details;
