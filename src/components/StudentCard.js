import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

export default function StudentCard({ students }) {
  const [inputName, setInputName] = useState("");
  const [inputComment, setInputComment] = useState("");
  const [indexState, setIndexState] = useState(null);
  const [commStor, setCommStor] = useState({});

  //   formatting birthday
  function formatBirthday(bday) {
    const dateArray = bday.split("/");
    const year = dateArray[2];
    const month = dateArray[0] - 1;
    const day = dateArray[1];
    const date = new Date(year, month, day);
    const formattedDate = date.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return formattedDate;
  }

  // adding a note on submit and resetting inputName and inputComment states
  function handleSubmit(e, person) {
    e.preventDefault();

    const firstName =
      inputName[0].toUpperCase() + inputName.slice(1).toLowerCase();

    if (commStor[person.id]) {
      setCommStor({
        ...commStor,
        [person.id]: [
          ...commStor[person.id],
          `${firstName} says, ${inputComment}`,
        ],
      });
    } else {
      setCommStor({
        ...commStor,
        [person.id]: [`${firstName} says, "${inputComment}"`],
      });
    }

    setInputComment("");
    setInputName("");
  }

  //   Putting 'On track to graduate' if criteria met
  function handleOntrack(student) {
    if (
      student.certifications.resume &&
      student.certifications.linkedin &&
      student.certifications.github &&
      student.certifications.mockInterview &&
      student.codewars.current.total > 600
    ) {
      return <p className="text-success m-3">On Track to Graduate</p>;
    }
  }

  //   Getting percentage
  function getPercentage(currentGoal, totalGoal) {
    return Math.round((currentGoal / totalGoal) * 100);
  }

  //   Creating and attaching icons if criteria met
  function checkOrX(boolean) {
    if (boolean) {
      return <FaCheck color="green" />;
    } else {
      return <FaTimes color="red" />;
    }
  }

  //   Changing color of percentage, depending on percentage info
  function colorChange(item) {
    if (
      getPercentage(item.codewars.current.total, item.codewars.goal.total) >=
        0 &&
      getPercentage(item.codewars.current.total, item.codewars.goal.total) < 50
    ) {
      return "text-danger";
    } else if (
      getPercentage(item.codewars.current.total, item.codewars.goal.total) >=
        50 &&
      getPercentage(item.codewars.current.total, item.codewars.goal.total) < 100
    ) {
      return "text-warning";
    } else {
      return "text-success";
    }
  }

  return (
    <>
      {students.map((item, index) => {
        return (
          <div className="card m-3" key={item.id}>
            <div className="row w-100">
              <div className="col">
                <img
                  className="img-fluid rounded float-start p-3"
                  style={{ minwidth: "100px" }}
                  src={item.profilePhoto}
                  alt={item.names.preferredName}
                />
              </div>
              <div className="col">
                <h6 className="pt-4">
                  {item.names.preferredName} {item.names.middleName}{" "}
                  {item.names.surname}
                </h6>
                <p>{item.username}</p>
                <p>
                  <span className="text-success">Birthday</span>:{" "}
                  {formatBirthday(item.dob)}
                </p>
                {indexState !== index ? (
                  <button
                    type="button"
                    class="btn btn-link text-success"
                    onClick={() => {
                      setIndexState(index);
                    }}
                  >
                    Show more...
                  </button>
                ) : (
                  <button
                    type="button"
                    class="btn btn-link text-success"
                    onClick={() => {
                      setIndexState(null);
                    }}
                  >
                    Show less...
                  </button>
                )}
              </div>
              <div className="col">{handleOntrack(item)}</div>
            </div>
            {indexState === index && (
              <div className="card">
                <div className="row m-3">
                  <div className="col">
                    <h6>Codewars:</h6>
                    <p>
                      <span className="text-success">Current Total: </span>
                      {item.codewars.current.total}
                    </p>
                    <p>
                      <span className="text-success">Last Week: </span>
                      {item.codewars.current.lastWeek}
                    </p>
                    <p>
                      <span className="text-success">Goal: </span>
                      {item.codewars.goal.total}
                    </p>
                    <p>
                      <span className={colorChange(item)}>
                        Percent of Goal Achieved:{" "}
                      </span>
                      {getPercentage(
                        item.codewars.current.total,
                        item.codewars.goal.total
                      )}
                      %
                    </p>
                  </div>
                  <div className="col">
                    <h6>Scores</h6>
                    <p>
                      <span className="text-success">Assignments: </span>
                      {Math.round(item.cohort.scores.assignments * 100)}%
                    </p>
                    <p>
                      <span className="text-success">Projects: </span>
                      {Math.round(item.cohort.scores.projects * 100)}%
                    </p>
                    <p>
                      <span className="text-success">Assessments: </span>
                      {Math.round(item.cohort.scores.assessments * 100)}%
                    </p>
                  </div>
                  <div className="col">
                    <h6>Certifications</h6>
                    <p>
                      <span className="text-success">Resume: </span>
                      {item.certifications.resume ? (
                        <FaCheck color="green" />
                      ) : (
                        <FaTimes color="red" />
                      )}
                    </p>
                    <p>
                      <span className="text-success">LinkedIn: </span>
                      {checkOrX(item.certifications.linkedin)}
                    </p>
                    <p>
                      <span className="text-success">Mock Interview: </span>
                      {checkOrX(item.certifications.mockInterview)}
                    </p>
                    <p>
                      <span className="text-success">GitHub: </span>
                      {checkOrX(item.certifications.github)}
                    </p>
                  </div>
                </div>
                <hr />
                <div>
                  <h4 className="m-3">1-on-1 Notes</h4>
                  <form
                    className="align-items-start p-3 m-3 border border-black"
                    onSubmit={(event) => handleSubmit(event, item)}
                  >
                    <label htmlFor="commenter-name">Commenter Name</label>
                    <input
                      onChange={(event) => setInputName(event.target.value)}
                      className="m-2"
                      value={inputName}
                      type="text"
                      id="commenter-name"
                      name="name"
                    ></input>
                    <p>
                      <label htmlFor="commenter">Comment</label>
                      <input
                        onChange={(event) =>
                          setInputComment(event.target.value)
                        }
                        className="m-2"
                        value={inputComment}
                        type="text"
                        id="commenter-name"
                        name="name"
                      ></input>
                    </p>

                    <button type="submit" className="btn btn-success">
                      Add Note
                    </button>
                  </form>
                  {/* <p>{JSON.stringify(commStor)}</p> */}
                  <ul>
                    {commStor[item.id] &&
                      commStor[item.id].map((entry, i) => {
                        return <li key={item.id + i.toString()}>{entry}</li>;
                      })}
                  </ul>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
