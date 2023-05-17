import { useState } from "react";
import Kpi from "./Kpi";
import "./kpi.css";

const StudentCard = ({ student }) => {
  const [buttonText, setButtonText] = useState(false);

  const handleShowMore = () => {
    setButtonText(!buttonText);
  };
  return (
    <div>
      <li key={student.id} className="student-card">
        <img src={student.profilePhoto} alt="photo"></img>
        <div className="student-info">
          <h3>
            {student.names.preferredName}
            {student.names.middleName.charAt()}. {student.names.surname}
          </h3>
          <p>{student.username}</p>
          <p>
            <span className="all-bday">Birthday: </span>
            {student.dob}
          </p>
          <br />
          <button className="show-more" onClick={handleShowMore}>
            {" "}
            {!buttonText ? "Show More..." : "Show Less..."}
          </button>
          {buttonText ? <Kpi student={student} /> : null}
        </div>
      </li>
    </div>
  );
};
export default StudentCard;
