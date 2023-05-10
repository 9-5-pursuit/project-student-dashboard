import React from "react";
import { FaTimes, FaCheck } from "react-icons/fa";
import OneonOne from "./OneonOne";
function GradTrack({ student }) {
  const {
    id,
    names: { preferredName, middleName, surname },
    username,
    dob,
    profilePhoto,
    codewars: {
      current: {
        total: codewarsCurrentTotal,
        lastWeek: codewarsCurrentLastWeek,
      },
      goal: { total: codewarsGoalTotal, lastWeek: codewarsGoalLastWeek },
    },
    certifications: { resume, linkedin, github, mockInterview },
    // notes: [{ commenter, comment }]
    cohort: {
      cohortCode,
      cohortStartDate,
      scores: { assignments, projects, assessments },
    },
  } = student;

  const roundedPercentage = (
    (codewarsCurrentTotal / codewarsGoalTotal) *
    100
  ).toFixed(2);

  let percentColor = "none";
  let score = roundedPercentage;
  if (score > 100) {
    percentColor = "green";
  }

  if (score >= 50 && score < 100) {
    percentColor = "yellow";
  }

  if (score < 50) {
    percentColor = "red";
  }

  return (
    <div className="row">
      <ul className="col-4 list-unstyled">
        Codewars:
        <li>Current Total: {codewarsCurrentTotal} </li>
        <li>Last Week: {codewarsCurrentLastWeek}</li>
        <li>Goal: {codewarsGoalTotal}</li>
        <li style={{ color: percentColor }}>
          Percent of Goal Achieved: {roundedPercentage}%
        </li>
      </ul>
      <ul className="col-4 list-unstyled">
        <li>Assignments: {assignments * 100}%</li>
        <li>Projects: {projects * 100}%</li>
        <li>Assessments: {assessments * 100}%</li>
      </ul>
      <ul className="col-4 list-unstyled">
        <li>Resume: {resume ? <FaCheck /> : <FaTimes />} </li>
        <li>Linked: {linkedin ? <FaCheck /> : <FaTimes />}</li>
        <li>Mock Interview: {mockInterview ? <FaCheck /> : <FaTimes />}</li>
        <li>GitHub: {github ? <FaCheck /> : <FaTimes />} </li>
      </ul>
      <OneonOne />
    </div>
  );
}

export default GradTrack;
