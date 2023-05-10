import React from "react";

function CohortList({ setCardCohort, cohortList, handleTitle, setTitle }) {
  return (
    <div>
      <h3 className="cohort-title">Choose a Class by Start Date</h3>

      <ul className="list-group list-group-flush">
        <li className="list-group-item fw-bold">
          <button
            className="btn btn-link text-decoration-none text-dark"
            onClick={() => setCardCohort("All Students")}
          >
            <div onClick={(e) => setTitle(e.target.innerHTML)}>
              All Students
            </div>
          </button>
        </li>

        {cohortList().map(({ cohortCode, cohortName }) => {
          return (
            <li key={Math.random()} className="list-group-item fw-bold">
              <button
                className="btn btn-link text-decoration-none text-dark"
                onClick={handleTitle}
                id={cohortCode}
              >
                {cohortName}
              </button>
            </li>
          );
        })}

        <li></li>
      </ul>
    </div>
  );
}

export default CohortList;
