import React from "react";

export default function Cohortlist({ students }) {
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

  /// This function takes a season string and returns the month index that corresponds to the start of that season. //
  function getMonthIndex(season) {
    const months = {
      Winter: 0,
      Spring: 3,
      Summer: 6,
      Fall: 9,
    };
    return months[season];
  }

  return (
    <div>
      <h2>Choose a Class by Start Date</h2>
      <ul className="list-unstyled">
        <li>All Students</li>
        {cohortStartDates.map((cohortCode) => (
          <li key={cohortCode}>
            {cohortCode.slice(0, -4).concat(" ", cohortCode.slice(-4))}
          </li>
        ))}
      </ul>
    </div>
  );
}