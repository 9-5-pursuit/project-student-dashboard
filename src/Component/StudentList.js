import { useState } from "react";
import data from "../data/data.json";
import { FaCheck, FaTimes } from "react-icons/fa";

//StudentList Component
function StudentList({ students }) {
  const [showCard, setShowCard] = useState(null);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const [storage, setStorage] = useState("");

  function handlePercentage(currentTotal, goalTotal) {
    const percentage = Math.round((currentTotal / goalTotal) * 100);

    if (percentage >= 100) {
      return <span style={{ color: "green" }}>{percentage}%</span>;
    } else if (percentage >= 50) {
      return <span style={{ color: "yellow" }}>{percentage}%</span>;
    } else {
      return <span style={{ color: "red" }}>{percentage}%</span>;
    }
  }

  function handleShowCard(id) {
    setShowCard(!showCard);
  }

  //Handle Submit Button
  //
  function handleSubmit(studentObj, e) {
    e.preventDefault();

    setName("");
    setComment("");
    // console.log(name, comment);

    setStorage((note) => {
      return [`${name} says ${comment}`, ...note];
    });
  } //

  return (
    <div>
      {students.map((student) => (
        <div key={student.id}>
          <div className="card">
            <div className="card-body">
              <div className="col-2">
                <img
                  className="img-fluid py-3"
                  style={{ minwidth: "100px" }}
                  src={student.profilePhoto}
                  alt="profile"
                />
              </div>

              <h5 className="card-title">
                {student.names.preferredName}{" "}
                {student.names.middleName
                  ? student.names.middleName.charAt(0) + ". "
                  : ""}
                {student.names.surname}
              </h5>
              <h6>{student.username}</h6>
              <p className="card-text">
                <span className="birthday">
                  <span className="text-success">Birthday:</span>
                </span>{" "}
                {/* format date*/}
                {new Date(student.dob).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>

              <a className="text-success" href="#" onClick={handleShowCard}>
                {showCard ? "Show Less..." : "Show More..."}
              </a>
              {showCard && (
                <div>
                  <div className="row">
                    <div className="col">
                      <span className="font-weight-bold">
                        <strong>Codewars:</strong>
                      </span>
                      <p>
                        <span className="text-success">Current Total:</span>{" "}
                        {student.codewars.current.total}
                      </p>
                      <p>
                        <span className="text-success">Last Week:</span>{" "}
                        {student.codewars.current.lastWeek}
                      </p>
                      <p>
                        <span className="text-success">Goal:</span>{" "}
                        {student.codewars.goal.total}
                      </p>
                      <p>
                        <span className="text-success">
                          Percent of Goal Achieved:
                        </span>{" "}
                        {handlePercentage(
                          student.codewars.current.total,
                          student.codewars.goal.total
                        )}
                      </p>
                    </div>

                    <div className="col">
                      <span className="font-weight-bold">
                        <strong>Scores</strong>
                      </span>
                      <p>
                        <span className="text-success">Assignments:</span>{" "}
                        {student.cohort.scores.assignments * 100} %
                      </p>

                      <p>
                        <span className="text-success">Projects:</span>{" "}
                        {student.cohort.scores.projects * 100} %
                      </p>

                      <p>
                        <span className="text-success">Assessments:</span>{" "}
                        {student.cohort.scores.assessments * 100} %
                      </p>
                    </div>

                    <div className="col">
                      <span className="font-weight-bold">
                        <strong> Certifications</strong>
                      </span>
                      <p className="text-success">
                        Resume:{" "}
                        {student.certifications.resume ? (
                          <FaCheck size="32" />
                        ) : (
                          <FaTimes size="30" className="text-danger" />
                        )}
                      </p>
                      <p className="text-success">
                        Linkedin:{" "}
                        {student.certifications.linkedin ? (
                          <FaCheck size="30" />
                        ) : (
                          <FaTimes size="30" className="text-danger" />
                        )}
                      </p>
                      <p className="text-success">
                        Mock Interview:{" "}
                        {student.certifications.mockInterview ? (
                          <FaCheck size="30" />
                        ) : (
                          <FaTimes size="30" className="text-danger" />
                        )}
                      </p>
                      <p className="text-success">
                        Github:{" "}
                        {student.certifications.github ? (
                          <FaCheck size="30" />
                        ) : (
                          <FaTimes size="30" className="text-danger" />
                        )}
                      </p>
                    </div>
                    {student.codewars.current.total > 600 &&
                    student.certifications.resume &&
                    student.certifications.linkedin &&
                    student.certifications.github &&
                    student.certifications.mockInterview ? (
                      <p className="text-success">On Track to Graduate</p>
                    ) : (
                      <p className="text-danger">Not on Track to Graduate</p>
                    )}
                  </div>
                  <div>
                    <section>
                      <hr />
                      <strong>1-on-1 Notes</strong>
                      <form
                        onSubmit={(event) => {
                          handleSubmit(student, event);
                        }}
                      >
                        <label>
                          Commentor Name
                          <input
                            onChange={(event) => setName(event.target.value)}
                            type="text"
                            name="name"
                            value={name}
                            id="name"
                          />
                        </label>
                        <br />
                        <br />
                        <p>
                          <label>
                            Comment:
                            <input
                              onChange={(event) =>
                                setComment(event.target.value)
                              }
                              type="text"
                              name="name"
                              value={comment}
                              id="comment"
                            />
                          </label>
                        </p>

                        <div>
                          <button type="submit" className="btn btn-success">
                            Add Note
                          </button>
                        </div>
                      </form>
                      {/* <div>
                        {storage.map((storage, index) => (
                          <ul key={{ index }}>{storage}</ul>
                        ))}
                      </div> */}
                    </section>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StudentList;
