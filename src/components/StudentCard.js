import { useState } from "react";
import StudentData from "../data/data.json";
import { FaCheck, FaTimes } from "react-icons/fa";

export default function StudentCard({ student }) {
  const [enterName, setEnterName] = useState("");
  const [enterComment, setEnterComment] = useState("");
  const [notes, setNotes] = useState([]);
  const [showMore, setShowMore] = useState(false);

  function handleMath(goal, current) {
    const percentage = Math.round((current / goal) * 100);

    return (
      <span
        style={{
          color:
            percentage >= 100 ? "green" : percentage >= 50 ? "#8B8000" : "red",
        }}
      >
        {percentage}%
      </span>
    );
  }

  const handleSubmit = (indvStudent, e) => {
    e.preventDefault();
    // console.log(enterName, enterComment);
    // console.log(enterName);
    // console.log(enterComment);
    setEnterName("");
    setEnterComment("");

    setNotes((prevNotes) => {
      return [`${enterName} says ${enterComment}`, ...prevNotes];
    });
  };

  const isOnTrackToGraduate =
    student.certifications.resume &&
    student.certifications.linkedin &&
    student.certifications.github &&
    student.certifications.mockInterview &&
    student.codewars.current.total > 600;

  return (
    <div key={student.id} className="row border m-3 rounded  border-success">
      {/* Student profile pic */}
      <div className="col-md-2  ">
        <img
          src={student.profilePhoto}
          alt={student.names.preferredName}
          className="img-fluid py-2"
        />
      </div>
      {/* Additional student info */}
      <div className="col-md-10 ">
        <h4>
          {student.names.preferredName} {student.names.middleName.slice(0, 1)}.{" "}
          {student.names.surname}
        </h4>
        <p>{student.username}</p>
        <p>
          <span className="text-success">Birthday:</span>{" "}
          {new Date(student.dob).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        {showMore === false ? (
          <a
            className="text-success hover "
            onClick={() => setShowMore(!showMore)}
          >
            Show More ...
          </a>
        ) : (
          <a
            className="text-success  hover"
            onClick={() => setShowMore(!showMore)}
          >
            Show Less ...
          </a>
        )}

        <div>
          {showMore && (
            <div className="m-4">
              <div className="row">
                {/* column one */}
                <div className="col">
                  <p className="text-success">
                    Current Total:{" "}
                    <span className="text-black">
                      {student.codewars.current.total}{" "}
                    </span>
                  </p>
                  <p className="text-success">
                    Last Week:{" "}
                    <span className="text-black">
                      {student.codewars.current.lastWeek}{" "}
                    </span>
                  </p>
                  <p className="text-success">
                    Goal:{" "}
                    <span className="text-black">
                      {" "}
                      {student.codewars.goal.total}{" "}
                    </span>
                  </p>
                  <p className="text-success">
                    Percent of Goal Achieved:{" "}
                    <span className="text-black">
                      {handleMath(
                        student.codewars.goal.total,
                        student.codewars.current.total
                      )}
                    </span>
                  </p>
                </div>
                {/* column two */}
                <div className="col">
                  <h5>Scores:</h5>
                  <p className="text-success">
                    Assignments:
                    <span className="text-black">
                      {" "}
                      {Math.round(student.cohort.scores.assignments * 100)}%
                    </span>
                  </p>
                  <p className="text-success">
                    Projects:
                    <span className="text-black">
                      {" "}
                      {Math.round(student.cohort.scores.projects * 100)}%
                    </span>
                  </p>
                  <p className="text-success">
                    Assessments:
                    <span className="text-black">
                      {" "}
                      {Math.round(student.cohort.scores.assessments * 100)}%
                    </span>
                  </p>
                </div>
                {/* column three */}
                <div className="col">
                  <h5>Certifications:</h5>
                  <p className="text-success">
                    Resume:{" "}
                    {student.certifications.resume ? (
                      <FaCheck />
                    ) : (
                      <FaTimes color="red" />
                    )}
                  </p>
                  <p className="text-success">
                    LinkedIn:
                    {student.certifications.linkedin ? (
                      <FaCheck />
                    ) : (
                      <FaTimes color="red" />
                    )}
                  </p>
                  <p className="text-success">
                    Mock Interview:
                    {student.certifications.mockInterview ? (
                      <FaCheck />
                    ) : (
                      <FaTimes color="red" />
                    )}
                  </p>
                  <p className="text-success">
                    GitHub:
                    {student.certifications.github ? (
                      <FaCheck />
                    ) : (
                      <FaTimes color="red" />
                    )}
                  </p>
                  {isOnTrackToGraduate ? (
                    <p className="text-success">On Track to Graduate</p>
                  ) : (
                    <p className="text-danger">Not on Track to Graduate</p>
                  )}
                </div>
              </div>
              <hr />
              <h5>1-on-1 Notes</h5>
              <form
                className="border m-3 border-success"
                onSubmit={(event) => {
                  handleSubmit(student, event);
                }}
              >
                <label htmlFor="name" className="m-3">
                  Commenter Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={enterName}
                  className="m-2"
                  onChange={(event) => setEnterName(event.target.value)}
                />
                <div>
                  <label htmlFor="comment" className="m-3">
                    Comment
                  </label>
                  <input
                    type="text"
                    name="comment"
                    id="comment"
                    value={enterComment}
                    className="m-2"
                    onChange={(event) => setEnterComment(event.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-success m-2 mb-3">
                  Add Note
                </button>
              </form>
              <div>
                {notes.map((note, index) => (
                  <li key={{ index }}>{note}</li>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
