import React from "react";
import CodeWars from "./CodeWars";
import Scores from "./Scores";
import Certifications from "./Certifications";
import Notes from "./Notes";

function StudentHiddenInfo({ studentId, id, students }) {
  // filter students by id
  const thisStudent = students.filter(({ id }) => id === studentId);

  return (
    <div className={id}>
      {thisStudent.map(({ codewars, certifications, cohort }) => {
        return (
          <div className="studentStats" key={id}>
            <CodeWars codewars={codewars} />
            <Scores scores={cohort} />
            <Certifications certifications={certifications} />
          </div>
        );
      })}
      <hr />
      <Notes thisStudent={thisStudent} />
    </div>
  );
}

export default StudentHiddenInfo;
