import React from "react";

function Cards({
  title,
  showByCohort,
  handleBirthday,
  cardCohort,
  toggleShow,
  handleGoalColor,
}) {
  return (
    <div>
      {" "}
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
              <div key={id} className="card mb-3" style={{ maxwidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="img-div">
                      <img
                        src={profilePhoto}
                        className="img-fluid rounded"
                        alt="..."
                      />
                    </div>
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

                      <button
                        className="btn  btn-link text-decoration-none"
                        data-bs-toggle="collapse"
                        href={"#" + id}
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        <span onClickCapture={toggleShow}>Show More...</span>
                      </button>

                      <div className="collapse" id={id}>
                        <div className="card-body">
                          <table className="table table-hover">
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
                                  <span>Goal:</span> {codewars["goal"]["total"]}
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
    </div>
  );
}

export default Cards;
