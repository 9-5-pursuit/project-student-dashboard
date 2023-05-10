import React from "react";
import { useState } from "react";
import GradTrack from "./GradTrack";

function formatDate(birthDate) {
  const date = new Date(birthDate);
  const options = { month: "long", day: "numeric", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

function StudentCard({ student }) {
  const formattedDate = formatDate(student.dob);
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  function onTrackToGraduate(student) {
    if (
      student.certifications.resume &&
      student.certifications.linkedin &&
      student.certifications.github &&
      student.certifications.mockInterview &&
      student.codewars.current.total > 600
    ) {
      return (
        <span style={{ color: "green", fontWeight: "bold" }}>
          On Track to Graduate
        </span>
      );
    }
    return null;
  }

  //   const result = onTrackToGraduate(student);

  return (
    <div
      className="card my-4 border-3 border-primary-subtle text-center "
      style={{ width: "30rem", backgroundColor: "#AECAD5" }}
    >
      <img
        className="img-fluid rounded-circle mx-auto my-2 "
        style={{ width: "10rem" }}
        src={student.profilePhoto}
        alt="student headshots"
      />
      {onTrackToGraduate(student)}
      <p>
        {student.names.preferredName} {student.names.middleName}{" "}
        {student.names.surname}
      </p>
      <p>Username: {student.username} </p>
      <p>Birthday: {formattedDate}</p>
      <button className="btn btn-primary btn-sm" onClick={toggleShowMore}>
        {showMore ? "Show Less..." : "Show More..."}
      </button>

      {showMore && <GradTrack student={student} />}
    </div>
  );
}

export default StudentCard;
