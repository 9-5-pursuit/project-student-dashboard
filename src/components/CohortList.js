import React from "react";

function CohortList({ data, updateStudentList }) {
  function cohortCode(data) {
    let cohortYears = [];
    const Winter2026 = data.filter(
      ({ cohort }) => cohort.cohortCode === "Winter2026"
    );
    const Fall2026 = data.filter(
      ({ cohort }) => cohort.cohortCode === "Fall2026"
    );
    const Summer2026 = data.filter(
      ({ cohort }) => cohort.cohortCode === "Summer2026"
    );
    const Spring2026 = data.filter(
      ({ cohort }) => cohort.cohortCode === "Spring2026"
    );
    const Winter2025 = data.filter(
      ({ cohort }) => cohort.cohortCode === "Winter2025"
    );
    const Fall2025 = data.filter(
      ({ cohort }) => cohort.cohortCode === "Fall2025"
    );
    const Summer2025 = data.filter(
      ({ cohort }) => cohort.cohortCode === "Summer2025"
    );
    const Spring2025 = data.filter(
      ({ cohort }) => cohort.cohortCode === "Spring2025"
    );

    if (Winter2026.length > 0) {
      cohortYears.push("Winter 2026");
    }
    if (Fall2026.length > 0) {
      cohortYears.push("Fall 2026");
    }
    if (Summer2026.length > 0) {
      cohortYears.push("Summer 2026");
    }
    if (Spring2026.length > 0) {
      cohortYears.push("Spring 2026");
    }
    if (Winter2025.length > 0) {
      cohortYears.push("Winter 2025");
    }
    if (Fall2025.length > 0) {
      cohortYears.push("Fall 2025");
    }
    if (Summer2025.length > 0) {
      cohortYears.push("Summer 2025");
    }
    if (Spring2025.length > 0) {
      cohortYears.push("Spring 2025");
    }

    return cohortYears;
  }

  return (
    <>
      <h3 className="mt-4">Choose a Class by Start Date</h3>
      <div className="list-group">
        <button
          type="button"
          className="list-group-item list-group-item-action"
          onClick={() => updateStudentList(data)}
        >
          All Students
        </button>
        {cohortCode(data).map((cohortYears) => (
          <button
            key={cohortYears}
            type="button"
            className="list-group-item list-group-item-action"
            onClick={() => updateStudentList(cohortYears)}
          >
            {cohortYears}
          </button>
        ))}
      </div>
    </>
  );
}

export default CohortList;
