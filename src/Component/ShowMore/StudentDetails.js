import React from 'react'


function StudentDetails({ cohort, codewars, certifications }) {
    console.log(codewars.current);
  return (
    <div className="show-more-details-container row">
      <div className=".col">
        <h2>Code Wars:</h2>
        <p>
          <span>Actual Total:</span>
          {codewars.current.total}
        </p>
        <p>
          <span>Last Week:</span>
          {codewars.current.lastWeek}
        </p>
        <p>
          <span>Goal:</span>
          {codewars.goal.total}
        </p>
        <p>
          <span>Percent of Goal Achieved:</span>
          {Math.floor(codewars.current.total / codewars.goal.total) * 100}
        </p>
      </div>

      <div className=".col">
        <h2>Scores</h2>

        <p>
          <span>Assessments: </span>
          {cohort.scores.assessments * 100}%
        </p>
        <p>
          <span>Project: </span>
          {cohort.scores.projects * 100}%
        </p>
        <p>
          <span>Assignments: </span>
          {cohort.scores.assignments * 100}%
        </p>
      </div>

      <div className=".col">
        <h2>Certifications:</h2>
        <p>
          <span>Resume: </span> {certifications.resume ? "✅" : "❌"}
        </p>
        <p>
          <span>LinkedIn: </span> {certifications.linkedin ? "✅" : "❌"}
        </p>
        <p>
          <span>Mock Interview: </span>
          {certifications.mockInterview ? "✅" : "❌"}
        </p>
        <p>
          <span>Github: </span> {certifications.github ? "✅" : "❌"}
        </p>
      </div>
    </div>
  );
}


 export default StudentDetails;