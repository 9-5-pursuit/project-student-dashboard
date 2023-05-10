import React from "react";

function CohortList({ studentData, setSelectedCohort }) {
  const cohorts = [
    "All Students",
    "Winter2026",
    "Fall2026",
    "Summer2026",
    "Spring2026",
    "Winter2025",
    "Fall2025",
    "Summer2025",
    "Spring2025",
  ];

  const handleCohortClick = (cohort) => {
    setSelectedCohort(cohort === "All Students" ? null : cohort);
  };
  const formatCohortName = (cohort) => {
    if (cohort === "All Students") {
      return cohort;
    } else {
      const index = cohort.indexOf("2");
      if (index !== -1) {
        const season = cohort.substring(0, index);
        const year = cohort.substring(index);
        return `${season} ${year}`;
      } else {
        return cohort;
      }
    }
  };
  return (
    <aside className="row">
      <h2>Choose a Class by Start Date</h2>
      <ul className="col-4">
        {cohorts.map((cohort) => (
          <li
            className="btn cursor-pointer"
            key={cohort}
            onClick={() => handleCohortClick(cohort)}
          >
            {formatCohortName(cohort)}
          </li>
        ))}
      </ul>
    </aside>
  );
}
export default CohortList;
