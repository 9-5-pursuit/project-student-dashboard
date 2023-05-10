import React, { useState } from "react";
import { filterStudents } from "../data/functions";

function StudentCohortLink({
  id,
  cohort,
  setStudents,
  data,
  setCohortName,
  setSelect,
}) {
  const cohortLink = cohort.cohortCode.replace(2, " 2");

  function studentCohort(event) {
    filterStudents(event.target.name, setStudents, data);
    setCohortName(event.target.innerText);
    setSelect("all");
  }

  return (
    <span>
      Cohort:{" "}
      <a
        className="studentCohortLink"
        name={cohort.cohortCode}
        onClick={(event) => {
          studentCohort(event);
        }}
      >
        {cohortLink}
      </a>
    </span>
  );
}

export default StudentCohortLink;
