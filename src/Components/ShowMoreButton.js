import React, { useState } from "react";
import StudentHiddenInfo from "./StudentHiddenInfo";

function ShowMoreButton({ id, students }) {
  // state from stats toggle
  const [click, setClick] = useState(false);

  // state for id
  const [studentId, setStudentId] = useState("");

  // state for show more
  const [showMore, setShowMore] = useState(false);

  function handleShowMore(event) {
    const value = event.target.name;
    setStudentId(value);
    setClick(!click);
    setShowMore(!showMore);
  }

  return (
    <>
      <a
        className="showMore"
        name={id}
        onClick={(event) => {
          handleShowMore(event);
        }}
      >
        {showMore ? "Show Less..." : "Show More..."}
      </a>
      {click && (
        <StudentHiddenInfo id={id} studentId={studentId} students={students} />
      )}
    </>
  );
}

export default ShowMoreButton;
