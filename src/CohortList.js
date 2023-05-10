import React, { useState } from "react";

function CohortList({ studentData, setSelectedCohort }) {
  const cohorts = [
    "All Students",
    "Winter 2026",
    "Fall 2026",
    "Summer 2026",
    "Spring 2026",
    "Winter 2025",
    "Fall 2025",
    "Summer 2025",
    "Spring 2025",
  ];

  const handleCohortClick = (cohort) => {
    setSelectedCohort(cohort);
  };

  return (
    <aside>
      <h2>Choose a Class by Start Date</h2>
      <ul>
        {cohorts.map((cohort) => (
          <li key={cohort} onClick={()=> handleCohortClick(cohort)}>
            {cohort}
          </li>
        ))}
      </ul>
    </aside>
  );
}
export default CohortList;