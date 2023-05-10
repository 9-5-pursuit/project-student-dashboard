import { useState } from "react";
import StudentDetail from "./StudentDetail";
import "./Student.css";

function Student({ studentData }) {
  const [showMore, setShowMore] = useState(null);

  function handleClick(index) {
    setShowMore(index === showMore ? null : index);
  }

  let student = studentData.map((student, index) => {
    return (
      <div className="student" key={index}>
        <img
          src={student.profilePhoto}
          alt="student-pic"
          width={100}
          height={100}
        />
        <p>
          {student.names.preferredName} {student.names.middleName.charAt()}.{" "}
          {student.names.surname}
        </p>
        <p>{student.username}</p>
        <p>Birthday: {student.dob}</p>

        <p onClick={() => handleClick(index)}>
          {index !== showMore ? "Show More..." : "Show Less..."}
        </p>

        {index === showMore && (
          <StudentDetail studentData={studentData[index]} />
        )}
      </div>
    );
  });

  return <div>{student}</div>;
}
export default Student;
