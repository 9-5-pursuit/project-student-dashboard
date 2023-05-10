import React from "react";

function CohortList({ setCardCohort, cohortList, handleTitle, setTitle }) {
  return (
    <div>
      <h3 className="cohort-title">Choose a Class by Start Date</h3>

      <ul className="list-group list-group-flush">
        <li className="list-group-item fw-bold">
          <a
            className="text-decoration-none text-dark"
            href="#"
            onClick={() => setCardCohort("All Students")}
          >
            <div onClick={(e) => setTitle(e.target.innerHTML)}>
              All Students
            </div>
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
    </div>
  );
}

export default CohortList;
