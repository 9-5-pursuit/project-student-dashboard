import React from "react";

function GradDd({
  students,
  setStudents,
  data,
  select,
  setSelect,
  cohortName,
}) {
  // filter students
  function filterStudents(str, setFn1, setFn2, cohortArr) {
    if (str === "AllStudents") {
      setFn1(cohortArr);
      setFn2(cohortArr);
    } else {
      const filteredStudentArr = cohortArr.filter(
        ({ cohort }) => cohort.cohortCode === str.split(" ").join("")
      );
      setFn1(filteredStudentArr);
      setFn2(filteredStudentArr);
    }
  }
  // function for filter by graduation status
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
  // function for dropdown onChange
  function dropDownHandle(event) {
    const value = event.target.value;
    setSelect(value);
    if (value === "graduate") {
      setStudents(graduateStudents());
    } else if (value === "all") {
      filterStudents(cohortName, setStudents, data);
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
