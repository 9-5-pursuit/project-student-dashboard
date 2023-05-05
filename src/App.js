import { useState } from "react";
import data from "./data/data.json";
// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// let now = new Date(data[0]["dob"]);
// console.log(
//   months[now.getMonth()] + " " + now.getDate() + " " + now.getFullYear()
// );

// new Date().toLocaleDateString("en-us", {
//   year: "numeric",
//   month: "short",
//   day: "numeric",
// });

// console.log(new Date(data[0]["dob"]));

function App() {
  let arr = [];

  for (let i of data) {
    arr.push(i["cohort"][["cohortCode"]]);
  }

  let unique = [...new Set(arr)];
  // console.log(unique);

  for (let i of unique) {
    i.match(/[a-zA-Z]+|[0-9]+/g);
  }

  // console.log(unique.sort());
  // const sorted = unique.sort();
  // console.log(sorted);

  return (
    <div className="App">
      <header>
        <h1>Student Dashboard</h1>
      </header>

      {/**********************************/}

      <aside className="my-4">
        <h3>Choose a Class by Start Date</h3>

        <ul className="list-group list-group-flush">
          <li className="list-group-item fw-bold">All Students</li>

          {unique.map((item) => {
            return (
              <li key={Math.random()} className="list-group-item fw-bold">
                {item}
              </li>
            );
          })}

          <li></li>
        </ul>
      </aside>

      {/**********************************/}

      <main className="my-4">
        <div className="main-header">
          <h2>All Students</h2>
          <p>
            Total Students: <span>{data.length}</span>
          </p>
        </div>

        <div className="card-container">
          {data.map(
            ({
              names,
              username,
              dob,
              profilePhoto,
              id,
              codewars,
              cohort,
              certifications,
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
                          {dob}
                        </p>

                        <p>
                          <a
                            className="btn btn-link"
                            data-bs-toggle="collapse"
                            href={"#" + id}
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                          >
                            <span>Show More...</span>
                          </a>
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
                                    Current Total:{" "}
                                    {codewars["current"]["total"]}
                                  </td>
                                  <td>
                                    Assignments:{" "}
                                    {cohort["scores"]["assignments"] * 100} %
                                  </td>
                                  <td>
                                    Resume:{" "}
                                    {!certifications["resume"] ? "x" : "/"}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    Last Week: {codewars["current"]["lastWeek"]}
                                  </td>
                                  <td>
                                    Projects:{" "}
                                    {cohort["scores"]["projects"] * 100} %
                                  </td>
                                  <td>
                                    LinkedIn:{" "}
                                    {!certifications["linkedin"] ? "x" : "/"}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Goal: {codewars["goal"]["total"]}</td>
                                  <td>
                                    Assessments:{" "}
                                    {cohort["scores"]["assessments"] * 100} %
                                  </td>
                                  <td>
                                    Mock Interview:{" "}
                                    {!certifications["mockInterview"]
                                      ? "x"
                                      : "/"}
                                  </td>
                                </tr>
                                <tr>
                                  <td colSpan="2">
                                    Percent of Goal Achieved:{" "}
                                    {(
                                      (codewars["current"]["total"] /
                                        codewars["goal"]["total"]) *
                                      100
                                    ).toFixed()}{" "}
                                    %
                                  </td>
                                  <td>
                                    Github:{" "}
                                    {!certifications["github"] ? "x" : "/"}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
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
