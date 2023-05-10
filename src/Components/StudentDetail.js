import Form from "./Form";

function StudentDetail({ studentData }) {
  let percentage = Math.round(
    (studentData.codewars.current.total / studentData.codewars.goal.total) * 100
  );

  return (
    <div className="detail">
      <div className="codewars">
        <h4>Codewars:</h4>
        <p>Current Total: {studentData.codewars.current.total}</p>
        <p>Last Week: {studentData.codewars.current.lastWeek}</p>
        <p>Goal: {studentData.codewars.goal.total}</p>
        <p>Percentage of Goal Achieve: {percentage}%</p>
      </div>

      <div className="cohort">
        <h4>Score</h4>
        <p>Assignment: {studentData.cohort.scores.assignments * 100}%</p>
        <p>Projects: {studentData.cohort.scores.projects * 100}%</p>
        <p>Assessment: {studentData.cohort.scores.assessments * 100}%</p>
      </div>

      <div className="certifications">
        <h4>Certifications</h4>
        <p>Resume: {studentData.certifications.resume ? "✅" : "❌"}</p>
        <p>Linkedin: {studentData.certifications.linkedin ? "✅" : "❌"}</p>
        <p>
          Mock Interview:{" "}
          {studentData.certifications.mockInterview ? "✅" : "❌"}
        </p>
        <p>
          Github:
          {studentData.certifications.github ? "✅" : "❌"}
        </p>
      </div>

      <div>
        <Form />
      </div>
    </div>
  );
}
export default StudentDetail;
