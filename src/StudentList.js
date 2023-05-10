import React from "react";
import studentData from "./data/data.json";
import StudentCard from "./StudentCard";

function StudentList({ selectedCohort }) {
  const filteredStudents = selectedCohort
    ? studentData.filter(
        (student) => student.cohort.cohortCode === selectedCohort
      )
    : studentData;
  function getFormattedCohortName(cohort) {
    if (cohort === "Winter2026") {
      return "Winter 2026";
    } else if (cohort === "Fall2026") {
      return "Fall 2026";
    } else if (cohort === "Summer2026") {
      return "Summer 2026";
    } else if (cohort === "Spring2026") {
      return "Spring 2026";
    } else if (cohort === "Winter2025") {
      return "Winter 2025";
    } else if (cohort === "Fall2025") {
      return "Fall 2025";
    } else if (cohort === "Summer2025") {
      return "Summer 2025";
    } else if (cohort === "Spring2025") {
      return "Spring 2025";
    } else {
      return cohort;
    }
  }

  return (
    <div>
      <h2>
        {selectedCohort
          ? getFormattedCohortName(selectedCohort)
          : "All Students"}
      </h2>

      <h3>Total Students: {filteredStudents.length}</h3>
      {filteredStudents.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}

export default StudentList;
