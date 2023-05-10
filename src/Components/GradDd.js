import React from "react";
import { filterStudents } from "../data/functions";

function GradDd({
  cohortName,
  data,
  select,
  setSelect,
  setSearch,
  setSearchResult,
  setStudents,
  students,
}) {
  // fn for filter by graduation status
  function graduateStudents() {
    const graduateFilteredArr = students.filter(
      ({ codewars, certifications }) =>
        codewars.current.total > 600 &&
        certifications.resume &&
        certifications.linkedin &&
        certifications.github &&
        certifications.mockInterview
    );
    return graduateFilteredArr;
  }
  // fn for dropdown change
  function dropDownHandle(event) {
    const value = event.target.value;
    setSelect(value);
    setSearch("");
    if (value === "graduate") {
      setStudents(graduateStudents());
      setSearchResult(graduateStudents());
    } else if (value === "all") {
      filterStudents(cohortName, setStudents, setSearchResult, data);
    }
  }

  return (
    <select
      onChange={(event) => {
        dropDownHandle(event);
      }}
      value={select}
    >
      <option value="all">All Students</option>
      <option value="graduate">On Track To Graduate</option>
    </select>
  );
}
export default GradDd;
