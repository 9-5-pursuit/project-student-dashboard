import { useState } from "react";
import data from "./data/data.json";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [cardCohort, setCardCohort] = useState("All Students");

  const [title, setTitle] = useState("All Students");

  let cohortList = function () {
    let newObj = [];

    for (let i = 0; i < data.length; i++) {
      newObj[i] = {
        cohortName:
          data[i]["cohort"]["cohortCode"].match(/[a-zA-Z]+/g) +
          " " +
          data[i]["cohort"]["cohortCode"].match(/\d+/g),
        cohortCode: data[i]["cohort"]["cohortCode"],
      };
    }

    const result = newObj.filter(
      (item, index, self) =>
        index ===
        self.findIndex(
          (e) =>
            e.cohortName === item.cohortName && e.cohortCode === item.cohortCode
        )
    );
    const sortedArr = result.sort((a, b) => {
      if (a.cohortName.match(/\d+/g) < b.cohortName.match(/\d+/g)) {
        return 1;
      }
      if (a.cohortName.match(/\d+/g) > b.cohortName.match(/\d+/g)) {
        return -1;
      }
      return 0;
    });

    return sortedArr;
  };

  function showByCohort() {
    let someArray = [];
    for (let i of data) {
      if (cardCohort === "All Students") {
        return data;
      }
      if (i["cohort"]["cohortCode"] === cardCohort) {
        // console.log(i);

        someArray.push(i);
      }
    }

    return someArray;
  }

  /* Function to switch from show more to show less and vice versea */

  function toggleShow(e) {
    if (e.target.innerHTML === "Show More...") {
      e.target.innerHTML = "Show Less...";
    } else {
      e.target.innerHTML = "Show More...";
    }
  }

  /**********************************/
  function handleTitle(e) {
    setTitle(e.target.innerHTML);
    setCardCohort(e.target.id);
  }

  function handleBirthday(date) {
    let options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    let birthday = new Date(date);
    let formattedBirthday = birthday.toLocaleDateString("en-US", options);
    return formattedBirthday;
  }

  function handleGoalColor(a, b) {
    let goal = ((a / b) * 100).toFixed();
    if (goal >= 100) {
      return "green";
    } else if (goal >= 50 && goal < 100) {
      return "yellow";
    } else {
      return "red";
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Student Dashboard</h1>
      </header>

      {/**********************************/}

      <aside className="my-4">
        <h3>Choose a Class by Start Date</h3>

        <ul className="list-group list-group-flush">
          <li className="list-group-item fw-bold">
            <a
              className="text-decoration-none text-dark"
              href="#"
              onClick={() => setCardCohort("All Students")}
            >
              All Students
            </a>
          </li>

          {cohortList().map(({ cohortCode, cohortName }) => {
            return (
              <li key={Math.random()} className="list-group-item fw-bold">
                <a
                  className="text-decoration-none text-dark"
                  onClick={handleTitle}
                  href="#"
                  id={cohortCode}
                >
                  {cohortName}
                </a>
              </li>
            );
          })}

          <li></li>
        </ul>
      </aside>

      {/**********************************/}

      <main className="my-4">
        <div className="main-header">
          <h2>{title}</h2>
          <p>
            Total Students: <span>{showByCohort().length}</span>
          </p>
        </div>

        <div className="card-container">
          {showByCohort().map(
            ({
              names,
              username,
              dob,
              profilePhoto,
              id,
              codewars,
              cohort,
              certifications,
              notes,
            }) => {
              return (
                <div
                  key={id}
                  className="card mb-3"
                  style={{ maxwidth: "540px" }}
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={profilePhoto}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">
                          {names["preferredName"] +
                            " " +
                            names["middleName"][0] +
                            "." +
                            " " +
                            names["surname"]}
                        </h5>
                        <p className="card-email">{username}</p>
                        <p className="card-birthday">
                          <span>Birthday: </span>
                          {handleBirthday(dob)}
                        </p>
                        {certifications["resume"] &&
                        certifications["linkedin"] &&
                        certifications["github"] &&
                        certifications["mockInterview"] &&
                        codewars["current"]["total"] >= 600 &&
                        cardCohort !== "All Students" ? (
                          <p>
                            <span>On Track To Graduate</span>
                          </p>
                        ) : null}
                        <p>
                          <button
                            className="btn btn-link text-decoration-none"
                            data-bs-toggle="collapse"
                            href={"#" + id}
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                          >
                            <span onClickCapture={toggleShow}>
                              Show More...
                            </span>
                          </button>
                        </p>
                        <div className="collapse" id={id}>
                          <div className="card-body">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th scope="col">Codewars:</th>
                                  <th scope="col">Scores:</th>
                                  <th scope="col">Certifications:</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <span>Current Total:</span>{" "}
                                    {codewars["current"]["total"]}
                                  </td>
                                  <td>
                                    <span>Assignments:</span>{" "}
                                    {cohort["scores"]["assignments"] * 100} %
                                  </td>
                                  <td>
                                    <span>Resume:</span>{" "}
                                    {!certifications["resume"] ? (
                                      <i className="bi bi-x-lg"></i>
                                    ) : (
                                      <i className="bi bi-check2"></i>
                                    )}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span>Last Week:</span>{" "}
                                    {codewars["current"]["lastWeek"]}
                                  </td>
                                  <td>
                                    <span>Projects:</span>{" "}
                                    {cohort["scores"]["projects"] * 100} %
                                  </td>
                                  <td>
                                    <span>LinkedIn:</span>{" "}
                                    {!certifications["linkedin"] ? (
                                      <i className="bi bi-x-lg"></i>
                                    ) : (
                                      <i className="bi bi-check2"></i>
                                    )}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span>Goal:</span>{" "}
                                    {codewars["goal"]["total"]}
                                  </td>
                                  <td>
                                    <span>Assessments:</span>{" "}
                                    {cohort["scores"]["assessments"] * 100} %
                                  </td>
                                  <td>
                                    <span>Mock Interview:</span>{" "}
                                    {!certifications["mockInterview"] ? (
                                      <i className="bi bi-x-lg"></i>
                                    ) : (
                                      <i className="bi bi-check2"></i>
                                    )}
                                  </td>
                                </tr>
                                <tr>
                                  <td colSpan="2">
                                    <span>Percent of Goal Achieved:</span>{" "}
                                    <span
                                      className={handleGoalColor(
                                        codewars["current"]["total"],
                                        codewars["goal"]["total"]
                                      )}
                                    >
                                      {(
                                        (codewars["current"]["total"] /
                                          codewars["goal"]["total"]) *
                                        100
                                      ).toFixed()}{" "}
                                      %
                                    </span>
                                  </td>
                                  <td>
                                    <span>Github:</span>{" "}
                                    {!certifications["github"] ? (
                                      <i className="bi bi-x-lg"></i>
                                    ) : (
                                      <i className="bi bi-check2"></i>
                                    )}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div className="notes">
                              <h6>1-on-1 Notes</h6>
                              <form>
                                <div className="mb-2">
                                  <label
                                    className=" col-form-label "
                                    htmlFor="commenter"
                                  >
                                    Commenter Name:
                                  </label>
                                  <div>
                                    <input
                                      className=""
                                      type="text"
                                      id={id}
                                      name="commenter"
                                    />
                                  </div>
                                </div>
                                <label htmlFor="comment">Comment:</label>
                                <div>
                                  <input
                                    className=""
                                    type="text"
                                    id={id}
                                    name="comment"
                                  />
                                </div>
                                <div>
                                  <button
                                    className="
                                  mt-3"
                                    type="submit"
                                  >
                                    Add Note
                                  </button>
                                </div>
                              </form>

                              <ul>
                                {notes.map((item) => {
                                  return (
                                    <li key={Math.random()}>
                                      {item.commenter +
                                        " says " +
                                        `"${item.comment}"`}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </main>

      {/**********************************/}
    </div>
  );
}

export default App;
