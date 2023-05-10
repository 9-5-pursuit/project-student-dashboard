import React, { useState } from "react";
import StudentData from "../data/data.json";
import { FaCheck, FaTimes } from "react-icons/fa";
import StudentCard from "./StudentCard";

export default function StudentList({ students, selectedCohort }) {
  const getTitle = () => {
    if (selectedCohort === "All students") {
      return "All Students";
    } else {
      const season = selectedCohort.slice(0, -4);
      const year = selectedCohort.slice(-4);
      return `${season} ${year}`;
    }
  };

  return (
    <div>
      {/* Title */}
      <h3>{getTitle()}</h3>

      {/* get the student count by */}
      <p>
        Number of students:{" "}
        <span className="text-success">{students.length}</span>
      </p>

      {/* Render each student by using map and returning desired information */}
      {/* {students.map((student) => (
        <>
        <StudentCard />
        </>
        )} */}
      {students.map((student) => (
        <>
          <StudentCard key={student} student={student} />
        </>
      ))}
    </div>
  );
}
