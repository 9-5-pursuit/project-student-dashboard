import React, { useState } from "react";

export default function Cohortlist({
  students,
  setStudents,
  setTotal,
  setCurrentClass,
}) {

  const cohortStartDates = students.reduce((cohortDates, student) => {
    if (!cohortDates.includes(student.cohort.cohortCode)) {
      cohortDates.push(student.cohort.cohortCode);
    }
    return cohortDates;
  }, []);

  cohortStartDates.sort((a, b) => {
    const dateA = new Date(a.slice(-4), getMonthIndex(a.slice(0, -4)));
    const dateB = new Date(b.slice(-4), getMonthIndex(b.slice(0, -4)));
    return dateA - dateB;
  });

  // This function takes a season string and returns the month index that corresponds to the start of that season.
  function getMonthIndex(season) {
    const months = {
      Winter: 0,
      Spring: 3,
      Summer: 6,
      Fall: 9,
    };
    return months[season];
  }

  function handleAllStudents() {
    setStudents(students);
    setCurrentClass("All Students");
    setTotal(students.length);
  }

  function handleCohort(cohortCode) {
    const filteredStudents = students.filter(
      (student) => student.cohort.cohortCode === cohortCode
    );
    setStudents(filteredStudents);
    setTotal(filteredStudents.length);
    setCurrentClass(cohortCode.slice(0, -4).concat(" ", cohortCode.slice(-4)));
  }

  return (
    <div>
      <h2>Choose a Class by Start Date</h2>
      <ul className="list-unstyled list-group">
        {/* Anonymous function is required to use function that was passed from app.js */}
        <li onClick={() => handleAllStudents()}>All Students</li>
        {cohortStartDates.map((cohortCode) => (
          <li key={cohortCode} onClick={() => handleCohort(cohortCode)}>
            {cohortCode.slice(0, -4).concat(" ", cohortCode.slice(-4))}
          </li>
        ))}
      </ul>
    </div>
  );
}
