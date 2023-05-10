import React from "react";

function GradTrack({ student }) {
  console.log(student.certifications.resume);
  const currTotal = student.codewars.current.total;
  const currLastWeek = student.codewars.current.lastWeek;
  const goalTotal = student.codewars.goal.total;
  //   const goalLastWeek = student.codewars.goal.lastWeek
  const goalPercentage = (currTotal / goalTotal) * 100;
  const roundedGoalPercent = goalPercentage.toFixed(2);
  const gradeAssignment = student.cohort.scores.assignments * 100;
  const gradeAssessment = student.cohort.scores.assessments * 100;
  const gradeProjects = student.cohort.scores.projects * 100;
  const certResume = student.certifications.resume;
  const certLinkedIn = student.certifications.linkedIn;
  const certGitHub = student.certifications.github;
  const certMockInterview = student.certifications.mockInterview;

  return (
    <div>
      <ul className="code-wars">
        Codewars:
        <li>Current Total: {currTotal} </li>
        <li>Last Week: {currLastWeek}</li>
        <li>Goal: {goalTotal}</li>
        <li>Percent of Goal Achieved: {roundedGoalPercent}%</li>
      </ul>
      <ul className="scores">
        <li>Assignments: {gradeAssignment}%</li>
        <li>Projects: {gradeProjects}%</li>
        <li>Assessments: {gradeAssessment}%</li>
      </ul>
      <ul className="certificates">
        <li>Resume: {certResume}</li>
        <li>Linked: {certLinkedIn}</li>
        <li>Mock Interview: {certMockInterview}</li>
        <li>GitHub: {certGitHub} </li>
      </ul>
    </div>
  );
}

export default GradTrack;
