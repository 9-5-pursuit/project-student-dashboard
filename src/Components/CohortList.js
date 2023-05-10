import React, { useState } from "react";
import CohortOrderButton from "./CohortOrderButton";
import { filterStudents } from "../data/functions";
import { sortCohort } from "../data/functions";

function CohortList({ data, setStudents, setCohortName, setSelect }) {
  // state for cohort list
  const [cohortList, setCohortList] = useState(sortCohort(data));
  // --- sort cohort fn

  function cohortFilter(event) {
    const value = event.target.id;
    setCohortName(event.target.innerText);

    if (value === "AllStudents") {
      setStudents(data);
    } else {
      filterStudents(value, setStudents, data);
    }
    // reset after cohort selected
    setSelect("all");
  }

  return (
    <>
      <CohortOrderButton
        cohortList={cohortList}
        setcohortList={setCohortList}
      />

      {cohortList.map((el) => {
        const code = el.split(" ").join("");

        return (
          <h4 className="cohort" key={el}>
            <span
              id={code}
              onChange={(event) => {
                cohortFilter(event);
              }}
            >
              {el}
            </span>
            <hr />
          </h4>
        );
      })}
    </>
  );
}

export default CohortList;
