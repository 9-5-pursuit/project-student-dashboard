import React from "react";

export default function Cohortlist({ students }) {
  const cohortStartDates = students.reduce((cohortDates, student) => {
    if (!cohortDates.includes(student.cohort.cohortCode)) {
      cohortDates.push(student.cohort.cohortCode);
    }
    return cohortDates;
  }, []);
    
  return (
    <div>
      <h2>Choose a Class by Start Date</h2>
      <ul>
        <li>All Students</li>
        {cohortStartDates.map((cohortStartDate) => (
            <li key={cohortStartDate}>
              {cohortStartDate}
            </li>
        ))}
      </ul>
    </div>
  );
}