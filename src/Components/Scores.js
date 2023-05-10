import React from "react";

function Scores({ scores }) {
  const assignments = scores.scores.assignments * 100;
  const projects = scores.scores.projects * 100;
  const assessments = scores.scores.assessments * 100;

  return (
    <div className="scores">
      <h4>Scores:</h4>
      <p>
        <span>Assignments: </span>
        {assignments}%
      </p>
      <p>
        <span>Projects: </span>
        {projects}%
      </p>
      <p>
        <span>Assessments: </span>
        {assessments}%
      </p>
    </div>
  );
}

export default Scores;
